import React, { Component } from 'react'
import './styles/Card.scss'
import styled from 'styled-components'
import { CardTitle, Pawn } from './styles/Card_Styles'

const CardBody = styled.div`

    height : 100%;
    width : 100%;
    background-image: url('${props => props.backgroundImg}');
    background-repeat : no-repeat;
    background-size : 90%;
    background-position : center;
    grid-row : ${props => props.span};

`

class Card extends Component { 

    
    renderPawn(player){

        if ( this.props.players[player].position == this.props.position ){

            return <Pawn pawnColor ={this.props.players[player].color}></Pawn>

        }
    
    }

    render(){
        const bannerInfo = this.props.style && (<div className="color-banner" style={this.props.style}></div>)
        const titlteInfo = this.props.title && (<CardTitle position = {this.props.position}> <span>{this.props.title}</span> </CardTitle>)
        const imageInfo  = this.props.players && (
        
        <CardBody span={this.props.span} backgroundImg = {this.props.backgroundImg} className = {`card-body-grid-container`}>

            {Object.keys(this.props.players).map(player => this.props.players[player].position == this.props.position ? 
            <Pawn pawnColor ={this.props.players[player].color}></Pawn> :
            null )}
           

        </CardBody>
        
        )

        const priceInfo  = this.props.price && (<div className="price-span"><span>{this.props.price}</span></div>)
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



