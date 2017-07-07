import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import Header from "./components/header.js";
import Jumbo from "./components/jumbo.js";
import { HashRouter as Router ,Route} from 'react-router-dom';
import Home from "./components/home";
import Contact from "./components/contact.js";


class App extends React.Component{
    constructor(){  
    super();
     this.state={
            lastname:"kani" 
        }
    };
    
     sayHello(){
        alert("say hello man");
    };
    
      onchangeLink(mname){
            this.setState({
                lastname:mname
            })
        };
    
    render(){
        
        var user={
            name:"mike",
            age:22,
            address:"texas",
            hobbies:["sports","games","cricket"]
        };
        
    return(
         
        <div>
            <Jumbo namme="jackie"chli={this.onchangeLink.bind(this)} lname={this.state.lastname}  name={"jhonny"} user={user} hello={this.sayHello}/>
        </div>
        )
    }
};



ReactDOM.render(

    <div>
     <Header />
    </div>,
    document.getElementById("root")
);

ReactDOM.render(
    <div>
   <Router>
    <div>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/contact" component={Contact}/>
    </div>
    </Router>
    </div>,
    document.getElementById("application"));

