import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css';
function toolbar() {
    return (
     <header className="toolbar">
         <nav className="toolbar_navigation">
             <div>
                 <DrawerToggleButton/>
             </div>
             <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
             <div className="space"/>
             <div className="toolbar_navigation_items">
                 <ul>
                     <li><a href="/">Products</a></li>
                     <li><a href="/">Products</a></li>
                 </ul>
             </div>
         </nav>
     </header>
    );
  }
  
  export default toolbar;
