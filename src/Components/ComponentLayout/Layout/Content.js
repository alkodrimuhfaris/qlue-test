import React from 'react';

export default function Content(props) {
  return (
    <div className="content-wrapper">
      <div className={`blank-content ${props.hover ? 'hovered' : ''}`} />
      <div className="content">{props.children}</div>
    </div>
  );
}
