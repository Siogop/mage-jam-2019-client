/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const CONNECT_MESSAGE = '{"data":"{\\"methodName\\":\\"AddPlayer\\",\\"arguments\\":[\\"left\\"]}"}';

class Connector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
    };

    this.onJoinClick = this.onJoinClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onJoinClick() {
    const { webSocket, onJoin } = this.props;
    const { team } = this.state;
    console.log(CONNECT_MESSAGE);
    webSocket.send(CONNECT_MESSAGE); // send data to the server
    onJoin();
  }

  handleChange(event) {
    this.setState({ team: event.target.value });
  }

  render() {
    const { team } = this.state;
    return (
      <div className="connector">
        <div className="connector__controller">
          <input type="text" name="name" value={team} onChange={this.handleChange} />
          <div className="nes-btn is-primary" role="button" tabIndex={0} onClick={this.onJoinClick}>
            <div>Join</div>
          </div>
        </div>
      </div>
    );
  }
}

Connector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  webSocket: PropTypes.any.isRequired,
  onJoin: PropTypes.func.isRequired,
};

export default Connector;
