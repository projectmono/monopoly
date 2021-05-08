import React, { Component } from 'react'
import './styles/Card.scss'
import classnames from 'classnames';
import styled from 'styled-components'
import { CardTitle, Pawn } from './styles/Card_Styles'

const CardBody = styled.div`

    height : 100%;
    width : 100%;
    background-image: url('${props => props.backgroundImg}');
    background-repeat : no-repeat;
    background-size : 90%;
    background-position : center;

`

class HorizontalCard extends Component {


    render(){

        const bannerInfo = this.props.style && (<div className={classnames(this.props.colorbanner)} style={this.props.style}></div>)
        const titlteInfo = this.props.title && (<CardTitle position = {this.props.position}> <span>{this.props.title}</span> </CardTitle>)
        const priceInfo = this.props.price && (<div className="price-span"><span>{this.props.price}</span></div>)
        const imageInfo  = this.props.players && (
        
            <CardBody backgroundImg = {this.props.backgroundImg} className = {`${this.props.span} card-body-grid-container`}>
    
                {Object.keys(this.props.players).map(player => this.props.players[player].position == this.props.position ? 
                <Pawn pawnColor ={this.props.players[player].color}></Pawn> :
                null )}
               
            </CardBody>
            
        )
        
        return (
            <div className={classnames('hcard', this.props.reverse)}>
                
                {bannerInfo}
                {titlteInfo}
                {imageInfo}
                {priceInfo}
                
            </div> 
        );
    }
}
export default HorizontalCard;



