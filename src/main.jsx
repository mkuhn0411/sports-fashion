import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PlayerContextProvider } from './store/player-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlayerContextProvider>
    <App />
  </PlayerContextProvider>,
)
