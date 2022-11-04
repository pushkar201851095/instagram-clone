
import "./App.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import {db} from './firebase';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{

      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })   
  },[])

  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.91-cdn.com/hub/wp-content/uploads/2019/02/Instagram-Featured.jpg"
          alt=""
        />
      </div>
      {
        posts.map(({id, post})=>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        )) 
      }
    </div>
  );
}

export default App;
