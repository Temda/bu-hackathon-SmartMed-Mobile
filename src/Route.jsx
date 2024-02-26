import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './page/Home';
import Profile from './page/profile/Profile'
import CreateProfile from './page/profile/CreateProfile'
import Capsule from './page/smartcapsule/Capsule'
import PersonalRecord from './page/record/PersonalRecord'

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
      path: "/personalRecord", element: <PersonalRecord />
    }
])
  
  const Router = () => {
    return <RouterProvider router={router} />
  }
  
  export default Router