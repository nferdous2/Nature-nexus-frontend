import Main from '../../Layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      //   {
      //     path: '/signin',
      //     element: <SignIn></SignIn>,
      //   },
      //   {
      //     path: '/signup',
      //     element: <SignUp></SignUp>,
      //   },
      //   {
      //     path: '/contact',
      //     element: <Contact></Contact>,
      //   },
      //   {
      //     path: '/feedback',
      //     element: <Feedback></Feedback>,
      //   },
    ],
  },
])
export default router
