import React from 'react';
import '../about/About.css';
import classNames from "classnames";


const AboutDetailsItem = ({title, active, onClick}) => {
  return (
    <div className={classNames('item', {active})} onClick={onClick}>
     <h2 className='title'> {title}</h2>

    </div>
  );
};

export default AboutDetailsItem;