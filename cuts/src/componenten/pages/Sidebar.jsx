import React from 'react';
import '../../styles.css';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="heading">
        <h1>Our locations</h1>
      </div>
      <div id="listings" className="listings">{props.generateListings()}</div>
    </div>
  );
};


export default Sidebar;