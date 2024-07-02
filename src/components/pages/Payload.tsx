import { Link, Outlet } from 'react-router-dom'

const Payload = () => {
  return (
    <div className='container'>
      <div className='create-post__container'>
        <Link className="create-post__link" to="posts/new">Create new post</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Payload
