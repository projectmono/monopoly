import React, { Component } from 'react'
import Board from './Board.jsx'
import './styles/GameComponentStyles.scss'
import Card from './Card.jsx'
import Opponent from './Opponent.jsx'
import Die from './Die'
import './styles/Global.scss'
import './styles/Die.scss'
import socket from "../connections_components/socket_config";

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


                {/* le conteneur de la barre de coté gauche */}
                <div className="grid-container-space-around sidebar">


                    <div className ="grid-item grid-item-dice-container-styles">

                        <Die setPlayerPos = {this.setPlayerPos} playerName={this.props.userName} />

                    </div>

                

                </div>


                
            </div>

        );




    }




}

export default GameComponent;