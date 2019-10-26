import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar/ProgressBar';
import Character from '../Character/Character';

export default class Tutorial extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };

    this.increaseProgress = this.increaseProgress.bind(this);
    this.loopProgress = this.loopProgress.bind(this);
  }

  componentDidMount() {
    this.loopProgress();
  }

  increaseProgress(value) {
    const { progress } = this.state;

    const newProgress = progress + value;
    if (newProgress <= 100) {
      this.setState({ progress: newProgress });
    }
  }

  loopProgress() {
    const { progress } = this.state;
    const { nextPhase } = this.props;
    this.increaseProgress();
    if (progress < 100) {
      this.increaseProgress(2);
      setTimeout(this.loopProgress, 150 * Math.random(300));
    } else if (progress >= 100) {
      nextPhase();
    }
  }

  render() {
    const { progress } = this.state;
    return (
      <>
        <Character>
          { progress < 50 ? (<p>For best experience use a phone.</p>) : <i className="nes-smartphone change-orientation" />}
        </Character>
        <ProgressBar value={progress} />
      </>
    );
  }
}

Tutorial.propTypes = {
  nextPhase: PropTypes.func.isRequired,
};
