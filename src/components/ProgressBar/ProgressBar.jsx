import React from 'react';
import PropTypes from 'prop-types';

function getProgressColor(value) {
  if (value <= 20) {
    return 'is-error';
  } if (value <= 40) {
    return 'is-warning';
  } if (value <= 60) {
    return 'is-success';
  } if (value <= 60) {
    return 'is-primary';
  }
  return '';
}

export default function ProgressBar({ value }) {
  return <progress className={`nes-progress ${getProgressColor(value)}`} value={value} max="100" />;
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};

ProgressBar.defaultProps = {
  value: 0,
};
