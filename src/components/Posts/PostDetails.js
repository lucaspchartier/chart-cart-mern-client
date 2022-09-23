import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const postId = props.id;
        const postText = props.text;
        const postComments = props.comments;
        if (post) {
            return (
                <div>{post.comments.map(comment => {
                        return <ul key={comment.id}>{comment.text}</ul>
                })}</div>
            )
        } else {
            <div>No post selected.</div>
        }
    }

    return (
        <div id="post-detail">
            {displayPostDetails()}
        </div>
    );
}

export default graphql(getPostQuery, {
    options: props => {
        return {
            variables: {
                id: props.id
            }
        }
    }
})(PostDetails);