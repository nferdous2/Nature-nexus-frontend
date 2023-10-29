import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import FreshFarm from '../../pages/Services/Freshfarm/FreshFarm';
import Login from '../../Authentication/Login';
import SignUp from '../../Authentication/SignUp';
import Home from '../../pages/Home/Home';
import WHome from '../../pages/Services/WildLife/WHome';
import DashboardNav from '../../Dashboard/DashboardNav';
import OTPVerification from '../../Authentication/OTP';

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
      {
        path:'/wildlife',
        element: <WHome></WHome>,
      },
      // {
      //   path: '/profile',
      //   element: <Profile></Profile>,
      // },
      {
        path: '/otp',
        element: <OTPVerification></OTPVerification>,
      },
      {
        path: '/dashboard',
        element: <DashboardNav/>
      },
    ],
  },
])
export default router
