import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, SignUp } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />}>
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
