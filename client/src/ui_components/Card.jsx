import React, { Component } from 'react'
import './styles/Card.scss'
import styled from 'styled-components'
import pawn from './img/pawn.svg'


const CardBody = styled.div`

    height : 100%;
    width : 100%;
    background-image: url('${props => props.backgroundImg}');
    background-repeat : no-repeat;
    background-size : 90%;
    background-position : center;

`
const Pawn = styled.div`

    mask-image: url(${pawn});
    background-color : ${props => props.pawnColor};
    mask-size : 60%;
    mask-repeat: no-repeat;
    mask-position: center;

    min-height : 50%;
    min-width : 50%;
    
    flex-grow : 1;
    flex-shrink : 2;

`


class Card extends Component { 

    
    renderPawn(player){

        if ( this.props.players[player].position == this.props.position ){

            return <Pawn pawnColor ={this.props.players[player].color}></Pawn>

        }
    
    }

    render(){
        const bannerInfo = this.props.style && (<div className="color-banner" style={this.props.style}></div>)
        const titlteInfo = this.props.title && (<div className="title-span"><span>{this.props.title}</span></div>)

        const imageInfo  = this.props.players && (
        
        <CardBody backgroundImg = {this.props.backgroundImg} className = {`${this.props.span} card-body-grid-container`}>

            {Object.keys(this.props.players).map(player => this.props.players[player].position == this.props.position ? 
            <Pawn pawnColor ={this.props.players[player].color}></Pawn> :
            null )}
           

        </CardBody>
        
        )

        const priceInfo  = this.props.price && (<div className="price-span"></div>)
        const posInfo    = this.props.position && (<div className="">{this.props.position}</div>)
        return (   
            <div className="card">
                {bannerInfo}
                {titlteInfo}
                {imageInfo}
                {priceInfo}
            </div> 
        );
    }
}
export default Card;



