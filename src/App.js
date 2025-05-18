// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/Home"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter basename="/my-app">
      <Routes>
        <Route index element={<Navigate replace to="signup" />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
