import React from 'react';
import PropTypes from 'prop-types';
import './GamePad.scss';

const MOVE_LEFT_COMMUNICAT = '{"messageType":"methodInvocation","data":"{\\"methodName\\":\\"Move\\",\\"arguments\\":[\\"left\\"]}"}';
const MOVE_RIGHT_COMMUNICAT = '{"messageType":"methodInvocation","data":"{\\"methodName\\":\\"Move\\",\\"arguments\\":[\\"right\\"]}"}';

class GamePad extends React.Component {
  constructor(props) {
    super(props);

    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.onAttackCLick = this.onAttackCLick.bind(this);
  }

  onLeftClick() {
    const { webSocket } = this.props;
    console.log(MOVE_LEFT_COMMUNICAT);
    webSocket.send(MOVE_LEFT_COMMUNICAT); // send data to the server
  }

  onRightClick() {
    const { webSocket } = this.props;
    webSocket.send('attack'); // send data to the server
  }

  onAttackCLick() {
    const { webSocket } = this.props;
    console.log(MOVE_RIGHT_COMMUNICAT);
    webSocket.send(MOVE_RIGHT_COMMUNICAT); // send data to the server
  }

  render() {
    return (
      <div className="game-pad">
        <div className="button-container">
          <div onClick={this.onLeftClick}>Left</div>
        </div>
        <div className="button-container">
          <div onClick={this.onAttackCLick}>Attack</div>
        </div>
        <div className="button-container">
          <div onClick={this.onRightClick}>Right</div>
        </div>
      </div>
    );
  }
}

GamePad.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  webSocket: PropTypes.any.isRequired,
};

export default GamePad;
