import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import './styles/Global.scss'
import './styles/Login.scss'
import socket from "../connections_components/socket_config";
import styled from 'styled-components'



const ColorButton = styled.button`
    
    background-color : ${props => props.color};
    transition: width 0.5s, height 0.5s;
    height : 5rem;
    width : 5rem;
    border-radius : 50%;
    border : 0;

    &:hover{
        width : 6rem;
        height : 6rem;
    } 

    opacity : ${props => (props.state ? 1 : 0.5)};


`



export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {roomName: "", userName: "" ,redirect : false, response : [], 
                      
                      choosedColor : ""};
                      

        this.setRoom = this.setRoom.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setChoosedColor = this.setChoosedColor.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
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

    // Updates the choosedColor state with the user choice.
    setChoosedColor(e){

        if ( this.props.colors[e.target.attributes.color.value] ){

            this.props.activateColor(e.target.attributes.color.value, false);
            this.setState({

                choosedColor : ""

            })

        }

        else{
        

            this.props.activateColor(e.target.attributes.color.value, true)
            this.setState({

                choosedColor : e.target.attributes.color.value
                
            })

        }
        

    }


    


    createRoom(e, event){
        
        let responseTab;
        responseTab = [...this.state.response];
        // Prevent button for defaulting to submit on error
        e.preventDefault();

        //Checking colors
        if ( !this.state.choosedColor ){
            responseTab[1] = "You need to choose a color";
            this.setState({

                response : responseTab

            })
            return;
        }

        // Setting userName
        this.props.setUserName(this.state.userName);

        // Emits an event and arguments to the server side socket. A callback function is fired after emitting.
        socket.emit(event, this.state.roomName, this.state.userName , (response) => {

           
            if ( response.roomNameOk[0] ){
                this.setRedirect();
            }

            this.setState({ response : response.roomNameOk})

        });
        
        
    }

    reloadPage(){ 

        
            window.location.reload(); 

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


                <div className = "player-colors">

                    {Object.keys(this.props.colors).map( (color) => (<ColorButton state = {this.props.colors[color]}  color = {color} onClick={(e) => (this.setChoosedColor(e))} />)  )}

    
                </div>
                

            </div>


        )
    }
}
