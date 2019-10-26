import React from 'react';
import './Character.scss';

export default function Character() {
  return (
    <div className="character">
      <p className="character__balloon nes-balloon from-right">
        <p>For best experience use a phone.</p>
      </p>
      <i className="character nes-octocat animate" />
    </div>
  );
}
