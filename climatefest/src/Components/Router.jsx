import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Home';
import Register from './RegisterForm';
import Learn from './Learn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/Register',
        element: <Register />,
      },
      
      {
        path: '/Learn',
        element: <Learn />,
      }
    ],
  },
]);
