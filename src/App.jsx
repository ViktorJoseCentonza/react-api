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
        key === "content" ? null : index === 0 ?

          <td key={`col-${index}`}>
            <button onClick={() => deleteHandler(post.slug)}>X</button>
            <span>{post[key]}</span>
          </td>
          :
          <td key={`col-${index}`}>
            <span>{post[key]}</span>
          </td>
      )))
  }

  function deleteHandler(post_slug) {
    fetch(`http://localhost:3000/posts/${post_slug}`, {
      method: 'DELETE'
    })

    const newPosts = [...posts]
    const finalNewPosts = newPosts.filter((post) => post.slug !== post_slug)
    // console.log(`slug is ${post_slug}`)

    // console.log(`posts is`)
    // console.log(newPosts)
    // console.log(`filtered posts without the deleted element is `)
    // console.log(finalNewPosts)
    setPosts(finalNewPosts)
  }

  return (
    <table>
      <tbody>
        {
          posts.map((post, index) => (
            <tr key={`row-${index}`}>
              {colHandler(post)}
            </tr>
          ))
        }
      </tbody>
    </table>
  )

}
export default App
