import React, { useEffect, useState } from 'react'
import "./singlePost.css"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPosts] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPosts(res.data)
    };
    getPost()
  }, [path])
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={post.photo}
            alt="postImg"
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>

          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div >
  )
}
