import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__screen">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  children: [],
};
