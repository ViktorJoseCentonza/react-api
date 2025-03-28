import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => (res.json()))
      .then((data) => (
        setPosts(data)
      ))
  }, [])

  function colHandler(post) {

    return (
      Object.keys(post).map((key, index) => (
        key === "content" ? null :
          <td key={`col-${index}`}>
            <span>{post[key]}</span>
          </td>
      ))
    )
  }




  return (
    <table>
      {
        posts.map((post, index) => (
          <tr key={`row-${index}`}>
            {colHandler(post)}
          </tr>
        ))
      }
    </table>
  )

}
export default App
