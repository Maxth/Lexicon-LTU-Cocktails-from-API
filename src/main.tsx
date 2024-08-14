import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import {InfoPage, LandingPage, Root, SearchPage} from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/info/:cocktailId',
        element: <InfoPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
