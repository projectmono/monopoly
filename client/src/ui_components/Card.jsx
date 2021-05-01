import React, { Component } from 'react'
import './styles/Card.scss'

class Card extends Component { 
    render(){
        const bannerInfo = this.props.style && (<div className="color-banner" style={this.props.style}></div>)
        const titlteInfo = this.props.title && (<div className="title-span"><span>{this.props.title}</span></div>)
        const imageInfo  = this.props.image && (<div className="img-area"><span>{this.props.image}</span></div>)    
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



