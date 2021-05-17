import React, { Component } from 'react'
import styled from 'styled-components'
import './styles/Card.scss'


const TitleArea = styled.div`

    width : 100%;
    height : 20%;
    background-color : ${props => props.color};
    text-align : center;

`

const RentArea = styled.div`

    display : grid;
    grid-template-columns : 100;
    //grid-template-rows : repeat(6, 15%) 10%;
    width : 100%;
    height : 80%;
    background-color : ${props => props.color};
    text-align : center;
    font-size : 10px;

`

export default class PropertyCard extends Component {




    render() {
        return (


            <div class="property-card-container">
                
                    <TitleArea color="blue"> <b>Yeah</b> </TitleArea>
                    <RentArea color="yellow">
                        
                        <span> Base Rent : 50 </span>
                        <span> 1 House : 200 </span>
                        <span> 2 Houses : 600 </span>
                        <span> 3 Houses : 1400 </span>
                        <span> 4 Houses : 1700 </span>
                        <span> Hotel : 2000 </span>
                        


                    </RentArea>

            </div>


        )
    }
}
