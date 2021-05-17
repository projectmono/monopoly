import React, { Component } from 'react'
import Board from './Board.jsx'
import './styles/GameComponentStyles.scss'
import Opponent from './Opponent.jsx'
import PropertyCard from './PropertyCard'
import Die from './Die'
import './styles/Global.scss'
import './styles/Die.scss'
import './styles/Card.scss'
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
    margin : 10px;
    &:hover{

        background-color : #8e5ccc;
    
    }

`

const CardButton = styled.button`

    width : 85%;
    height : 20%;
    background-color: ${props => props.color};
    text-align: center;

`

/* C'est le composant principale qui englobe la totalité de l'interface et la logique front-end du jeu */
class GameComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            players : {}, board : {}
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


        socket.on("board", function(board){

            this.setState({

                board : board

            }, () => {
               console.log(this.state.board);
            })

        }.bind(this))



        // Un joueur vient de rejondre la partie
        socket.on("playerJoined", function(players, callback){

            let playersCopy = this.assignColors(players)

            this.setState({

                players : playersCopy

            })

        }.bind(this))

        // Un lancé de dé a été effectué
        socket.on("diceRoll", function(roll, userName){

            let players = {...this.state.players};

            for (let i = 1; i <= roll; i++ ){

                players[userName].position = ( players[userName].position + 1 ) % 40;
                this.setState((state) => ({ players : state.players } ));

            }
            
            console.log(this.state.players[userName].position);
            

        }.bind(this))


        // ???
        socket.on("gameStart", function(callback){





        }.bind(this))

        // Le tour d'un joueur vient de commencer
        socket.on("playerHasTurn", function(userName){


            console.log("Player has turn : " + userName);


        })

        // Un joueur vient d'acheter une propriété
        socket.on("propertyBought", function(money, board){

            let playersCopy = {...this.state.players};
            playersCopy[this.props.userName].money = money;

            this.setState({

                players : playersCopy,
                board : board

            })

        }.bind(this))




    }

    setProperty(){


        if ( Object.entries(this.state.board).length == 0 ){

            return;

        }

        return (Object.keys(this.state.board.territories).map(territory => {

            if ( this.state.board.territories[territory].ownedBy == this.props.userName ){
                
                return <CardButton color = {this.state.board.territories[territory].color}>{this.state.board.territories[territory].name}</CardButton>

            }

        })
        )

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

    buyProperty(){

        socket.emit("buy");

    }

    buildProperty(){

        socket.emit("buildEvent");

    }

    render(){


        return(
            
            /* le conteneur du corps du jeu */
            <div className="MainWrapper" >
                
                

                {/* le conteneur de la barre de coté gauche */}
                <div className="left-sidebar">
                    
                    

                        <div className = "opponents-sidebar">


                            {Object.keys(this.state.players).map(player => 

                                <Opponent player = {player} color = {this.state.players[player].color} money={this.state.players[player].money}/>

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
                <div className="right-sidebar">

                    <div class ="game-control-container">

                        <div className ="grid-item grid-item-dice-container-styles">

                            <Die setPlayerPos = {this.setPlayerPos} playerName={this.props.userName} />

                        </div>
                        
                        <ActionButton onClick={this.buyProperty}> <span> Buy </span> </ActionButton>
                        <ActionButton> <span> Trade </span> </ActionButton>
                        <ActionButton> <span> Build </span> </ActionButton>
                        <ActionButton> <span> Mortgage </span> </ActionButton>

                    </div>


                    <div className="game-state-container">


                        {this.setProperty()}
                        

                    </div>
                    
                    <div class="party-controls-container">
                        <ActionButton onClick={this.setReady}> <span> Ready </span> </ActionButton>
                    </div>

                </div>


                
            </div>

        );




    }




}

export default GameComponent;