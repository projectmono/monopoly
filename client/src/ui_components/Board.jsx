import React, {Component} from 'react'
import './styles/Board.scss'
import Card from './Card.jsx'
import HorizontalCard from './HorizontalCard'

class Board extends Component {
    render(){
        return (
            <div className = "BoardWrapper">
                <div className="ns-sides tl-ns-border">
                    <Card position={20} players = {this.props.players} title={null} style={null} image={null}/>
                    <Card position={21} players = {this.props.players} title="Strand" style={{ backgroundColor : '#DA2327'}} image={null} price={220} />
                    <Card position={22} players = {this.props.players} title="Chance" image={null} span={"span 3"} />
                    <Card position={23} players = {this.props.players} title="Fleet Street" style={{ backgroundColor : '#DA2327'}} image={null} price={220} />
                    <Card position={24} players = {this.props.players} title="Trafalgar Square" style={{ backgroundColor : '#DA2327'}} image={null} price={240} />
                    <Card position={25} players = {this.props.players} title="Fenchurch Station" style={null} image={null} price={200} span={"span 2"}/>
                    <Card position={26} players = {this.props.players} title="Leicester Square" style={{ backgroundColor : '#fef102'}} image={null} price={260} />
                    <Card position={27} players = {this.props.players} title="Water Works" style={null} image={null} price={260} span={"span 2"} />
                    <Card position={28} players = {this.props.players} title="Coventry Street" style={{ backgroundColor : '#fef102'}} image={null} price={150} />
                    <Card position={29} players = {this.props.players} title="Piccadilly" style={{ backgroundColor : '#fef102'}} image={null} price={280} />
                    <Card position={30} players = {this.props.players} title= {null} style={null} image={null}/>
                </div>
                <div className="we-side">
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Vine Street" price={200} reverse = "reverse-grid" colorbanner="color-banner-hl" position={19} players = {this.props.players}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } title="Marlborough" price={180} reverse = "reverse-grid" colorbanner="color-banner-hl" position={18} players = {this.props.players}/>
                    <HorizontalCard position={17} players = {this.props.players} title={"community chest"}/>
                    <HorizontalCard style ={{backgroundColor : '#e98b29'} } players = {this.props.players} title="Bow Street" price={180} reverse = "reverse-grid" colorbanner="color-banner-hl" position={16}/>
                    <HorizontalCard position={15} players = {this.props.players} title={"Marylebone station"} price={200}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Northumrl'd" price={160} reverse = "reverse-grid" colorbanner="color-banner-hl"position={14}/>
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Electric Company" price={140} reverse = "reverse-grid" colorbanner="color-banner-hl"position={13}/>
                    <HorizontalCard position={12} players = {this.props.players} price={150} />
                    <HorizontalCard style ={{backgroundColor : '#c53982'} } players = {this.props.players} title="Pall Mall" price={140} reverse = "reverse-grid" colorbanner="color-banner-hl" position={11}/>
                </div>
                <div className="middle-section ">
                </div>
                <div className="we-side ">
                    <HorizontalCard position={31} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Regent Street" price={300} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={32} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Oxford Street" price={300} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={33} players = {this.props.players} title ={"Community Chest"}/>
                    <HorizontalCard position={34} players = {this.props.players} style ={{backgroundColor : 'green'} } title="Bond Street" price={320} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={35} players = {this.props.players} title ={"Liverpool Station"} price={200}/>
                    <HorizontalCard position={36} players = {this.props.players} title ={"Chance"}/>
                    <HorizontalCard position={37} players = {this.props.players} style ={{backgroundColor : '#0065a3'} } title="Park Lane" price={350} colorbanner="color-banner-hr"/>
                    <HorizontalCard position={38} players = {this.props.players} title ={" Super Tax"} price={100}/>
                    <HorizontalCard position={39} players = {this.props.players} style ={{backgroundColor : '#0065a3'} } title="Mayfair" price={400} colorbanner="color-banner-hr"/>
                </div>
                <div className="ns-sides lt-ns-border ">
                    <Card position ={10} title={null} style={null} image={null} price={null} players={this.props.players}/>
                    <Card position ={9} title="Pent.V Road" style={{ backgroundColor : '#abdbef'}} image={null} price={120} players={this.props.players} />
                    <Card position ={8} title="Euston Road" style={{ backgroundColor : '#abdbef'}} image={null} price={100} players={this.props.players} />
                    <Card position ={7} title="Chance" span={"span 3"} style={null} image={null} players={this.props.players} />
                    <Card position ={6} title="The Angel Isle" style={{ backgroundColor : '#abdbef'}} image={null} price={100} players={this.props.players} />
                    <Card position ={5} title="Kings Cross Station" span={"span 2"} style={null} image={null} price={200} players={this.props.players} />
                    <Card position ={4} title="Income Tax" span={"span 2"} style={null} image={null} price={200} players={this.props.players} />
                    <Card position ={3} title="White Chapel Road" style={{ backgroundColor : '#854b37'}} image={null} price={60} players={this.props.players}/>
                    <Card position ={2} title="Community Chest" image={null} players={this.props.players} span={"span 3"}/>
                    <Card position ={1} title="Old Kent Road" style={{ backgroundColor : '#854b37'}} players={this.props.players} image={null} price={60}/>
                    <Card title={null} style={null} image={"yeah"} position ={0} players={this.props.players} backgroundImg = {"https://gistcdn.rawgit.org/awessproject/e74addca538347eee57290210d44a675/db92b1b84066e35a6ececaf70f794b749a067bb6/go.svg"} span = {"span 4"}/>
                </div>
            </div>
        );
    }
}
export default Board;