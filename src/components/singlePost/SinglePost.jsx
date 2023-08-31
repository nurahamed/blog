import React from 'react'
import "./singlePost.css"
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://petapixel.com/assets/uploads/2022/08/fdfs19.jpg" alt="postImg" className="singlePostImg" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Nur Ahamed</b></span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid magnam explicabo repudiandae expedita praesentium quisquam officiis consectetur facere dolores illum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A magnam, ullam repellendus excepturi odit optio hic ducimus quam, similique at itaque harum molestiae provident repellat, veritatis dolorum quaerat totam nam cumque dolores. Vitae deleniti odio, repellat voluptatum reprehenderit doloremque eaque, temporibus nam distinctio provident at ad, illo assumenda laborum minima!
        </p>
      </div>
    </div>
  )
}
