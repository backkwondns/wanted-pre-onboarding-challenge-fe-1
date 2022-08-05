import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'mobx-react';
import Router from './router';
import GlobalStyle from './globalStyle';
import RootStore from './stores/root.store';

function App() {
  const rootStore = new RootStore();
  return (
    <>
      <GlobalStyle />
      <Provider {...rootStore}>
        <Router />
      </Provider>
      <ToastContainer position="top-center" autoClose={800} style={{ zIndex: 100000 }} />
    </>
  );
}

export default App;
