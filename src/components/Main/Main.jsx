import React from 'react';
import GamePad from '../GamePad/GamePad';
import Connector from '../Connector/Connector';
import './Main.scss';

const WS_ADDRESS = process.env.REACT_APP_WS_ADDRESS || 'wss://ed0e4e1b.ngrok.io/game';

class Main extends React.Component {
  // instance of websocket connection as a class property
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      joined: false,
    };

    this.onJoin = this.onJoin.bind(this);
    this.ws = new WebSocket(WS_ADDRESS);
  }

  componentDidMount() {
    this.ws.onopen = () => {
      this.setState({
        connected: true,
      });
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      // this.setState({ dataFromServer: message });
      console.log(message);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
    };
  }

  onJoin() {
    this.setState({
      joined: true,
    });
  }

  render() {
    const { connected, joined } = this.state;
    return (
      <main className="main">
        {connected && <Connector webSocket={this.ws} onJoin={this.onJoin} />}
        {joined && <GamePad webSocket={this.ws} />}
      </main>
    );
  }
}

export default Main;
