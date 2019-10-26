import React from 'react';
import Main from './components/Main/Main';
import './styles/global.scss';
import '../node_modules/nes.css/css/nes.min.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <div className="layout">
      <AppHeader />
      <Main />
      <AppFooter />
    </div>
  );
}

export default App;
