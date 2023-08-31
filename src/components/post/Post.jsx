import React from 'react'
import "./post.css"
export default function Post() {
  return (
    <div className='post'>
       <img 
       className='postImg'
       src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1520x800.webp" alt="" />
       <div className="postInfo">
        <div className="postCatas">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
       </div>
       <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor itaque amet numquam minus, ea perferendis sit maiores similique deleniti.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor itaque amet numquam minus, ea perferendis sit maiores similique deleniti.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor itaque amet numquam minus, ea perferendis sit maiores similique deleniti.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor itaque amet numquam minus, ea perferendis sit maiores similique deleniti.
       </p>
    </div>
 
  )
}
