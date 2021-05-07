import React, { Component } from 'react'
import './styles/Die.scss'
import socket from "../connections_components/socket_config";



class Die extends Component {
    state = {
        value: 1
    }

    rollDice = () => {
        
        socket.emit("rollDice", this.props.playerName);

    }

    render(){
        return (
            <button className="die-button" onClick={this.rollDice}>
                <div className="die-style">
                </div>
                <div className="die-style">
                </div>
            </button>
        );
    }
}


export default Die;