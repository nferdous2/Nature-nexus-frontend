import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import FreshFarm from '../../pages/Services/Freshfarm/FreshFarm/FreshFarm';

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
    ],
  },
])
export default router
