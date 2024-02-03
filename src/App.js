import Home from "./pages/home/home";
import Profile from "./pages/Profile/profile";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

import {
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path = "/profile/:username" element={<Profile />} />
       
      </Routes>
    </div>
  );
}

export default App;
