import React, { Component } from 'react'
import './styles/Die.scss'



class Die extends Component {
    state = {
        value: 1
    }
    rollDice = () => {
        this.setState({
            value : Math.floor(Math.random() * (6 - 1 + 1)) + 1 + Math.floor(Math.random() * (6 - 1 + 1)) + 1
        })
    }
    render(){
        return (
            <button className="die-button" onClick={this.rollDice}>
                <div className="die-style">
                <p>rollDice</p>
                </div>
                <div className="die-style">
                    <p>{this.state.value}</p>
                </div>
            </button>
        );
    }
}


export default Die;