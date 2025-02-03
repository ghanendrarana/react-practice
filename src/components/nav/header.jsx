import React from "react";
import LoginButton from "./login-button";

function Header(props) {
  const { user, setUser } = props;

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>
      <span>{user?.name || "Logo"}</span>
      <LoginButton user={user} setUser={setUser} />
    </nav>
  )
}

export default Header;
