import React, { Component } from 'react';
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
    this.increaseProgress();
    if (progress < 100) {
      this.increaseProgress(2);
      setTimeout(this.loopProgress, 100);
    }
  }

  render() {
    const { progress } = this.state;
    return (
      <main>
        <Character>
          { progress < 50 ? (<p>For best experience use a phone.</p>) : <i className="nes-smartphone change-orientation" />}
        </Character>
        <ProgressBar value={progress} />
      </main>
    );
  }
}
