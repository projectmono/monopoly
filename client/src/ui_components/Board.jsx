import React, {Component} from 'react'
import './styles/Board.scss'
import Card from './Card.jsx'
import HorizontalCard from './HorizontalCard'

class Board extends Component {
    render(){
        return (
            <div className = "BoardWrapper">
                <div className="ns-sides tl-ns-border">
                    <Card position={20} players = {this.props.players} title={null} style={null} image={null} price={null}  />
                    <Card position={21} players = {this.props.players} title="Strand" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card position={22} players = {this.props.players} title="Chance" style={null} image={null} price={null} />
                    <Card position={23} players = {this.props.players} title="Fleet Street" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card position={24} players = {this.props.players} title="Trafalgar Square" style={{ backgroundColor : '#DA2327'}} image={null} price={null} />
                    <Card position={25} players = {this.props.players} title="Card" style={null} image={null} price={null} />
                    <Card position={26} players = {this.props.players} title="Leicester Square" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card position={27} players = {this.props.players} title="Card" style={null} image={null} price={null} />
                    <Card position={28} players = {this.props.players} title="Coventry Street" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card position={29} players = {this.props.players} title="Piccadilly" style={{ backgroundColor : '#fef102'}} image={null} price={null} />
                    <Card position={30} players = {this.props.players} title= {null} style={null} image={null} price={null} />
                </div>
                <div className="we-side">
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street1" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={19} players = {this.props.players}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Regent Street2" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={18} players = {this.props.players}/>
                    <HorizontalCard position={17} players = {this.props.players}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } players = {this.props.players} title="Regent Street3" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={16}/>
                    <HorizontalCard position={15} players = {this.props.players}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Regent Street4" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"position={14}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Regent Street5" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl"position={13}/>
                    <HorizontalCard position={12} players = {this.props.players} />
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Regent Street166" price={55 + "$"} reverse = "reverse-grid" colorbanner="color-banner-hl" position={11}/>
                </div>
                <div className="middle-section ">
                </div>
                <div className="we-side ">
                    <HorizontalCard position={31} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={32} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={33} players = {this.props.players}/>
                    <HorizontalCard position={34} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={35} players = {this.props.players}/>
                    <HorizontalCard position={36} players = {this.props.players}/>
                    <HorizontalCard position={37} players = {this.props.players} style ={{backgroundColor : '#0065a3'} } title="Regent Street" price={55 + "$"} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={38} players = {this.props.players} />
                    <HorizontalCard position={39} players = {this.props.players} style ={{backgroundColor : '#0065a3'} } title="Regent Street150" price={55 + "$"} colorbanner="color-banner-hr"/>
                </div>
                <div className="ns-sides lt-ns-border ">
                    <Card position ={10} title={null} style={null} image={null} price={null} players={this.props.players}/>
                    <Card position ={9} title="Pent.V Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} players={this.props.players} />
                    <Card position ={8} title="Euston Road" style={{ backgroundColor : '#abdbef'}} image={null} price={null} players={this.props.players} />
                    <Card position ={7} title="Card" style={null} image={null} price={null} players={this.props.players} />
                    <Card position ={6} title="The Angel Isle" style={{ backgroundColor : '#abdbef'}} image={null} price={null} players={this.props.players} />
                    <Card position ={5} title="Card" style={null} image={null} price={null} players={this.props.players} />
                    <Card position ={4} title="Card" style={null} image={null} price={null} players={this.props.players} />
                    <Card position ={3} title="White Chapel Road" style={{ backgroundColor : '#854b37'}} image={null} price={null} players={this.props.players}/>
                    <Card position ={2} title="Card" style={null} image={null} price={null} players={this.props.players}/>
                    <Card position ={1} title="Old Kent Road" style={{ backgroundColor : '#854b37'}} players={this.props.players} image={null} price={null}/>
                    <Card title={null} style={null} image={"yeah"} price={null} position ={0} players={this.props.players} backgroundImg = {"https://gistcdn.rawgit.org/awessproject/e74addca538347eee57290210d44a675/db92b1b84066e35a6ececaf70f794b749a067bb6/go.svg"} span = {"span-row"}/>
                </div>
            </div>
        );
    }
}
export default Board;