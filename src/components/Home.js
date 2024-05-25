import React from "react";



function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


//import username
import { username, city } from "../data/user";


//export
export default Home;