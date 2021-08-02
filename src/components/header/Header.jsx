import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firestore";
import "./Header.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail logo"
        />
      </div>
      <div className="header_middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar src={user?.photoUrl} onClick={() => signOut()} />{" "}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
