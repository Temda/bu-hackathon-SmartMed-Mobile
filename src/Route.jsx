import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './page/Home';
import Profile from './page/profile/Profile'

const router = createBrowserRouter([
    {
      path: "/", element: <Home />
    },
    {
      path: "/profile", element: <Profile />
    }
])
  
  const Router = () => {
    return <RouterProvider router={router} />
  }
  
  export default Router