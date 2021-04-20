import './App.css';
import GameComponent from './ui_components/GameComponent'
import Login from './ui_components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'

function App() {
  return (
    <Router>

      <Route path="/" exact component={Login} />
      <Route path="/game" component={GameComponent} />

    </Router>

  );
}

export default App;
