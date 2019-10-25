/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './GamePad.scss';

const MOVE_LEFT_MESSAGE = '{"data":"{\\"methodName\\":\\"Move\\",\\"arguments\\":[\\"left\\"]}"}';
const MOVE_RIGHT_MESSAGE = '{"data":"{\\"methodName\\":\\"Move\\",\\"arguments\\":[\\"right\\"]}"}';
const ATTACK_MESSAGE = '{"data":"{\\"methodName\\":\\"Attack\\",\\"arguments\\":[\\"right\\"]}"}';

class GamePad extends React.Component {
  constructor(props) {
    super(props);

    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.onAttackCLick = this.onAttackCLick.bind(this);
  }

  onLeftClick() {
    const { webSocket } = this.props;
    console.log(MOVE_LEFT_MESSAGE);
    webSocket.send(MOVE_LEFT_MESSAGE); // send data to the server
  }

  onAttackCLick() {
    const { webSocket } = this.props;
    console.log(ATTACK_MESSAGE);
    webSocket.send(ATTACK_MESSAGE); // send data to the server
  }

  onRightClick() {
    const { webSocket } = this.props;
    console.log(MOVE_RIGHT_MESSAGE);
    webSocket.send(MOVE_RIGHT_MESSAGE); // send data to the server
  }

  render() {
    return (
      <div className="game-pad">
        <div className="" />
        <div className="nes-btn is-primary">
          <div role="button" tabIndex={0} onClick={this.onLeftClick}>Left</div>
        </div>
        <div className="nes-btn is-success">
          <div role="button" tabIndex={0} onClick={this.onAttackCLick}>Attack</div>
        </div>
        <div className="nes-btn is-warning">
          <div role="button" tabIndex={0} onClick={this.onRightClick}>Right</div>
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
