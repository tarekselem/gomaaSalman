import React from 'react';
import './SoundItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

export default class SoundItem extends React.Component {
    render() {
      let speakerStyle = faVolumeOff;
      if (this.props.sound.isPlaying && this.props.sound.soundName === this.props.audio.soundName && this.props.audio.currentlyPlaying) {
        speakerStyle = faVolumeUp;
      }
      return (
        <div className='sound-card col'
          onClick={() => this.props.playSound(this.props.sound.id)}>
          <div className="image-container">
              <FontAwesomeIcon icon={speakerStyle} />
          </div>
          <div className=''>
            <h4>{this.props.sound.soundName}</h4>
          </div>
        </div>
      );
    }
  }