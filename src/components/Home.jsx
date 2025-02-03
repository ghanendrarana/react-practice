import React from "react";
import Header from "./nav/header";

function Home() {
  const [user, setUser] = React.useState(null)

  return (
    <div style={{padding: "10px 50px"}}>
      <Header user={user} setUser={setUser} />
      <p>Home Body.</p>
    </div>
  );
}

export default Home; 