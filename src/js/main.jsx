import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { FlexibleBox, FlexibleChild } from './components/flexibleDraggableColumn';

const App = React.createClass({
  render(){
    return (
      <FlexibleBox>
        <FlexibleChild>flex box 1</FlexibleChild>
        <FlexibleChild>flex box 2</FlexibleChild>
      </FlexibleBox>
    );
  }
});

render(
  <App />
  , document.getElementById('flexibleDraggableColumn')
);
