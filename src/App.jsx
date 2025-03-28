import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => (res.json()))
      .then((data) => (
        setPosts(data)
      ))
  }, [])

  return (
    <>
      {posts.map((post) => (
        <div key={`post-${post.slug}`}>
          <img src={`http://localhost:3000/imgs/${post.image}`} alt={post.title} />
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
