import { Suspense } from 'react'
import { Await, Link, useLoaderData } from 'react-router-dom'
import IPost from '../../models/Post.interface';

const Posts = () => {

  const { posts } = useLoaderData() as { posts: IPost[] };

  return(
    <div className="posts">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={ posts }>{
          resolvedPosts => resolvedPosts
            .map(
              (post: IPost) =>
                <li key={post.id}>
                  <Link to={'posts/' + post.id}>
                    {post.title}
                  </Link>
                </li>)
        }
        </Await>
      </Suspense>
    </div>
  )
}

export { Posts }
