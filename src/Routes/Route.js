import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import FreshFarm from '../pages/Services/Freshfarm/FreshFarm'
import SignUp from '../Authentication/SignUp'
import Login from '../Authentication/Login'
import WHome from '../pages/Services/WildLife/WHome'
import OTPVerification from '../Authentication/OTP'
import Cart from '../pages/Services/Cart'
import DashboardNav from '../Dashboard/DashboardNav'
import AnimalDetails from '../pages/Services/WildLife/AnimalDetails'
import Contact from './../pages/contact/Contact';
import Feedback from './../pages/Feedback/Feedback';
import Details from '../pages/Services/Details'
import PaymentSuccess from '../Payment/PaymentSuccess'
import PaymentFail from '../Payment/PaymentFail'
import ProductDetails from '../Dashboard/ProductDetails'
import Main from '../Layout/Main'
import IHome from '../pages/Services/IndoorPlants/IHome'
import PrivateRoute from './PrivateRoute'

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
        path: '/plants',
        element: <IHome></IHome>,
      },
      {
        path: '/details/:_id',
        element:<PrivateRoute><AnimalDetails></AnimalDetails></PrivateRoute> 
      },
      {
        path: "/detail/:id",
        element: <Details />

      },
      {
        path: "/pdetail/:id",
        element: <ProductDetails />

      },
      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess />

      }, {
        path: "payment/fail/:tranId",
        element: <PaymentFail />

      },
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
        path: '/cart',
        element: <PrivateRoute><Cart></Cart> </PrivateRoute>
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
    
    ],
  },
])
export default router
