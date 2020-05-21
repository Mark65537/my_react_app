import React from 'react';
import icon from './images/Sidebar/icon 1.png';
import enjoy from './images/Sidebar/enjoy.png';
import catalog from './images/Sidebar/catalog.png';
import beauty from './images/Sidebar/beauty.png';
import car from './images/Sidebar/car.png';
import health from './images/Sidebar/health.png';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
        <div name="logo" className="Sidebar-logo">
         <img src={icon} className="Sidebar-logo_icon" alt="logo" />
                            <label className="Sidebar-logo_text">BECO</label> 
        </div>                         
        <div className="Sidebar-category">
         <img src={catalog} className="Sidebar-category-icon"></img> 
                            <a className="Sidebar-text"  href="#">Каталог</a>
        </div>
        <div className="Sidebar-category">
         <img src={health} className="Sidebar-category-icon"></img> 
                             <a className="Sidebar-text" href="#">Здоровье</a>
        </div>
        <div className="Sidebar-category">
         <img src={beauty} className="Sidebar-category-icon"></img>
                             <a className="Sidebar-text" href="#">Красота</a>
        </div>
        <div className="Sidebar-category">
         <img src={enjoy} className="Sidebar-category-icon"></img>
                             <a className="Sidebar-text" href="#">Развлечения</a>
        </div>
        <div className="Sidebar-category">
         <img src={car} className="Sidebar-category-icon"></img> 
                             <a className="Sidebar-text" href="#">Авто</a>
        </div>
    </div>
  );
}

export default Sidebar;
