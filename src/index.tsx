import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import { PeopleProvider } from './providers/PeopleProvider';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PeopleProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PeopleProvider>
  </React.StrictMode>
);

reportWebVitals();
