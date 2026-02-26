import React from "react";
import { useSelector } from "react-redux";

const SideMenuComponent = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isOpen);
  return (
   
    <div className={`p-4 shadow-lg w-48 ${isMenuOpen ? "block" : "hidden"}`}>
      <ul>
        <li>Home</li>
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
