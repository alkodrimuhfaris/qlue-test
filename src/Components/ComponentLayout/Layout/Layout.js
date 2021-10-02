import React from 'react';
import Content from './Content';

export default function Layout(props) {
  return (
    <div className="parent">
      <div className="navigation">
        <div className="top-nav">
          <img className="logo" src="/assets/logo/logo.png" alt="logo" />
        </div>
      </div>
      <Content>{props.children}</Content>
    </div>
  );
}
