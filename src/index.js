import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import DeviceFork from './DeviceFork';
import './index.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");
const container = document.getElementById('root');
const root = createRoot(container);
container.addEventListener('resize', DeviceFork);
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <DeviceFork />
    </Provider>
  </React.StrictMode>
);

