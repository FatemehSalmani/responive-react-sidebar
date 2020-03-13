import React from 'react';
import Toolbar from './Component/ToolBar/Toolbar'
import SideDrawer from './Component/SideDrawer/SideDrawer'
import Backdrop from './Component/Backdrop/Backdrop';


function App() {
  
  return (
    <div style={{height:'100%'}} >
      <Toolbar/>
      <Backdrop/>
      <SideDrawer/>
     
      <main >
        <p>this is page content!</p>
      </main>
    </div>
  );
}

export default App;
