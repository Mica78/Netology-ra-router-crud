import {Form, Link, useLoaderData, useParams} from "react-router-dom";

const EditPost = () => {
  const params = useParams()

  const postData = useLoaderData() as { post: { title: string, content: string } };

  return (
    <div>
      <Link className="close" to="/">
        <i className="fa fa-times" aria-hidden="true"></i>
      </Link>
      <h1>EditPost</h1>
      <Form method="put" action={`/posts/${params.id}/edit`}>
        <label htmlFor="title">
          <input type="text" name="title" defaultValue={postData.post.title} />
        </label>
        <label htmlFor="content">
          <textarea name="content" defaultValue={postData.post.content} />
        </label>
        <input type="hidden" name="id" value={params.id}/>
        <button className="publish-btn" name="intent" value="edit" type="submit">Сохранить</button>
      </Form>
    </div>
  )
}

export { EditPost }