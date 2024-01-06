import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
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
import AdoptForm from '../pages/Services/WildLife/AdoptForm'
import ProductDetails from '../Dashboard/ProductDetails'

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
        path: '/details/:_id',
        element: <AnimalDetails></AnimalDetails>,
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
        element: <Cart></Cart>,
      },
      {
        path: '/feedback',
        element: <Feedback></Feedback>,
      },
      {
        path: '/adoptform',
        element: <AdoptForm></AdoptForm>,
      },
    ],
  },
])
export default router
