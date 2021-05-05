import React, {Component} from 'react'
import './styles/Board.scss'
import Card from './Card.jsx'
import HorizontalCard from './HorizontalCard'

class Board extends Component {
    render(){
        return (
            <div className = "BoardWrapper">
                <div className="ns-sides tl-ns-border">
                    <Card title={null} style={null} image={null} price={null}  />
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
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street1" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={20}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street2" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={19}/>
                    <HorizontalCard position={18}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street3" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={17}/>
                    <HorizontalCard position={16}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street4" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"position={15}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street5" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"position={14}/>
                    <HorizontalCard position={13}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } title="Regent Street6" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={12}/>
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
                    <Card title={null} style={null} image={null} price={null} position={11}/>
                    <Card title="Pent.V Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} position={10}/>
                    <Card title="Euston Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} position={9}/>
                    <Card title="Card" style={null} image={null} price={null} position={8}/>
                    <Card title="The Angel Isle" style={{ backgroundColor : '#abdbef'}} image={null} price={null} position={7}/>
                    <Card title="Card" style={null} image={null} price={null} position={6}/>
                    <Card title="Card" style={null} image={null} price={null} position={5}/>
                    <Card title="White Chapel Road" style={{ backgroundColor : '#854b37'}} image={null} price={null} position={4}/>
                    <Card title="Card" style={null} image={null} price={null} position={3}/>
                    <Card title="Old Kent Road" style={{ backgroundColor : '#854b37'}} players={this.props.players} image={null} price={null} position={2}/>
                    <Card title={null} style={null} image={"yeah"} price={null} position ={0} players={this.props.players} backgroundImg = {"https://gistcdn.rawgit.org/awessproject/e74addca538347eee57290210d44a675/db92b1b84066e35a6ececaf70f794b749a067bb6/go.svg"} span = {"span-row"}/>
                </div>
            </div>
        );
    }
}
export default Board;