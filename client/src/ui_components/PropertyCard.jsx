import React, { Component } from 'react'
import styled from 'styled-components'
import './styles/Card.scss'
import { ActionButton } from './styles/Card_Styles' 


const TitleArea = styled.div`

    display : flex;
    width : 100%;
    height : 20%;
    background-color : ${props => props.color};
    justify-content : center;
    align-items : center;
    font-size : 1.3rem;
    color : white;

`

const RentArea = styled.div`

    display : grid;
    grid-template-columns : 100%;
    width : 100%;
    height : 80%;
    text-align : center;
    font-size : 1.1rem;
    align-content : space-around;
`

export default class PropertyCard extends Component {


    render() {
        return (


            <div class="property-card-container">
                
                    <TitleArea color={this.props.color}> <b> {this.props.title} </b> </TitleArea>
                    <RentArea>
                        
                        <div> Normal Rent : {this.props.board["territories"][this.props.position].rent} </div>
                        {Object.keys(this.props.board["territories"][this.props.position].multipliedRent).map(index => {
                            
                            return <div> {index == 4 ? "Hotel Rent : " + this.props.board["territories"][this.props.position].multipliedRent[index] : (parseInt(index)+1) + " Houses Rent : " + this.props.board["territories"][this.props.position].multipliedRent[index]  } </div>

                        })}

                        <div >Building cost : {this.props.board["territories"][this.props.position].housecost}. Adding a Hotel will cost money and 4 houses</div>

                        {this.props.board["territories"][this.props.position].isMortgaged ? <ActionButton onClick={() => {this.props.demortgageProperty(this.props.position)}}> Demortgage For : {this.props.board["territories"][this.props.position].mortgageValue}</ActionButton> :  <ActionButton onClick={() => {this.props.mortgageProperty(this.props.position)}}> Mortgage For : {this.props.board["territories"][this.props.position].mortgageValue}</ActionButton>}

                    </RentArea>
                    

            </div>


        )
    }
}
