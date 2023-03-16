import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Register from './pages/Register'

// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} > 
        <Route index element={<Home />} />
        <Route path='/register' element={<Register />} />
    </Route>
  )
)
export default router
