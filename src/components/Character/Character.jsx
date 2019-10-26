import React from 'react';
import './Character.scss';
import PropTypes from 'prop-types';

export default function Character({ children }) {
  return (
    <div className="character">
      <div className="character__balloon nes-balloon from-right">
        {children}
      </div>
      <i className="character nes-octocat animate" />
    </div>
  );
}


Character.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Character.defaultProps = {
  children: [],
};
