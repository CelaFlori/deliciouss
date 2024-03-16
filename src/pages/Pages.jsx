import { Home } from "./Home";
import {Cuisine} from "./Cuisine.jsx";
import { Routes, Route } from "react-router-dom";

export const Pages = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
    </div>
  );
};
