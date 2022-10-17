import {  Route, Routes } from "react-router-dom";
import Register from "./features/register/Register";
import Error404 from "./features/error404/Error404";
import Home from "./features/home/Home";
function App() {
  return (

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/register" element={<Register />} />
      </Routes>

  );
}

export default App;
