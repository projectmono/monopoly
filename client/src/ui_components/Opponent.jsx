import { Component } from "react";
import './styles/Opponent.scss'
import styled from 'styled-components'


const OpponentContainer = styled.div`

    width : 90%;
    height : 7vh;
    border-radius: 5px;
    background:#A1BBB2;
    display: grid;
    border-color : ${props => (props.color)};
    border-style: solid;


`

class Opponent extends Component{


    constructor(props) {
        super(props)

    }
    

    render(){
        return(
            
               <OpponentContainer color ={this.props.color}>

                

                    <div className="opponent-wrapper">

                        <div className="player-avatar-img">

                            

                        </div>

                        
                        <span>{this.props.player}</span>



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

                </OpponentContainer>
            
            
        );
    }
}

export default Opponent;

