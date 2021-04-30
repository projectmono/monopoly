import React, { Component } from 'react'
import './styles/Card.css'

class Pion extends Component { 
    state = {
        position: []
    }
 
    render(){
        const posInfo = this.props.position && (<div className="">{this.props.position}</div>)
        return (   
            <div className="card ">
                {posInfo}
            </div> 
        );
    }
}
export default Pion;



