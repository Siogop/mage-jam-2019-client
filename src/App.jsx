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
      phase: 1,
    };

    this.renderController = this.renderController.bind(this);
    this.renderTutorial = this.renderTutorial.bind(this);
  }

  renderTutorial() {
    return (
      <Layout>
        tutorial
      </Layout>
    );
  }

  renderController() {
    return (
      <Layout>
        <AppHeader />
        <Main />
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
