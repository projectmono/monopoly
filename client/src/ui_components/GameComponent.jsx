import React, { Component } from 'react'
import Board from './Board.jsx'
import './styles/GameComponentStyles.scss'
import Card from './Card.jsx'
import Opponent from './Opponent.jsx'
import Die from './Die'
import './styles/Global.scss'
import './styles/Die.scss'
import socket from "../connections_components/socket_config";
import styled from 'styled-components'


const ActionButton = styled.button`

    width : 90%;
    height : 5rem;
    background-color : #A994C3;
    margin-top : 1rem;
    border : 0;
    border-radius : 3%;
    font-family : "Trocchi";
    font-size : 1.5rem;
    transition-duration: 0.4s;
    &:hover{

        background-color : #8e5ccc;
    
    }

`






/* C'est le composant principale qui englobe la totalité de l'interface et la logique front-end du jeu */
class GameComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            players : {},
        }

        this.eventHandler = this.eventHandler.bind(this);
        this.assignColors = this.assignColors.bind(this);

    }

    componentDidMount(){

        this.eventHandler();

    }

    setPlayerPos(position){

        let players = {...this.state.players};

        players[this.props.userName].position =  position;

        this.setState({

            players : players

        })

    }

    setReady(){

        socket.emit("ready");

    }
    

    eventHandler(){


        socket.on("playerJoined", function(players, callback){

            let playersCopy = this.assignColors(players)

            this.setState({

                players : playersCopy

            })

        }.bind(this))


        socket.on("diceRoll", function(roll, userName){

            let players = {...this.state.players};

            console.log("roll : " + roll);

            for (let i = 1; i <= roll; i++ ){

                players[userName].position = ( players[userName].position + 1 ) % 40;
                this.setState((state) => ({ players : state.players } ));

            }

            console.log(this.state.players[userName].position);
            

        }.bind(this))



        socket.on("gameStart", function(callback){





        }.bind(this))

        socket.on("playerHasTurn", function(userName){


            console.log("Player has turn : " + userName);


        })

    }

    assignColors(players){

        let colors = Object.keys(this.props.colors);
        let playersArray = Object.keys(players)


        for (const player of playersArray ){

            if ( player == this.props.userName ){

                let color;

                for ( const c of colors ){

                    if ( this.props.colors[c]){

                        color = c;

                    }

                }


                players[this.props.userName].color = color;
                colors.splice(colors.indexOf(color), 1);

            }else{

                let color

                for ( const c of colors ){

                    if ( !this.props.colors[c] ){

                        color = c;

                    }

                }

                

                players[player].color = color;
                colors.splice(colors.indexOf(color), 1);

            }


        }

        return players

    }

    getColor(boolean){

        if ( boolean ){

            return Object.keys(this.props.colors).find(element => element && this.props.colors[element])

        }

        return Object.keys(this.props.colors).find(element => element && !this.props.colors[element])


    }

    render(){


        return(
            
            /* le conteneur du corps du jeu */
            <div className="MainWrapper" >
                
                

                {/* le conteneur de la barre de coté gauche */}
                <div className="sidebar">
                    
                    

                        <div className = "opponents-sidebar">


                            {Object.keys(this.state.players).map(player => 

                                <Opponent player = {player} color = {this.state.players[player].color}/>

                            )}

                        </div>

                        <div className= "log-wrapper">


                        </div>

                    

                </div>

                {/*Le plateau du jeu */}
                <div className="board-area">
                    <Board players ={this.state.players}/>
                </div>


                {/* le conteneur de la barre de coté gauche grid-container-space-around  */}
                <div className="sidebar">

                    <div class ="game-control-container">

                        <div className ="grid-item grid-item-dice-container-styles">

                            <Die setPlayerPos = {this.setPlayerPos} playerName={this.props.userName} />

                        </div>
                        
                        <ActionButton> <span> Buy </span> </ActionButton>
                        <ActionButton> <span> Trade </span> </ActionButton>
                        <ActionButton> <span> Build </span> </ActionButton>
                        <ActionButton> <span> Mortgage </span> </ActionButton>


                    </div>


                    <div className="game-state-container">


                        <div className="player-cards-container">
                            

                        </div>
                        
                        <ActionButton onClick={this.setReady}> <span> Ready </span> </ActionButton>

                    </div>

                </div>


                
            </div>

        );




    }




}

export default GameComponent;