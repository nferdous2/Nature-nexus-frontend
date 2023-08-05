import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import FreshFarm from '../../pages/Services/Freshfarm/FreshFarm/FreshFarm';
import SignUp from '../../pages/Authentication/SignUp';
import Login from '../../pages/Authentication/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/freshfarm',
        element: <FreshFarm></FreshFarm>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
])
export default router
