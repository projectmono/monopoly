import './App.css';
import GameComponent from './ui_components/GameComponent'
import Login from './ui_components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      colors : {'blue' : false , 'red' : false, 'green' : false, 'yellow' : false, 'black' : false, 'orange' : false},
      userName : "",
      chosenColor : ""
    }

    this.activateColor = this.activateColor.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }


  setUserName(userName){

    this.setState({

      userName : userName

    })

  }

  activateColor(color, boolean, callback = function() {}){

    let colorsObject = {...this.state.colors};

    if (boolean){

      Object.keys(this.state.colors).map(value => colorsObject[value] =  false);

    }

    colorsObject[color] =  boolean;

    this.setState({

      colors : colorsObject

    })
  }



  
 
  render() {
  return (
    <Router>

      <Route path="/" exact render={(props) => <Login {...props} colors={this.state.colors} activateColor={this.activateColor} setUserName={this.setUserName}/> } />
  
      <Route path="/game" render={(props) => <GameComponent {...props} colors={this.state.colors} userName={this.state.userName}/> } />

    </Router>

  );
  }
}

export default App;
