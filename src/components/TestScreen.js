import React, { useState } from "react";
import Tick from './Tick';

function TestScreen() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{textAlign:"center"}}>Test Screen</h1>
        <button onClick={handleOpenDialog} style={{margin:'0 auto'}}>Send Money</button>
        <Tick isOpen={isDialogOpen} onClose={handleCloseDialog} />
      </div>
    </div>
  );
}

export default TestScreen;
