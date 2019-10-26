/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './Connector.scss';

const data = { methodName: 'AddPlayer', arguments: [] };

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
    const { webSocket } = this.props;
    const { team } = this.state;
    const messageData = data;
    messageData.arguments = [team];
    const message = {
      data: JSON.stringify(messageData),
    };
    console.log(message);
    webSocket.send(JSON.stringify(message)); // send data to the server
  }

  handleChange(event) {
    this.setState({ team: event.target.value });
  }

  render() {
    const { team } = this.state;
    return (
      <div className="connector">
        <div className="connector-form nes-field">
          <input className="nes-input" id="team-input" type="text" name="name" value={team} onChange={this.handleChange} />
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
};

export default Connector;
