import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Assets/styles/style.css";
// import { setAuthToken } from "./Components/Config/api";
import { PrivateRoute } from "./Components/Config/Navgations";
import Header from "./Components/Header";
import Incometransaction from "./Components/Income-transaction";
// import { LoginContext } from "./context/DataContext";
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

  // const [state, dispatch] = useContext(LoginContext)
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token)
  //   }
  // }, [state])

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get("")
      
  //   }
  // }

  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
