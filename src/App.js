import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Breakfast from "./Pages/Home/BreakFast/Breakfast";
import Lunch from "./Pages/Home/Lunch/Lunch";
import SingleItem from "./Pages/Home/SingleItem/SingleItem";
import Dinner from "./Pages/Home/Dinner/Dinner";
import SignIn from "./Pages/Login/SignIn/SignIn";
import Register from "./Pages/Login/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/SingleItem/:id" element={<SingleItem></SingleItem>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/SingleItem/:id" element={<SingleItem></SingleItem>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        <Route path="/SingleItem/:id" element={<SingleItem></SingleItem>}></Route>
        <Route path="/testimonial" element={<Testimonial></Testimonial>}></Route>
        <Route path="/SingleItem" element={<SingleItem></SingleItem>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
