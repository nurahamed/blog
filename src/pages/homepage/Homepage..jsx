// import { useLocation } from "react-router";
// import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./homepage.css";
import axios from "axios"

export default function Homepage() {
  // const [post, setPost] = useState([]);
  // useEffect(()=>{
  //   const fetchPosts = async ()=>{
  //    const res = await axios.get("/posts")
  //    console.log(res)
  //   }
  //   fetchPosts()
  // },[])

//   const location = useLocation();
//   console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
}