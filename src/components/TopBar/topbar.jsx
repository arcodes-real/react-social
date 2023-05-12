import "./topbar.css";
import { FaSearch, FaUserCircle, FaComment, FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BetaSoc</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUserCircle />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaComment />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/persons/Archisman DAtta.jpeg" alt="img" className="topbarImg"/>
      </div>
    </div>
  );
}