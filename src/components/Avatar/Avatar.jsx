import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../../assets/PhotoAva.png';
import './Avatar.css';

const Avatar = ({page}) => {
    const photoClass = `photo ${page}`;
    const spanClass = `shadow-${page}`;
  return (
    <div>
    <div className={spanClass}></div>
    <img src={Photo} className={photoClass} alt="MyAvatar"/>
    
    </div>
  );
};

Avatar.prototypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar