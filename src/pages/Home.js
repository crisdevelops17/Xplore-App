import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to peace and relaxation!</h1>
      <p>
        Enjoy your stay with peace of mind. Xplore our different stays knowing
        we have the perfect stay for you! We have the best deals and most
        desired stays. Know safety is our number one priority. Sit back and
        relax knowing you chose Xplore the most trusted and exclusive traveling
        site.
      </p>
      <Link to="/stays">Explore our Stays</Link>
    </div>
  );
}
