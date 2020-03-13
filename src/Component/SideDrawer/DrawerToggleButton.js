import React from 'react';
import './DrawerToggleButton.css';
import './SideDrawer.css'
function drawerToggleButton() {
  function show(){
    document.getElementById("side").style.display = "block";
    document.getElementById("backdrop").style.display = "block"
  }
    return (
     <button onClick= {show} className="toggle-button">
         <div className="toggle-button_line"/>
         <div className="toggle-button_line"/>
         <div className="toggle-button_line"/>
         </button>
    
    );
  }
  
  export default drawerToggleButton;
