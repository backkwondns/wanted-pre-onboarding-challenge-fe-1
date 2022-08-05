import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authLib } from 'libs';

function Provider(): JSX.Element {
  if (authLib.getToken() === null) return <Navigate to="/auth" />;
  return <Outlet />;
}

export default Provider;
