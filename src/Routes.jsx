import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import App from "./App";
import ChatBot from "./pages/chatBot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} > 
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Route>
  )
);
export default router;
