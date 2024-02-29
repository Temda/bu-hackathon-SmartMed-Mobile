import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './page/Home';
import Profile from './page/profile/Profile'
import CreateProfile from './page/profile/CreateProfile'
import Capsule from './page/smartcapsule/Capsule'
import PersonalRecord from './page/record/PersonalRecord'
import SummaryReport from './page/report/SummaryReport'
import CreateCapsule from './page/smartcapsule/CreateCapsule'

const router = createBrowserRouter([
    {
      path: "/", element: <Home />
    },
    {
      path: "/profile", element: <Profile />
    },
    {
      path: "/createProfile", element: <CreateProfile />
    },
    {
      path: "/capsule", element: <Capsule />
    },
    {
      path: "/createCapsule", element: <CreateCapsule />
    },
    {
      path: "/personalRecord", element: <PersonalRecord />
    },
    {
      path: "/summaryReport", element: <SummaryReport />
    }
])
  
  const Router = () => {
    return <RouterProvider router={router} />
  }
  
  export default Router