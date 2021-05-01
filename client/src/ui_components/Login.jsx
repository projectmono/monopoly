import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import './styles/Global.scss'
import './styles/Login.scss'
import socket from "../connections_components/socket_config";


export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {roomName: "", userName: "" ,redirect : false, response : []};
    
        this.setRoom = this.setRoom.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.setUserName = this.setUserName.bind(this);
    }


    // Updates the roomName state with the user input value.
    setRoom(e){

        this.setState({

            roomName: e.target.value

        });

    }

    // Updates the userName state with the user input value.
    setUserName(e){

        this.setState({

            userName : e.target.value

        })

    }


    createRoom(e, event){
        
        // Prevent button for defaulting to submit on error
        e.preventDefault();

        // Emits an event and arguments to the server side socket. A callback function is fired after emitting.
        socket.emit(event, this.state.roomName, this.state.userName ,(response) => {

           
            if ( response.roomNameOk[0] ){
                this.setRedirect();
            }

            this.setState({ response : response.roomNameOk})

        });
        
        
    }


    setRedirect(){

        // Sets the state of redirect to true
        this.setState({ 
            
            redirect : true
        
        });
        

    }

    redirect(){

        if ( this.state.redirect ){

            return ( <Redirect to="/game" />);

        }   

    }



    render() {
        return (


            <div className ="grid-container-center grid-container-styles">

                <div className="grid-item">
                    {this.state.response[1]}
                </div>

                <div className ="grid-container-space-around lggrid-container-styles">


                    <div className="grid-item span-columns">

                       <input className ="input-styles" type="text" placeholder="Username" value={this.state.userName} onChange={this.setUserName}/>

                    </div>
                    <div className="grid-item span-columns">

                        <input className ="input-styles" type="text" value={this.state.roomName} placeholder="Room Name" onChange={this.setRoom}/>

                    </div>

                    {this.redirect()}

                    <button className="button-default lgcb-ml" onClick={(e) => { this.createRoom(e,"createRoomEvent") }}>
                        Create Room
                    </button>

                    <button className="button-default lgcb-mr" onClick={(e) => { this.createRoom(e,"joinRoomEvent") }}>
                        Join Room
                    </button>

                </div>
                

            </div>


        )
    }
}
