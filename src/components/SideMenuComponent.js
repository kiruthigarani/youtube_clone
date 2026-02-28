import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const SideMenuComponent = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isOpen);
  return (
   
    <div className={`p-4 shadow-lg w-48 h-screen  ${isMenuOpen ? "block" : "hidden"}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
   

      <h3 className="pt-4 font-semibold">Subscriptions</h3>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>

  );
};
export default SideMenuComponent;
