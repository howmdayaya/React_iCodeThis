import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Demo01 from '../pages/views/Demo01';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/demo01', element: <Demo01 /> },
    ],
  },
]);