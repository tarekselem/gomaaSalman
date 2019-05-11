import React from 'react';

import logo from './quraan-logo.png';
import './App.css';
import SoundsList from './SoundsList';

import soundsListData from './sounds/soundsListData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: soundsListData
    };
  }

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            القرآن الكريم بصوت الحاج/ جمعه عبده سلمان
          </h1>
          <SoundsList sounds={this.state.sounds} audio={this.state.audio} />
        </header>
      </div>
    );
  }
}


export default App;
