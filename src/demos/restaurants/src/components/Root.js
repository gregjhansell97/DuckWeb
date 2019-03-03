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
                address:'246 Main St. Charlottesville VA, 20193', 
                phone:'3013405432',
                features:['Cheap','Free Wifi','Good Atmosphere','Mexican','Food Truck','One dollar tacos'],
                price:1,
                coordinants:'76.12334, 12.12345',
                sociallinks:['instagram.com/kikes','facebook.com/kikes'],
                menu:[
                    {item:'Taco',price:1.00},
                    {item:'Burrito',price:4.00},
                    {item:'Horchata',price:2.50},
                    {item:'Squirt',price:1.50}
                ],
                images:[
                    {
                        img:'/static/img/kikesmenu.jpg',
                        title:'Kikes menu',
                        cols:1
                    },
                    {
                        img:'/static/img/kikesoutside.jpg',
                        title:'Outside Kikes Tacos',
                        cols:1
                    },
                    {
                        img:'/static/img/kikesplate.jpg',
                        title:'Plate of food',
                        cols:1
                    },
                    {
                        img:'/static/img/kiketaco.jpg',
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
                phone:'3015125154',
                features:['Cheap','Fast Food','Good Atmosphere','Mexican','Seating'],
                price:2,
                coordinants:'76.12334, 12.12345',
                sociallinks:['instagram.com/chipotleCVille'],
                menu:[
                    {item:'Taco',price:4.00},
                    {item:'Burrito',price:7.00},
                    {item:'Burrito Bowl',price:7.50},
                    {item:'Guac',price:2.00}
                ],
                images:[
                {
                    img:'/static/img/burritobowl.jpg',
                    title:'Burrito Bowl',
                    cols:1
                },
                {
                    img:'/static/img/chipotleoutside.jpg',
                    title:'Chipotle Outside',
                    cols:1
                },
                {
                    img:'/static/img/chipotleinside.jpg',
                    title:'Chipotle Inside',
                    cols:2
                },
                {
                    img:'/static/img/chipotlefood.jpg',
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
