import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import OverMij from "../pages/overmij";
import DienstDakdekken from "../pages/diensten/dakdekken";
import { RegioBennebroek, RegioHaarlem, RegioHeemstede } from "../pages/regio";
import DienstLoodZink from "../pages/diensten/loodzink";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/over-mij"} element={<OverMij />} />
          <Route path={"/dienst-dakdekken"} element={<DienstDakdekken />} />
          <Route path={"/dienst-lood-zink"} element={<DienstLoodZink />} />
          <Route path={"/regio-haarlem"} element={<RegioHaarlem />} />
          <Route path={"/regio-heemstede"} element={<RegioHeemstede />} />
          <Route path={"/regio-bennebroek"} element={<RegioBennebroek />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;