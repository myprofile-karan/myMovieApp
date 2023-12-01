import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import fetchDataFromApi from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiconfiguration } from "./store/homeSlice";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/error404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        
      }
      dispatch(getApiconfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:mediaType/:id" Component={Details} />
        <Route path="/search/:query" Component={SearchResult} />
        <Route path="/explore/:mediaType" Component={Explore} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
