import React from 'react';
import './Container.css';
import ClickPics from '../clickPics';

// main container for each Image component
// loops through each index in props.images, which contains an array of images
// to create a new Image component for each image
// attaches the passed down clickEvent function to each image component
const Container = props => (
  // loops through
  <div>
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }

    {props.images.map((a, i) => <ClickPics name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;
