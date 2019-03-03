import React from 'react';

//inhouse
import Header from "./Header"
import Menu from "./Menu"

class Root extends React.Component {
  	render() {
    	return (
    		<div>
    			<Header/>
    			<Menu/>
      		</div>
    	);
  	}
}

export default Root;
