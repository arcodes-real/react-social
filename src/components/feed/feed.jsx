
import "./feed.css";
import Share from "../Share/share";
import Post from "../Post/post";
// import {Posts} from "../../dummyData";  
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed({username}) {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response = username? await axios.get(`/posts/profile/${username}`)
                               : await axios.get("posts/timeline/650462c89518349b76740a9b"); 
                              //console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post ={p}/>
        ))}
        
        
        
      </div>
    </div>
  );
}
