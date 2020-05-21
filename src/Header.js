import React from 'react';
import search_icon from './images/Header/search_icon.png';

import './Header.css';

function Header() {
  return (
    <div name="Header" className="Header">
        <div name="Headline" className="Headline">
                            <label className="Headline-text">Развлечения</label> 
        </div>                         
        <div className="Header-search">
         <img src={search_icon} className="Header-search_icon"></img> 
          <lable className="Header-search_text" >Какой магазин вам нужен?</lable>
           <div name="Rectangle" className="Header-search_rectangle">
               </div>
        </div>
    </div>
  );
}

export default Header;
