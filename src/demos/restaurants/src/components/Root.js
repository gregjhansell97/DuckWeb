import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
//inhouse
import Banner from './Banner';
import Restaurant from './Restaurant';

class Root extends React.Component {
    render() {
        let restaurants = [
            {name:'Kekes', 
                description:'Taco food truck', 
                address:'246 Main St. Charlottesville VA, 20193', 
                phone:'3013405432',
                features:['Cheap','Free Wifi','Good Atmosphere','Mexican','Food Truck','One dollar tacos'],
                price:1,
                coordinants:'76.12334, 12.12345',
                sociallinks:['instagram.com/kekes','facebook.com/kekes'],
                menu:['Taco SAR','Horchata','Taco Pollo','Taco Carne','Taco Carnitas','Squirt']
            },
            {name:'Chipotle', 
                description:'Fast food burritos', 
                address:'345 Main St. Charlottesville VA, 20193', 
                phone:'3015125154',
                features:['Cheap','Fast Food','Good Atmosphere','Mexican','Seating'],
                price:2,
                coordinants:'76.12334, 12.12345',
                sociallinks:['instagram.com/chipotleCVille'],
                menu:['Chicken Burrito','Chicken Burrito Bowl']
            } 
        ];
        return (
            <div>
                
                <div>
                    <Banner name="Restaurants"></Banner>
                </div>
                <div>
                    {restaurants.map((r) =>
                        <Restaurant name={r.name} description={r.description} phone={r.phone} address={r.address} price={r.price} instagram={r.sociallinks}></Restaurant>
                    )
                    }
                </div>
            </div>
    	);
    }
}

export default Root;
