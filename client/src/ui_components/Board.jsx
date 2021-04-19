import React, {Component} from 'react'
import './styles/Board.css'
import Card from './Card.jsx'
import HorizontalCard from './HorizontalCard'

class Board extends Component {

    render(){

        return (

            <div className = "BoardWrapper">
                
                <div className="ns-sides tl-ns-border">
                    
                    <Card title={null} style={null} image={null} price={null} />
                    <Card title="Strand" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card title="Chance" style={null} image={null} price={null} />
                    <Card title="Fleet Street" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card title="Trafalgar Square" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="Leicester Square" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="Coventry Street" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card title="Piccadilly" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card title={null} style={null} image={null} price={null} />

                </div>

                <div className="we-side">
                
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"/>

                </div>

                <div className="middle-section ">

                </div>

                <div className="we-side ">
                
                    <HorizontalCard style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : '#0065a3'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard />
                    <HorizontalCard style ={{backgroundColor : '#0065a3'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>

                </div>

                <div className="ns-sides lt-ns-border ">

                    <Card title={null} style={null} image={null} price={null} />
                    <Card title="Pent.V Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} />
                    <Card title="Euston Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="The Angel Isle" style={{ backgroundColor : '#abdbef'}} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="White Chapel Road" style={{ backgroundColor : '#854b37'}} image={null} price={null} />
                    <Card title="Card" style={null} image={null} price={null} />
                    <Card title="Old Kent Road" style={{ backgroundColor : '#854b37'}} image={null} price={null} />
                    <Card title={null} style={null} image={null} price={null} />


                </div>

            </div>

        );


    }

    

}

export default Board;