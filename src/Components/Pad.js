import React from 'react';


class Pad extends React.Component {
    

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown())

    }

    handleKeyDown = event => {
        if(event.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
        }
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }
    
    
    render() {
        return ( 
            <div className="drum-pad" id={this.props.id} onClick={this.handleClick}> 
                <h2>{this.props.letter}</h2>
                <audio
                ref={ref => this.audio = ref}
                className='clip'
                src={this.props.src} 
                id={this.props.letter}
                
                ></audio>
            </div> 

        )
    }
}

export default Pad