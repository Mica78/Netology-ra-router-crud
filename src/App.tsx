import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'
import './App.css'
import Payload from './components/pages/Payload'
import { Posts } from './components/pages/Posts'
import { postsLoader } from './loaders/postsLoader'
import { CreatePost } from './components/pages/CreatePost'
import ErrorB from './components/pages/ErrorB'
import { postAction } from './loaders/postAction.ts'
import { Post } from './components/pages/Post'
import { postLoader } from './loaders/postLoader'
import {EditPost} from "./components/pages/EditPost.tsx";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Payload />}>
      <Route path='/' element={<Posts />} loader={postsLoader} />
      <Route path="/posts/new" element={<CreatePost />} action={postAction} errorElement={<ErrorB />} />
      <Route path="/posts/:id" element={<Post />} loader={postLoader} />
      <Route path="/posts/:id/edit" element={<EditPost />} action={postAction} loader={postLoader} errorElement={<ErrorB />}  />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
