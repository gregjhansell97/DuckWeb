import React from 'react';
import Grid from '@material-ui/core/Grid';

//local
import Banner from './Banner.js';
import Hud from './Hud.js';
import Tree from './Tree.js';
import CountrySide from './CountrySide.js';

class Root extends React.Component {
    constructor(props){
        super(props)

        // this.age = 1;
        this.state = {
            hydration:5,
            age:1,
            play:1
        }
        var update = this.update.bind(this);
        // var hydration = 10;
        // var lose = this.lose.bind(this);
    }
    update(arg){
        if(arg==1){
            this.setState({hydration:this.state.hydration + 1});
        }else if(arg==2){
            alert("Congratulations! You have saved the planet!");
            this.setState({hydration:5,age:1}); 
        }
        else{
            alert("You Lost! Do you even care about the planet?");
            this.setState({hydration:5,age:1});
        }
    }
    componentDidMount(){
        this.timeout = setInterval(() =>{
            let currentAge = this.state.age;
            let currentHyd = this.state.hydration;
            if(currentHyd==0 || currentHyd>10){
                this.update(0);
            }else if(currentAge>39){
                this.update(2);
            }
            else{
            this.setState({age:currentAge+1,hydration:currentHyd-1});
            }
        }, 2000);
    }
    componentWillUnmount(){
        clearInterval(this.timeout);
    }
    
    render() {
        var update=this.update;
        var hydration=this.state.hydration;
        var age=this.state.age;
        // var lose=this.state.lose;
      return (
            <div>
                
                <Banner name="Save The Planet!"></Banner>
                
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Hud update = {update.bind(this)} age={age} hydration={hydration}></Hud>
                    </Grid>
                    <Grid item xs={8}>
                        <Tree age={age}></Tree>
                    </Grid>
                      
                </Grid>
                <CountrySide></CountrySide>
            </div>
    	);
    }
}

export default Root;