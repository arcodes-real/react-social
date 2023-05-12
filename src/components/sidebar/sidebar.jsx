
import "./sidebar.css";
import { FaRss,
    FaCommentDots,
    FaVideo,
    FaUserFriends,
    FaBookmark,
    FaQuestion,
    FaBriefcase,
    FaCalendar,
    FaGraduationCap
    }
    from "react-icons/fa";
    import { Users } from "../../dummyData";
    import CloseFriend from "../closeFriends/closeFriend";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <FaRss className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <FaCommentDots className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
                <FaVideo className="sidebarIcon" />
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                <FaUserFriends className="sidebarIcon" />
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                <FaBookmark className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <FaQuestion className="sidebarIcon" />
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <FaBriefcase className="sidebarIcon" />
                <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <FaCalendar className="sidebarIcon" />
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <FaGraduationCap className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {Users.map((u) => (
                <CloseFriend key={u.id} user={u} />
            ))}
            
        </ul>
      </div>
    </div>
  );
} 
