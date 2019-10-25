import React from 'react';
import PropTypes from 'prop-types';

class GamePad extends React.Component {
  constructor(props) {
    super(props);

    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.onAttackCLick = this.onAttackCLick.bind(this);
  }

  onLeftClick() {
    const { webSocket } = this.props;
    webSocket.send('left'); // send data to the server
  }

  onRightClick() {
    const { webSocket } = this.props;
    webSocket.send('attack'); // send data to the server
  }

  onAttackCLick() {
    const { webSocket } = this.props;
    webSocket.send('right'); // send data to the server
  }

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.onLeftClick}>Left</button>
        </div>
        <div>
          <button type="button" onClick={this.onAttackCLick}>Attack</button>
        </div>
        <div>
          <button type="button" onClick={this.onRightClick}>Right</button>
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
