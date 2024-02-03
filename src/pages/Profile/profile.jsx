import React, { useState, useEffect } from 'react'
import "./profile.css";
import Topbar from "../../components/TopBar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import axios from 'axios';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [users, setUsers] = useState({});

    useEffect(()=>{
        async function fetchUsers(){
          const response = await axios.get("posts/timeline/650462c89518349b76740a9b");
          setUsers(response.data);
        }
        fetchUsers();
      },[]);
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />

            <div className='profileRight'>
                <div className='profileRightTop'>
                    <div className='profileCover'>
                    <img 
                    className='profileCoverImg'
                    src= {`${PF}/postImg/3.jpeg`} alt="" />
                    <img 
                    className='profileUserImg'
                    src= {`${PF}/persons/1.jpeg`} alt="" />
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>{users.username}</h4>
                        <span className='profileInfoDesc'>{users.desc}</span>
                    </div>
                    
                </div>
                <div className='profileRightBottom'>
                <Feed username="Archisman" />
                <Rightbar profile />
                </div>
            </div>
            
        </div>
       </>
  )
}
