import { redirect } from "react-router-dom";
import IPost from "../models/Post.interface";

const createPost = async({id, title, content}: IPost) => {

  return await fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id, title, content}),
  })
}

const editPost = async({id, title, content}: IPost) => {

  return await fetch(import.meta.env.VITE_API_URL + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id, title, content}),

  })

}

const postAction = async({request}: {request: Request}) => {

  const formData = await request.formData();
  const title = formData.get('title')
  const content = formData.get('content')
  const id = Number(formData.get('id'))

  if (!title || !content) {
    throw new Error('Title or content cannot be empty')
  }

  const newPost: IPost = {
    id: id,
    title: formData.get('title') as string,
    content: formData.get('content') as string
  }

  const res = id ? await editPost(newPost) : await createPost(newPost)

  if (!res.ok) {
    throw new Error('Failed to create post')
  }

  return redirect(`/`)

}

export { postAction }
