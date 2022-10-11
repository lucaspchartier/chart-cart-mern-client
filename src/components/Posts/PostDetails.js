import { graphql } from "react-apollo";
import { getPostQuery } from "../../queries/queries";

export const PostDetails = props => {
    const displayPostDetails = () => {
        const postComments = props.comments;
        if (props.data) {
            return (
                <div>{postComments.map(comment => {
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