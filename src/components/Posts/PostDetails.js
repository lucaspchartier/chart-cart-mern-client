import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

import AddComment from "../Comments/AddComment";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const { post } = props.data;
        if (post) {
            return post.comments.map(comment => {
                console.log(comment);
            return <ul key={comment.id}>{comment.text}</ul>
        });
        } else {
            return <h6>No post selected...</h6>
        }
    }

    return (
        <div id="post-detail">
            {displayPostDetails()}
            <AddComment/>
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