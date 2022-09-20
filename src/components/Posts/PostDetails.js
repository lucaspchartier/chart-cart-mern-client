import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const { post } = props.post;
        if (post) {
            return (
                <div>
                    <h2>{post.text}</h2>
                    <h2>{post.comment.text}</h2>
                </div>
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