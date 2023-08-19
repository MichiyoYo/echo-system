import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CometChat } from '@cometchat-pro/chat';
import { cometChat } from './app.config';

const appID = cometChat.APP_ID;
const region = cometChat.APP_REGION;
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appID, appSetting)
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Initialization completed successfully');
  })
  .catch((error) => {
    console.log('Initialization failed with error:', error);
  });
