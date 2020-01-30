import React from 'react';
import './App.css';
import PlayerList from './views/PlayerList';
import {Router, Redirect} from '@reach/router';
import PlayerForm from './components/PlayerForm';
import GameOneStatus from './components/GameOneStatus';
import GameTwoStatus from './components/GameTwoStatus';
import GameThreeStatus from './components/GameThreeStatus';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <PlayerList path ='/lakers/list' default/>
          <Redirect from ='/' to ='/lakers/list' noThrow/>
          <PlayerForm path = '/lakers/add'/>
          <GameOneStatus path = '/status/game/1'/>
          <GameTwoStatus path = '/status/game/2'/>
          <GameThreeStatus path = '/status/game/3'/>
        </Router>
      </header>
    </div>
  );
}

export default App;
