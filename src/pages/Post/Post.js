import styles from "./Post.module.css"

//hooks
import {useParams} from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument";


const Post = () => {
    const { id } = useParams();
    const {document: post, loading} = useFetchDocument("posts", id)

  return (
    <div>
        {loading && <p>Carregando Post...</p>}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt="" />
                <p>{post.body}</p>
                <h3>este post trata sobre: </h3>
                {post.tagArray.map((tag) => (
                  <p key={tag}>
                    <span>#</span>
                    {tag}
                  </p>
                ))}
            </>
        )}
    </div>
  )
}

export default Post