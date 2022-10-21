import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

import CommentList from "../Comments/CommentList";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const { post } = props.data;
        
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