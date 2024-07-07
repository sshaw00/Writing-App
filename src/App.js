import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import FullScreenStory from "./pages/FullScreenStory";
import Home from "./pages/Home";

import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const PrivateRoutes = () => {
//   const { isAuth } = useSelector((state) => state.auth);

//   return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
// };

// const RestrictedRoutes = () => {
//   const { isAuth } = useSelector((state) => state.auth);

//   return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
// };

const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/" component={GenreCarousel} /> */}
          <Route path="/fullscreen" element={<FullScreenStory />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
