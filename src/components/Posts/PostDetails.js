import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

import CommentList from "../Comments/CommentList";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const { post } = props.data;
        if (post) {
            return post.comments.map(comment => <ul key={comment.id}>{comment.text}</ul>);
        } else {
            return <div>No post selected...</div>
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
                id: props.selectedPost
            }
        }
    }
})(PostDetails);