import React from 'react';
import Main from './components/main/Main';
import './styles/main.scss';
import '../node_modules/nes.css/css/nes.min.css';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className="layout">
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
