import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
//inhouse
import Banner from './Banner';
import Restaurant from './Restaurant';

class Root extends React.Component {
    render() {
        let restaurants = [
            {name:"Kike's Tacos", 
                description:'Taco food truck', 
                address:'10822 S Inglewood Ave, Lennox, CA 90304', 
                phone:'310-890-2977',
                features:['Cheap','Free Wifi','Good Atmosphere','Mexican','Food Truck','One dollar tacos','Good for after climbing'],
                price:1,
                coordinants:'76.12334, 12.12345',
                sociallinks:['https://www.instagram.com/kikes','https://www.facebook.com/kikes'],
                menu:[
                    {item:'Taco',price:1.00},
                    {item:'Burrito',price:4.00},
                    {item:'Horchata',price:2.50},
                    {item:'Squirt',price:1.50}
                ],
                images:[
                    {
                        img:'static/img/kikesmenu.jpg',
                        title:'Kikes menu',
                        cols:1
                    },
                    {
                        img:'static/img/kikesoutside.jpg',
                        title:'Outside Kikes Tacos',
                        cols:1
                    },
                    {
                        img:'static/img/kikesplate.jpg',
                        title:'Plate of food',
                        cols:1
                    },
                    {
                        img:'static/img/kiketaco.jpg',
                        title:'Taco',
                        cols:1
                    },
                    ],
                    hours:[
                        {day:'Monday',hours:'CLOSED'},
                        {day:'Tuesday',hours:'CLOSED'},
                        {day:'Wednesday',hours:'CLOSED'},
                        {day:'Thursday',hours:'5:00 PM - 11:00 PM'},
                        {day:'Friday',hours:'5:00 PM - 11:00 PM'},
                        {day:'Saturday',hours:'5:00 PM - 11:00 PM'},
                        {day:'Sunday',hours:'5:00 PM - 11:00 PM'}
                    ]
            },
            {name:'Chipotle', 
                description:'Fast food burritos', 
                address:'345 Main St. Charlottesville VA, 20193', 
                phone:'301-512-5154',
                features:['Cheap','Fast Food','Good Atmosphere','Mexican','Seating'],
                price:2,
                coordinants:'76.12334, 12.12345',
                sociallinks:['https://www.instagram.com/chipotleCVille'],
                menu:[
                    {item:'Taco',price:4.00},
                    {item:'Burrito',price:7.00},
                    {item:'Burrito Bowl',price:7.50},
                    {item:'Guac',price:2.00}
                ],
                images:[
                {
                    img:'static/img/burritobowl.jpg',
                    title:'Burrito Bowl',
                    cols:1
                },
                {
                    img:'static/img/chipotleoutside.jpg',
                    title:'Chipotle Outside',
                    cols:1
                },
                {
                    img:'static/img/chipotleinside.jpg',
                    title:'Chipotle Inside',
                    cols:2
                },
                {
                    img:'static/img/chipotlefood.jpg',
                    title:'Chipotle food assortment',
                    cols:1
                }],
                hours:[
                    {day:'Monday',hours:'5:00 PM - 9:00 PM'},
                    {day:'Tuesday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Wednesday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Thursday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Friday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Saturday',hours:'9:00 AM - 10:00 PM'},
                    {day:'Sunday',hours:'9:00 AM - 5:00 PM'}
                ]
            },
            {name:"Ruth's Chris Steakhouse", 
                description:'Upscale fine dining establishment specializing in prime steaks.', 
                address:'2231 Crystal Dr 11th Floor, Arlington, VA 22202', 
                phone:'703-979-7275',
                features:['Expensive','Dark','Fine Dining','Good for Dates'],
                price:5,
                coordinants:'76.12334, 12.12345',
                sociallinks:['https://www.instagram.com/ruthschrishi','https://www.ruthschris.com'],
                menu:[
                    {item:'Steak',price:4.00},
                    {item:'Ribeye',price:7.00},
                    {item:'New York Strip',price:7.50},
                    {item:'Porterhouse',price:2.00}
                ],
                images:[
                {
                    img:'static/img/steakplates.jpg',
                    title:'Plates of steak',
                    cols:2
                },
                {
                    img:'static/img/steak.jpg',
                    title:'Steak',
                    cols:1
                },
                {
                    img:'static/img/outsideruths.jpg',
                    title:"Outside Ruth's Chris",
                    cols:1
                },
                {
                    img:'static/img/ruthsinside.jpg',
                    title:'Inside the Steakhouse',
                    cols:2
                }],
                hours:[
                    {day:'Monday',hours:'11:00 AM - 10:00 PM'},
                    {day:'Tuesday',hours:'11:00 AM - 10:00 PM'},
                    {day:'Wednesday',hours:'11:00 AM - 10:00 PM'},
                    {day:'Thursday',hours:'11:00 AM - 10:00 PM'},
                    {day:'Friday',hours:'11:00 AM - 11:00 PM'},
                    {day:'Saturday',hours:'11:00 AM - 11:00 PM'},
                    {day:'Sunday',hours:'11:00 AM - 11:00 PM'}
                ]
            },
            {name:"Panera Bread", 
                description:'Fast-casual cafe and bakery chain.', 
                address:'1121 Emmet St N, Charlottesville, VA 22903', 
                phone:'434-245-6192',
                features:['Bagels','Lunch','Cafe','Free Wifi','Bakery','Power Outlets','Sandwiches','Good Atmosphere','The place to go for studying','College students'],
                price:3,
                sociallinks:['https://www.instagram.com/panera','https://www.panera.com'],
                menu:[
                    {item:'Bagel',price:2.00},
                    {item:'Fountain Drink',price:2.00},
                    {item:'Mac and Cheese',price:6.50},
                    {item:'Soup',price:4.00},
                    {item:'Sandwich',price:8.00},
                    {item:'Wrap',price:6.00},
                    {item:'Panini',price:7.00}
                ],
                images:[
                {
                    img:'static/img/panerafood.jpg',
                    title:'Plates of steak',
                    cols:1
                },
                {
                    img:'static/img/panerabakery.jpg',
                    title:'Bakery',
                    cols:2
                },
                {
                    img:'static/img/morepanera.jpg',
                    title:"Food",
                    cols:2
                },
                {
                    img:'static/img/outsidepanera.jpg',
                    title:'Outside Panera',
                    cols:1
                }],
                hours:[
                    {day:'Monday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Tuesday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Wednesday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Thursday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Friday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Saturday',hours:'9:00 AM - 9:00 PM'},
                    {day:'Sunday',hours:'9:00 AM - 9:00 PM'}
                ]
            } 
        ];

        return (
            <div>
                
                <div>
                    <Banner name="Restaurants"></Banner>
                </div>
                <div>
                    {restaurants.map((r,index) =>
                        <Restaurant key={index} name={r.name} description={r.description} 
                        phone={r.phone} address={r.address} 
                        features={r.features} price={r.price} 
                        sociallinks={r.sociallinks} coordinants={r.coordinants} menu={r.menu}
                        images={r.images} hours={r.hours}>
                        </Restaurant>
                    )
                    }
                </div>
            </div>
    	);
    }
}

export default Root;
