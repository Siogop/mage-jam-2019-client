/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Main from './components/Main/Main';
import './styles/global.scss';
import '../node_modules/nes.css/css/nes.min.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Layout from './components/Layout/Layout';
import Tutorial from './components/Tutorial/Tutorial';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      phase: 0,
    };

    this.renderController = this.renderController.bind(this);
    this.renderTutorial = this.renderTutorial.bind(this);
    this.nextPhase = this.nextPhase.bind(this);
  }

  nextPhase() {
    const { phase } = this.state;
    const newPhase = phase + 1;
    this.setState({ phase: newPhase });
  }

  renderTutorial() {
    const { phase } = this.state;
    return (
      <Layout>
        <Tutorial nextPhase={this.nextPhase} />
        <Main phase={phase} />
      </Layout>
    );
  }

  renderController() {
    const { phase } = this.state;
    return (
      <Layout>
        <AppHeader />
        <Main phase={phase} />
        <AppFooter />
      </Layout>
    );
  }

  render() {
    const { phase } = this.state;

    switch (phase) {
    case 0: return this.renderTutorial();
    case 1: return this.renderController();
    default: return <div />;
    }
  }
}
