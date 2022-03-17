import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/list-category' element={<Category />} />
      </Routes>
    </Router>
  );
};

export default Routing;
