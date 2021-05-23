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
import Modal from 'react-modal';
import { ActionButton } from './styles/Card_Styles' 



const CardButton = styled.button`

    width : 85%;
    height : 30%;
    background-color: ${props => props.color};
    text-align: center;
    display : grid;
    grid-template-rows : 40% 60%;

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
        this.renderProperties = this.renderProperties.bind(this);

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
        socket.on("diceRoll", function(roll, userName, money){

            let players = {...this.state.players};

            players[userName].money = money;

            for (let i = 1; i <= roll; i++ ){

                players[userName].position = ( players[userName].position + 1 ) % 40;
                this.setState((state) => ({ players : state.players } ));

            }
            
            console.log(this.state.players[userName].position);
            

        }.bind(this))


        // Game is on
        socket.on("gameStart", function(callback){





        }.bind(this))

        // Le tour d'un joueur vient de commencer
        socket.on("playerHasTurn", function(userName){


            console.log("Player has turn : " + userName);


        })

        // Un joueur vient d'acheter une propriété
        socket.on("propertyBought", function(money, board, username){

            let playersCopy = {...this.state.players};
            playersCopy[username].money = money;

            this.setState({

                players : playersCopy,
                board : board

            })

        }.bind(this))

        // Un joueur veut construire une maison ou un hotel
        socket.on("builtProperty", function(money, board){ 

            let playersCopy = {...this.state.players};
            playersCopy[this.props.userName].money = money;

            this.setState({

                players : playersCopy,
                board : board

            })

        }.bind(this))

        // Un jouer mortgaged une propriété
        socket.on("propertyMortgaged", function(money, board){

            let playersCopy = {...this.state.players};
            playersCopy[this.props.userName].money = money;

            this.setState({

                players : playersCopy,
                board : board

            })

        }.bind(this))


        socket.on("propertyDemortgaged", function(money, board){

            let playersCopy = {...this.state.players};
            playersCopy[this.props.userName].money = money;

            this.setState({

                players : playersCopy,
                board : board

            })

        }.bind(this))

        socket.on("rentPaid", function(username, paidmoney, username2, money){

            let playersCopy = {...this.state.players};
            playersCopy[username].money = paidmoney;
            playersCopy[username2].money = money;

            this.setState({

                players : playersCopy

            })


        }.bind(this))

        socket.on("taxPaid", function(username, money){

            let playersCopy = {...this.state.players};
            playersCopy[username].money = money

            this.setState({

                players : playersCopy

            })

        }.bind(this))

        socket.on("wentToPrison", function(username, position, jailCountdown){

            let playersCopy = {...this.state.players};
            playersCopy[username].position = position;
            playersCopy[username].jailCountdown = jailCountdown;

            this.setState({

                players : playersCopy

            })

        }.bind(this))




    }

    setProperty(){


        if ( Object.entries(this.state.board).length == 0 ){

            return;

        }

        return (Object.keys(this.state.board.territories).map(territory => {

            if ( this.state.board.territories[territory].ownedBy == this.props.userName ){
                
                return (<CardButton color = {this.state.board.territories[territory].color} onClick={() => { this.setModal(this.state.board.territories[territory].position)}}>
                    
                    {this.state.board.territories[territory].name}
                    <div class="property-container">

                        {this.state.board.territories[territory].type =="property" ? this.renderProperties(territory).map(

                            property => property

                        ) : ""}

                    </div> 
                
                </CardButton>)

            }

        })
        )

    }


    setModal(position){

        let boardCopy = {...this.state.board};
        this.state.board["territories"].forEach(territory => {

            territory.isOpen = false;

        })

        boardCopy.territories[position].isOpen = true;

        this.setState({

            board : boardCopy
        }, console.log(this.state.board["territories"][position]))

    }

    renderModal(){

        // If the board is empty, just return
        if ( Object.entries(this.state.board).length == 0 ){

            return;

        }

        for (const territory of this.state.board["territories"]){

            if (territory.isOpen){

                return (<Modal style={{
                    content :{
                        height : '50%',
                        width : '15%',
                        margin : 'auto'
                    }

                }} isOpen={true}>

                    <PropertyCard color={territory.color} title={territory.name} position={territory.position} board={this.state.board} mortgageProperty={this.mortgageProperty} demortgageProperty={this.demortgageProperty}></PropertyCard>

                </Modal>)

            }
        }
        

    }


    renderProperties(territory){

        let properties = [];

        if ( this.state.board.territories[territory].houses ){
                                
            for (let i = 0; i < this.state.board.territories[territory].houses; i++ ){

                properties.push(<div class="house-shape"> </div>);

            }

        }
        else if ( this.state.board.territories[territory].hotels ){

            properties.push(<div class="hotel-shape"> </div>);

        }

        return properties;

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

    mortgageProperty(position){

        socket.emit("mortgageEvent", position);
        
    }

    demortgageProperty(position){

        socket.emit("demortgageEvent", position);

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
                        <ActionButton> <span onClick={this.buildProperty}> Build </span> </ActionButton>
                        <ActionButton> <span> Mortgage </span> </ActionButton>

                    </div>


                    <div className="game-state-container">


                        {this.setProperty()}
                        

                    </div>
                    
                    <div class="party-controls-container">
                        <ActionButton onClick={this.setReady}> <span> Ready </span> </ActionButton>
                    </div>

                </div>

                {this.renderModal()}
                
            </div>

        );




    }




}

export default GameComponent;