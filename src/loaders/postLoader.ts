
import IPost from "../models/Post.interface";
import {LoaderFunction} from "react-router-dom";

const fetchPost = async (id: number): Promise<IPost> => {
  const data = await fetch(import.meta.env.VITE_API_URL + '/' + id);

  if (!data.ok) {
    throw new Error('Failed to fetch post')
  }

  return await data.json()
}

const postLoader: LoaderFunction<IPost> = async ({ params }) => {

  return fetchPost(Number(params.id))

}

export { postLoader }
