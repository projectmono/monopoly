import React, { Component } from 'react'
import Board from './Board.jsx'
import './styles/GameComponentStyles.css'
import Card from './Card.jsx'
import Opponent from './Opponent.jsx'
import Die from './Die'
import './styles/Global.css'
import './styles/Die.css'


/* C'est le composant principale qui englobe la totalité de l'interface et la logique front-end du jeu */
class GameComponent extends Component {

    render(){

        return(

            /* le conteneur du corps du jeu */
            <div className="MainWrapper" >
                
                {/* M'entete du jeu - à retirer */}
                <div className="header">
                    
                    <h1></h1>

                </div>

                {/* le conteneur de la barre de coté gauche */}
                <div className="sidebar">

                    <div className="left-sidebar">

                        <div className = "opponents-sidebar">

                            <Opponent/>
                            <Opponent/>

                        </div>

                        <div className= "log-wrapper">




                        </div>

                    </div>

                </div>

                {/*Le plateau du jeu */}
                <div className="board-area">
                    <Board />
                </div>


                {/* le conteneur de la barre de coté gauche */}
                <div className="grid-container-space-around sidebar">


                    <div className ="grid-item grid-item-dice-container-styles">

                        <Die />

                    </div>

                

                </div>


                {/* la barre de bas - à enlever */}
                <div className="GameStatsWrapper">

                <h1></h1>
                    
                </div>

                
            </div>

        );




    }




}

export default GameComponent;