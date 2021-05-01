import React, { Component } from 'react'
import './styles/Card.scss'
import classnames from 'classnames';

class HorizontalCard extends Component {  
    render(){
       // let reversed;

        const bannerInfo = this.props.style && (<div className={classnames(this.props.colorbanner)} style={this.props.style}></div>)
        const titlteInfo = this.props.title && (<div className="title-span"><span>{this.props.title}</span></div>)
        const imageInfo = this.props.image && (<div className="img-area"><span>{this.props.image}</span></div>)
        const priceInfo = this.props.price && (<div className="price-span"><span>{this.props.price}</span></div>)
       // const reversedInfo = this.props.reversed && (reversed = ".reverse-grid")
        //const posInfo    = this.props.position && (<div className="">{this.props.position}</div>)
        return (
            <div className={classnames('hcard', this.props.reverse)}>
                {bannerInfo}
                {titlteInfo}
                {imageInfo}
                
            </div> 
        );
    }
}
export default HorizontalCard;



