import argparse
from duck_web.server import Server

from pathlib import Path
import zipfile
import shutil

def run():
    parser = argparse.ArgumentParser(description="runs a duckweb server")
    parser.add_argument("--ip", help="ip of server")
    parser.add_argument("--port", help="port of server")
    parser.add_argument("--public_name", help="Domain name of the server, and the folder it will appear to serve")
    parser.add_argument("--peers", help="list of ip:port peers", nargs="+")
    
    args = parser.parse_args()
    port = args.port
    ip = args.ip
    public_name = args.public_name
    peers = args.peers if args.peers else []

    #d = Path("./src/duck_web/data/") 
    #print(d.absolute())
    #output = Path("~/Documents/DuckWeb/src/duck_web/data.zip")
    #shutil.make_archive("data", "zip", d.absolute())

    #with zipfile.ZipFile("data.zip", "r") as zip_ref:
    #    zip_ref.extractall("meh")
    
    print("starting server")
    s = Server(port, ip, public_name, set(peers))
    s.run()

