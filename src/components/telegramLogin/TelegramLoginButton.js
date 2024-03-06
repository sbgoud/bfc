// src/components/telegramLogin/TelegramLoginButton.js
import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const TelegramLogin = ({ onTelegramAuth }) => {
  const handleTelegramResponse = (response) => {
    onTelegramAuth(response);  // We'll pass the user data up 
  };

  return (
    <TelegramLoginButton 
      dataOnauth={handleTelegramResponse} 
      botName="bharatfreecloud_bot" 
    />
  );
};

export default TelegramLogin;
