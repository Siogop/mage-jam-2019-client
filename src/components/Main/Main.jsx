import React from 'react';
import PropTypes from 'prop-types';
import GamePad from '../GamePad/GamePad';
import Connector from '../Connector/Connector';
import Character from '../Character/Character';
import Tutorial from '../Tutorial/Tutorial';

const WS_ADDRESS = process.env.REACT_APP_WS_ADDRESS || 'ws://localhost:5000/game';

class Main extends React.Component {
  // instance of websocket connection as a class property
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      joined: false,
      disconnected: false,
      started: false,
    };
    console.log('Main!');
    this.ws = new WebSocket(WS_ADDRESS);
  }

  componentDidMount() {
    this.ws.onopen = () => {
      this.setState({
        connected: true,
        disconnected: false,
      });
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      console.log(message);
      if (message.messageType === 1) {
        console.log('joined');
        this.setState({
          joined: true,
        });
      } else if (message.messageType === 2) {
        console.log('started');
        this.setState({
          started: true,
        });
      }
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        connected: false,
        disconnected: true,
      });
    };
  }

  render() {
    const {
      connected, joined, disconnected, started,
    } = this.state;
    const { phase, nextPhase } = this.props;
    return (
      <main className="main">
        {connected && !joined && phase > 0 && <Connector webSocket={this.ws} />}
        {phase === 0 && <Tutorial nextPhase={nextPhase} />}
        {joined && connected && started && phase > 0 && <GamePad webSocket={this.ws} />}
        {disconnected && phase > 0 && (
          <Character>
            <p>Can&apos;t connect to the server.</p>
          </Character>
        )}
        {joined && connected && !started && phase > 0 && (
          <Character>
            <p>Waiting for players.</p>
          </Character>
        )}
      </main>
    );
  }
}

Main.propTypes = {
  phase: PropTypes.number.isRequired,
  nextPhase: PropTypes.func.isRequired,

};

export default Main;
