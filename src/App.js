// src/App.js
import React from 'react';
import './styles/global.css';  
import NavigationBar from './components/common/NavigationBar/NavigationBar';
import Sidebar from './components/common/Sidebar/Sidebar';
import TelegramLogin from './components/telegramLogin/TelegramLoginButton';
import FileDisplay from './features/fileDisplay/FileDisplay';
import { useState } from 'react'; // Add useState

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTelegramLogin = (user) => {
    console.log('User data:', user); 
    setIsLoggedIn(true);
  };
console.log("app.js is called")
  return (
    <div className="app-container">

      <NavigationBar />
      <div className="main-content">
        <Sidebar />
         <div className="content-area">
      <h1>BharatFreeCloud</h1> 
      {isLoggedIn ? <FileDisplay /> : <TelegramLogin onTelegramAuth={handleTelegramLogin} />} 
    </div>
      </div>
    </div>
  );
}

export default App;