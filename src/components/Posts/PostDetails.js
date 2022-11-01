import { useState } from "react";
import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

import AddComment from "../Comments/AddComment";

export const PostDetails = props => {  
    const [postId, setPostId] = useState(null);
    
    const { post } = props.data;
    const displayPostDetails = () => {
        if (!post) {
            return <h6>No post selected...</h6>
        } else {
            return post.comments.map(comment => <ul key={comment.id}>{comment.text}</ul>);
        }
    }

    return (
        <div id="post-detail">
            {displayPostDetails()}
            <AddComment postId={postId}/>
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