import React from 'react';
import './SideDrawer.css';

function sideDrawer (){
    function hide(){
        document.getElementById("side").style.display = "none";
        document.getElementById("backdrop").style.display = "none"
    }
    return (
        <nav className="side-drawer" id="side">
             <span className="close" onClick= {hide}>&times;</span>
         
            <ul>
                <li><a href="/">production</a></li>
                <li><a href="/">users</a></li>

            </ul>
        </nav>
    );

}
export default sideDrawer;