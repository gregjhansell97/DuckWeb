import aiohttp_cors
from aiohttp import ClientSession, web
import asyncio
import json
import os
import shutil
import zipfile
from pathlib import Path
import time
import random
import sys
import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)

def make_archive(source, destination):
    shutil.make_archive(destination, "zip", source)
    return

class Server:
    '''
    '''
    def __init__(self, port, ip, public_name, peers=set()):
        self.ip = ip
        self.port = port
        self.url = f"{self.ip}:{self.port}"
        self.name = self.url.replace(".", "_").replace(":", "-")
        self.public_name = public_name
        with open("redirect.html", "r") as f:
            self.redirect_text_unformatted = f.read()

        # need to save zip file to a directory
        # zip on folder
        # with zipfile.ZipFile(f"zips/{self.name}", "w") as z:
        #    z.write("test_data")
        # with zipfile.ZipFile(f"zips/{self.name}.zip", 'w') as z: 
        #    for folder, subfolders, files in os.walk('test_data_1'):
        #        for f in files:
        #            f_dir = os.path.join(folder, f)
        #            z.write(
        #                f_dir, 
        #                os.path.relpath(os.path.join(folder, f), 'test_data_1'), 
        #                compress_type = zipfile.ZIP_DEFLATED)
        #make_archive("./test_data_1", f"./zips/{self.name}.zip")
 
        make_archive(self.public_name, self.name)

        # if port == "7000":
        #     make_archive("test_data", self.name) #have to make distinction
        # else:
        #     make_archive("test_data_2", self.name) #have to make distinction
        # #if port == 8080:
        #with open(f"test_data_1") as d:
        #    shutil.make_archive(f"zips/{self.name}", "zip", "test_data_1")
        #else:
        #    shutil.make_archive(f"zips/{self.name}", "zip", "test_data_2")
       

        self.loop = asyncio.get_event_loop()

        # updates the list of peers
        self.peers = peers|{self.url}
        self.loop.run_until_complete(self.refresh_peers())

        # grabs saves data from peers to static file and vice-versa
        self.loop.run_until_complete(self.sync_peers())

        # extracts all files and puts them into public folder
        self.make_static_folders()

    def make_static_folders(self):
        # extract all in zip folder
        for folder, subfolders, files in os.walk("zips"):
            for f in files:
                f_name = os.path.join(folder, f)
                with zipfile.ZipFile(f_name, "r") as z:
                    z.extractall(os.path.join("public/duckweb", f))

        # extract owns file
        with zipfile.ZipFile(f"{self.name}.zip", 'r') as z:
            z.extractall(f"public/duckweb/{self.name}") 
        

    async def sync_peers(self):
        async with ClientSession() as session:
            for p in self.peers:
                if p == self.url:
                    continue
                post_url = f"http://{p}/exchange_data"
                #data = FormData()
                #data.add_field("name", self.name)
                #data.add_field("file", open(f"{self.name}.zip"))
                with open(f"{self.name}.zip", "rb") as f:
                    files = {"name": self.name, "file": f}
                    async with session.post(post_url, data=files) as response:
                        with open(f"zips/{p}.zip", "wb") as f:
                            f.write(await response.read())

    async def on_exchange_data(self, request):
        reader = await request.multipart()
        
        field = await reader.next()
        name = await field.read()
        name = name.decode("utf-8")
        print(name)

        field = await reader.next()
        print(field.name)

        # extracts data as a zip
        size = 0
        with open(f"zips/{name}.zip", "wb") as f:
            while True:
                chunk = await field.read_chunk()
                if not chunk: 
                    break
                size += len(chunk)
                f.write(chunk)

        # converts data from zip to folder
        with zipfile.ZipFile(f"./zips/{name}.zip", "r") as zip_ref:
            zip_ref.extractall(f"./public/duckweb/{name}")
        

        self.peers.add(name.replace("-", ":").replace("_", "."))
        # responds with own zipped data
        return web.FileResponse(f"{self.name}.zip")

    async def get_peers(self, session, peer):
        '''
        makes http request to other servers for peers in the network

        Args:
            session(ClientSession): the current client session
            peer((str, int)): the ip and port of peer

        Returns:
            {str}: a set of peers available
        ''' 

        print("getting peers")

        post_url = f"http://{peer}/get_peers"

        async with session.post(post_url, data=self.url) as response:
            data = await response.text()
            return set(json.loads(data))

    async def on_get_peers(self, request):
        print("on_get_peers")
        peer_url = await request.text()
        return web.json_response(list(self.peers))

    async def refresh_peers(self):
        async with ClientSession() as session:
            for p in self.peers:
                if p == self.url:
                    continue
                # still go through all peers and link with first one to respond
                peers = await self.get_peers(session, p)
                # catch errors break when peers are found
                self.peers |= peers
                break


    async def send_redirect_data(self, request):
        redirect_host = "http://" + random.choice(list(self.peers))
        file_path = str(request.rel_url)
        apparent_host = request.url.origin()
        redirect_text = self.redirect_text_unformatted.format(redirect_host, file_path, apparent_host, self.name)
        return web.Response(headers={'Content-Type': 'text/html'}, body=redirect_text)

    def run(self):
        app = web.Application()
        cors = aiohttp_cors.setup(app, defaults={
            "*": aiohttp_cors.ResourceOptions(
                    allow_credentials=True,
                    expose_headers="*",
                    allow_headers="*",
                )
        })
        app.router.add_static('/duckweb/', 'public/duckweb/')

        # https://github.com/aio-libs/aiohttp-cors/issues/151
        for resource in list(app.router.resources()):
           cors.add(resource)
        app.add_routes([
            web.post("/exchange_data", self.on_exchange_data),
            web.post("/get_peers", self.on_get_peers),
            web.get("/{anyPath:.*}", self.send_redirect_data)
        ])
        web.run_app(app, host=self.ip, port=self.port)  








'''
    async def ping_peers(self):
        async with ClientSession() as session:
            for p in self.peers:
                if p == self.url:
                    continue
                print("getting pinged")
                post_url = f"http://{p}/ping"
                print(post_url)
                async with session.post(post_url, data=self.url) as response:
                    pass

    async def on_ping(self, request):
        print("I've been pinged")
        peer_url = await request.text()
        if peer_url not in self.peers:
            async with ClientSession() as session:
                print(peer_url)
                async with session.get(f"http://{peer_url}/data.zip") as response:
                    with open("testing.zip", "w") as f:
                        f.write(response.content)
        self.peers.add(peer_url)

    async def on_peer_data(self, request):
        return web.FileResponse("./public/data.zip")
        
        #d = Path("./src/duck_web/data/") 
        #print(d.absolute())
        #output = Path("~/Documents/DuckWeb/src/duck_web/data.zip")
        #shutil.make_archive("data", "zip", d.absolute())
        #print("getting data")
'''        
