import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import App from './App';

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '3e07db04-1d1b-4cb8-a18b-6b7269643bec'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();

ReactDOM.render(<App />, document.getElementById('root'));


