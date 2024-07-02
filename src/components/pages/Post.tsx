import {Link, useLoaderData} from 'react-router-dom'
import IPost from '../../models/Post.interface'

const Post = () => {

  const post = useLoaderData() as { post: IPost };
  const {title, content, id} = post.post as IPost

  const handleClick = async () => {
    const data = await fetch(import.meta.env.VITE_API_URL + '/' + id, {
      method: 'DELETE'
    })
    if(!data.ok) {
      throw new Error('Failed to delete post')
    }
    window.open('/', '_self')
  }

  return (
    <div className="post">
      <h1>{title}</h1>
      <div>{content}</div>
      <button className="edit-btn" >
        {<Link className="edit-link" to={'/posts/' + id + '/edit'}> Edit</Link>}
      </button>
      <button className="delete-btn" onClick={handleClick}>Delete</button>
    </div>
  )
}

export {Post}
