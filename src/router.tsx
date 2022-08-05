import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Auth, SignUp, Provider } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Provider />}>
          <Route index element={<Home />} />
          <Route path=":paramID" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
