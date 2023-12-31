import axios from "axios";
import "./sidebar.css";

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCat] =  useState([]);

  useEffect(()=>{
 const getCats = async () =>{
  const res = await axios.get("/categories");
  // console.log("iam from cat",res)
  setCat(res.data)
 }
 getCats()
  },[])
  return (
    <div className='sidebar'>
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg"
        alt="about img"
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarlist">
          {cats.map(c=>(
            <Link key={c.name} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>

          ))}

         
            {/* <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li> */}
        </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOWERS</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
     
        </div>
    </div>

  </div>
  )
}
