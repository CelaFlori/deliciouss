import { Home } from "./Home";
import {Cuisine} from "./Cuisine.jsx";
import { Searched } from "./Searched.jsx";
import { Routes, Route } from "react-router-dom";

export const Pages = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
      </Routes>
    </div>
  );
};
