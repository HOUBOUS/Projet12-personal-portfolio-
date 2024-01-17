import React from 'react';
import '../about/About.css';
import classNames from "classnames";

const AboutTitle = ({title, content, active, onClick, detailItem}) => {
   const titleClass = `title-container-${detailItem}`;
    
   
   return (
    <div className={classNames(titleClass, {"active-title":active })}>
        <h3 onClick={onClick}> {title}</h3>
        <span className='p-container'>{content}</span>
        
        </div>
  )
}

export default AboutTitle;