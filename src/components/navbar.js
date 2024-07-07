import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./nav.css";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { onLogout } from "../api/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <header>
      <nav className="navbar bg-light">
        <img alt="logo" className="logo" />
        <div className="header">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="auth-buttons">
            <Link to="/">
              <div className="btn">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderColor: "#000",
                  }}
                  variant="contained"
                  className="btn1"
                >
                  Login
                </Button>
              </div>
            </Link>
            <Link to="/">
              <div className="btn">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderColor: "#474747",
                  }}
                  variant="contained"
                  className="btn1"
                >
                  Sign Up
                </Button>
              </div>
            </Link>
          </div>
          {location.pathname !== "/" && (
            <Link to="/">
              <div className="btn">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderColor: "#474747",
                  }}
                  variant="contained"
                  className="btn1"
                >
                  Home
                </Button>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
