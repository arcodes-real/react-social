import React, { useEffect } from 'react'
import "./post.css";
import {Users} from "../../dummyData";
import { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import {Posts} from "../../dummyData";
import axios from 'axios';
// import {format} from 'timeago.js';
import { Link } from 'react-router-dom';

export default function Post({post}) {
  //for dynamicaly changing the likes

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  useEffect(()=>{
    async function fetchUsers(){
      const response = await axios.get(`users/${post.userId}`);
      setUsers(response.data);
    }
    fetchUsers();
  },[post.userId]);

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
          <Link to={`profile/${users.userName}`}>
          <img className='postProfileImg'
             src=  {users.profilePicture? PF+users.profilePicture : PF+"persons/noAvatar.png"}
             alt= "" />
          </Link>
            

            <span className='postUsername'>
            {users.userName}
            </span>

            {/* <span className='postDate'>{format(post.createdAt)}</span> */}
          </div>
          <div className='postTopright'>
            <FaEllipsisV />  
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.caption}</span>
          <img className='postImg' src= {PF+post.img} alt="" />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
          <img className='likeIcon' src= {`${PF}/postImg/heart.png`} onClick={likeHandler} alt =""></img>
            <img className='likeIcon' src= {`${PF}/postImg/like.png`} onClick={likeHandler} alt =""></img>
            <span className='postLikeCounter'>{like}</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
