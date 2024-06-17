import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { AdvanceInfo } from './pages/AdvanceInfo/AdvanceInfo.tsx';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/weather/:id',
    element: <AdvanceInfo />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
