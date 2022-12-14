import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Assets/styles/style.css";
import { API, setAuthToken } from "./Components/Config/api";
import { PrivateRoute } from "./Components/Config/Navgations";
import Header from "./Components/Header";
import Incometransaction from "./Components/Income-transaction";
import { LoginContext } from "./context/DataContext";
import "./index.css";
import AddProduk from "./Pages/Add-produk";
import Admin from "./Pages/Admin";
import ChartOrder from "./Pages/Chart-order";
import DetailRestaurants from "./Pages/DetailRestaurant";
import EditProfile from "./Pages/Edit-profile";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import User from "./Pages/User";

function App() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useContext(LoginContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false && isLoading) {
      navigate("/Admin");
    } else {
      if (state.user.role === "patner") {
        navigate("/Admin");
      } else if (state.user.role === "user") {
        navigate("/User");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false)
      // console.log(isLoading, "awaw");
    } catch (error) {
      console.log("contohin", error);
      setIsLoading(false)
      // console.log(isLoading, "lala");
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/User" element={<User />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/DetailResto" element={<DetailRestaurants />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/EditProfile" element={<EditProfile />} />
          <Route exact path="/AddProduct" element={<AddProduk />} />
          <Route exact path="/ChartOrder" element={<ChartOrder />} />
          <Route
            exact
            path="/IncomeTransaction"
            element={<Incometransaction />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
