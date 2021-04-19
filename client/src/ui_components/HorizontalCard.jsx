import React, { Component } from 'react'
import './styles/Card.css'
import classnames from 'classnames';

class HorizontalCard extends Component {


    
    render(){

        let banner = null;
        let title = null;
        let image = null;
        let price = null;
        let reversed;

        if ( this.props.style ){

            banner = <div className={classnames(this.props.colorbanner)} style={this.props.style}>
                    
            </div>

 
        }
        if ( this.props.title ){

            title = <div className="title-span"> 

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
                
                <span>{this.props.price}</span>

            </div>

        }

        if (  this.props.reversed ){
                
            reversed = ".reverse-grid"

        }
        
        
        return (
            

            
            
            <div className={classnames('hcard', this.props.reverse)}>
                
                {banner}
                {title}
                {image}
                {price}

            </div> 


        );

    }



}


export default HorizontalCard;



