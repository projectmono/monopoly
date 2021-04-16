import { Component } from "react";
import './styles/Joueur.css'

import utilisateur from "./img/utilisateur.png"
import pion from "./img/pion.svg"
import money from "./img/money.svg"

class Joueur extends Component{
    render(){
        return(
            <div className="joueurContainer">
                <img className="photoJoueur" src={utilisateur}  />
                
                <div className="content_container">
                    <div className="pion_moneyIcon_container">
                        <img className="pion" src={pion}/>
                        <img className="moneyIcon" src={money}/>
                    </div>
                    <div className="name_money_container">
                        <p className="name_container">chawki</p>
                        <p className="price_container">2500 £</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Joueur;

