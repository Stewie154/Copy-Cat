import React from 'react';
import './CopyCat.css';

//cat images
const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
  };


export class CopyCat extends React.Component {

  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const value = this.props.value;
    const handleChange = this.props.handleChange;

    return(
      <div className="flex-container">
        <h1 className="title">Copy Cat</h1>
        <input 
          type="text"
          value={value}
          onChange={handleChange}
        />
        <img 
          src={copying ? images.copycat : images.quietcat } 
          alt="cat"
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
    </div>
    )
    
    
  }
    
    
  
};