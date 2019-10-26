/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Main from './components/Main/Main';
import './styles/global.scss';
import '../node_modules/nes.css/css/nes.min.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Layout from './components/Layout/Layout';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      phase: 0,
      appTitle: 'Mage Jam 2019',
    };

    this.nextPhase = this.nextPhase.bind(this);
    this.setAppTitle = this.setAppTitle.bind(this);
  }

  setAppTitle(appTitle) {
    this.setState({ appTitle });
  }

  nextPhase() {
    const { phase } = this.state;
    const newPhase = phase + 1;
    this.setState({ phase: newPhase });
  }


  render() {
    const { phase, appTitle } = this.state;

    return (
      <Layout>
        {phase > 0 && <AppHeader title={appTitle} />}
        <Main setAppTitle={this.setAppTitle} nextPhase={this.nextPhase} phase={phase} />
      </Layout>
    );
  }
}
