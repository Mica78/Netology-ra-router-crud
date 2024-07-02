import { Form,  Link } from "react-router-dom"

function NewPost() {
  return (
    <div className="create-post">
      <Link className="close" to="/">
        <i className="fa fa-times" aria-hidden="true"></i>
      </Link>
      <h1>Create Post</h1>
      <Form method="post" action={"/posts/new"}>
        <label htmlFor="title">
          <input type="text" name="title"/>
        </label>
        <label htmlFor="content">
          <textarea  name="content"/>
        </label>
        <input type="hidden" name="id" value='0' />
        <button className="publish-btn" name="intent" value="new" type="submit">Опубликовать</button>
      </Form>
    </div>
  )
}

export {NewPost}
