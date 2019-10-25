import React from 'react';
import GamePad from '../gamepad/GamePad';

const WS_ADDRESS = process.env.REACT_APP_WS_ADDRESS || 'ws://bf3a65f7.ngrok.io/game';

class Main extends React.Component {
  // instance of websocket connection as a class property
  constructor(props) {
    super(props);
    this.ws = new WebSocket(WS_ADDRESS);
  }


  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
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

  render() {
    return (
      <div className="main">
        <GamePad webSocket={this.ws} />
      </div>
    );
  }
}

export default Main;
