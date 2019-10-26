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
        <Main nextPhase={this.nextPhase} phase={phase} />
      </Layout>
    );
  }

  renderController() {
    const { phase } = this.state;
    return (
      <Layout>
        <AppHeader />
        <Main nextPhase={this.nextPhase} phase={phase} />
        <AppFooter />
      </Layout>
    );
  }

  render() {
    const { phase } = this.state;

    return (
      <Layout>
        <AppHeader />
        <Main nextPhase={this.nextPhase} phase={phase} />
        <AppFooter />
      </Layout>
    );
  }
}
