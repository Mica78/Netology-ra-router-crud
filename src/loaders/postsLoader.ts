import { defer } from "react-router-dom";
import IPost from "../models/Post.interface";

const fetchPosts = async (): Promise<IPost[]> => {
  const data = await fetch(import.meta.env.VITE_API_URL);
  const posts = await data.json();
  return posts
}

const postsLoader= async () => {
  return defer({
    posts: fetchPosts()
  })

}

export { postsLoader }
