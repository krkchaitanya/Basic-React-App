import React from "react";

class Jumbo extends React.Component{
 constructor(props){
     super();
     this.state={
      age:props.user.age,
         namee:props.namme
     }
 }
    
    onOlder(){
        this.setState({
          age:this.state.age+3
        });
    }
    
    changeit(){
        this.props.chli(this.state.namee)
    }
    
    handleChange(event){
        this.setState({
        namee:event.target.value
        })
    }
    
    render(){
        return(
        <div className="jumbotron"><br/>
        <h1>Age Gonna be-- {this.state.age} and name is {this.props.name}</h1>
        <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
        <div>
            <ul>
            {this.props.user.hobbies.map(function(hobby) {
            return <li key={hobby}>{hobby}</li>
          })
    }
            </ul>
        </div>
            <button className="btn btn-info" onClick={this.onOlder.bind(this)}>Change AGE +3</button>
            <hr/>
            <h2 >Initial Name-- {this.props.lname}</h2>    <hr/>
                    <input type="text" onChange={(event)=>this.handleChange(event)} />
                     <button className="btn btn-success" onClick={this.changeit.bind(this)}>Change Name</button>
      </div>
        )
    }
};

Jumbo.PropTypes={
    name:React.PropTypes.string,
    user:React.PropTypes.object
};
export default Jumbo;