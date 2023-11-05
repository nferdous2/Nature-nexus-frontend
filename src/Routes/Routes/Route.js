import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import FreshFarm from '../../pages/Services/Freshfarm/FreshFarm'
import Login from '../../Authentication/Login'
import SignUp from '../../Authentication/SignUp'
import Home from '../../pages/Home/Home'
import WHome from '../../pages/Services/WildLife/WHome'
import DashboardNav from '../../Dashboard/DashboardNav'
import OTPVerification from '../../Authentication/OTP'
import AnimalDetails from '../../pages/Services/WildLife/AnimalDetails'
import Contact from '../../pages/contact/Contact'
import Feedback from '../../pages/Feedback/Feedback'

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
        path: '/wildlife',
        element: <WHome></WHome>,
      },
      {
        path: '/details/:id',
        element: <AnimalDetails></AnimalDetails>,
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
        element: <DashboardNav />,
      },
      {
        path: '/contactus',
        element: <Contact></Contact>,
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
    ],
  },
])
export default router
