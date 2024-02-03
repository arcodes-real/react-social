import React from 'react'
import "./share.css";
import { FaPhotoVideo, FaTag, FaMapMarkerAlt, FaGrin } from 'react-icons/fa';


export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className='shareProfileImg' src="/assets/persons/1.jpeg" alt=""></img>
                <textarea placeholder="What's in your mind Safak?" className='shareInput'></textarea>
            </div>
            <hr className='shareHr' />
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption' >
                        <FaPhotoVideo className='shareIcon' style={{fill:'tomato'}} />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>

                    <div className='shareOption'  >
                        <FaTag className='shareIcon' style={{fill:'blue'}} />
                        <span className='shareOptionText' >Tags</span>
                    </div>

                    <div className='shareOption'  >
                        <FaMapMarkerAlt className='shareIcon' style={{fill:'green'}} />
                        <span className='shareOptionText' >Location</span>
                    </div>

                    <div className='shareOption'  >
                        <FaGrin className='shareIcon' style={{fill:'Orange'}} />
                        <span className='shareOptionText' >Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
      
    </div>
  );
} 
