import React from 'react';
import SoundItem from './SoundItem';

export default class SoundsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        audio: {
          sound: null,
          soundName: null,
          currentlyPlaying: null 
        }
      };
    }
    
    playSound(id) {
      if (this.state.audio.currentlyPlaying) {
        let snd = this.state.audio.sound;
        snd.pause();
      }
      let sound = this.props.sounds.find(sound => { return sound.id === id});
      let snd = new Audio(sound.soundURL);
      this.setState({ audio: { sound: snd, soundName: sound.soundName, currentlyPlaying: true }});
      snd.play();
      
      let data = [...this.props.sounds];
      const index = data.findIndex(obj => obj.soundName === sound.soundName);
      data[index].count += 1;
      data[index].isPlaying = true;
      this.setState(data);
      
      snd.addEventListener('ended', this.soundListener.bind(this, data, index, snd));
    }
    
    soundListener(data, index, snd) {
      const newData = [ ...data ];
      newData[index].isPlaying = false;
      this.setState(newData);
      snd.removeEventListener('ended', this.soundListener);
    } 
    
    renderSounds() {
      return this.props.sounds.map(sound => {
        return <SoundItem key={sound.id} sound={sound} audio={this.state.audio} playSound={this.playSound.bind(this)} />
      });
    }
    render() {
      return (
        <div className="container">
            <div className="row">
                {this.renderSounds()}
            </div> 
        </div>
      )
    }
  };