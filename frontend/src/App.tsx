import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>HOME</h1>}></Route>
          <Route path="/policy" element={<h1>Policy</h1>}></Route>
          <Route path="/Newsfeed" element={<h1>NewsFeed</h1>}></Route>
          <Route path="/contact" element={<h1>Contact</h1>}></Route>
        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
