import React from 'react';
import './AppHeader.scss';
import PropTypes from 'prop-types';

export default function AppHeader({ title }) {
  return (
    <header className="app-header">
      <div className="nes-container is-rounded is-dark">{title}</div>
    </header>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string,
};

AppHeader.defaultProps = {
  title: 'Mage Jam 2019',
};
