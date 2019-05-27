import React from 'react';
import './App.css';
import Pad from './Components/Pad.js'

const pads = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass loop', letter: 'W', src: 'http://s3.amazonaws.com/aas_sound/UAMasterclass/Trip-Hop/WonderSynthBass.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'bicycle bell', letter: 'A', src: 'http://bridgewater-brunel.me.uk/downloads/raw/simutrans/Pak128.Britain-Ex/sound/magedu-bicycle-bell.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'triangle', letter: 'C', src: 'http://s1download-universal-soundbank.com/mp3/sounds/21231.mp3'  },
  ]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: ''
    }
  }

  handleDisplay = display => this.setState({display})

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
          <div id='drum-pads'>
            {pads.map(p => (

              <Pad  
                id={p.id}
                letter={p.letter}
                src={p.src}
                handleDisplay={this.handleDisplay}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
