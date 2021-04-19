import React, { Component } from 'react'
import './styles/Card.css'

class Card extends Component {


    
    render(){

        let banner = null;
        let title = null;
        let image = null;
        let price = null;
        
        {/* c'est celon la couleur la  */}
        if ( this.props.style ){

            banner = <div className="color-banner" style={this.props.style}>
                    
            </div>

 
        }
        if ( this.props.title ){

            title =<div className="title-span"> 

                            <span>{this.props.title}</span>

                         </div>

        }
        if ( this.props.image ){

            image = <div className="img-area">

                            <span>{this.props.image}</span>

                          </div>

        }
        if ( this.props.price ){

            price = <div className="price-span">


            </div>

        }
        
        
        return (

        
            
            <div className="card ">
                
                {banner}
                {title}
                {image}
                {price}

            </div> 


        );

    }



}


export default Card;



