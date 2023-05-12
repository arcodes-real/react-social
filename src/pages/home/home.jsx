import React from "react";
import "./home.css";
import Topbar from "../../components/TopBar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

function Home(){
    return(
       <>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
       </>
    );
}

export default Home;