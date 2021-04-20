import { Component } from "react";
import './styles/Opponent.css'


class Opponent extends Component{


    constructor(props) {
        super(props)
    
    }
    

    render(){
        return(
            
               <div className="OpponentContainer">

                

                    <div className="opponent-wrapper">

                        <div className="player-avatar-img">

                            

                        </div>

                        <div className="player-name">

                            <span>{this.props.player}</span>

                        </div>

                        <div className="player-infos"> 

                            <span>
                                <a href="www.infos.com">Infos</a>
                            </span>

                        </div>

                        <div className="player-money">

                            <span>
                                1500$
                            </span>

                        </div>

                    </div>

                </div>
            
            
        );
    }
}

export default Opponent;
