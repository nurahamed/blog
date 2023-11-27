import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.title} post={p}/>
        ))}
      
      {/* <Post img="https://m.media-amazon.com/images/I/413iAjIqeIL._SX300_SY300_QL70_FMwebp_.jpg" />

      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
      
    </div>
  );
}