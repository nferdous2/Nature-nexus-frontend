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
import Contact from './../pages/contact/Contact'
import Feedback from './../pages/Feedback/Feedback'
import AdoptForm from './../pages/Services/WildLife/AdoptForm'

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
        loader: ({ params }) => {
          const animalId = params._id

          return fetch('http://localhost:8000/products')
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`)
              }
              return response.json()
            })
            .then((data) => {
              const animal = data.find((animal) => animal.id === animalId)
              if (!animal) {
                throw new Error(`Animal with ID ${animalId} not found`)
              }
              return animal
            })
            .catch((error) => {
              console.error('Loader Error:', error)
              return null // Return null or handle the error as needed
            })
        },
        element: <AnimalDetails></AnimalDetails>,
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
