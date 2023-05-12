
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/online";


export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src= "assets\postImg\gift.png" alt=""></img>
            <span className="birthdayText"><b>Pola Foster</b> and <b>3 others</b> have their birthdays today. Wish them a <b>Happy Birthday</b>.</span>
          </div>
          <img className="rightbarAd" src= "assets\postImg\ad.png" alt= ""></img>
  
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
  
            {Users.map((u) => (
              <Online key= {u.id} user = {u} />
            ))
            };
  
  
  
  
            
  
          </ul>
    
      </>
    );
    };

    const ProfileRightbar = () => {
      return(
       <>
        <h4 className="rightbarTitle">Details</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Lives in:</span>
            <span className="rightbarInfoValue">London, UK</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Chennai, India</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src= "assets/persons/5.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src= "assets/persons/2.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src= "assets/persons/7.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src= "assets/persons/4.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src= "assets/persons/8.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src= "assets/persons/3.jpeg" alt="" className="rightbarFollowingImg"></img>
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
       </>
      )
    }
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
