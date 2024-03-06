// src/App.js
import React from 'react';
import './styles/global.css';  
import NavigationBar from './components/common/NavigationBar';
import Sidebar from './components/common/Sidebar';
import TelegramLoginButton from './components/telegramLogin/TelegramLoginButton';
import FileDisplay from './features/fileDisplay/FileDisplay';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <h1>BharatFreeCloud</h1> 
          <TelegramLoginButton /> 
          <FileDisplay /> {/* Visible after login */}
        </div>
      </div>
    </div>
  );
}

export default App;