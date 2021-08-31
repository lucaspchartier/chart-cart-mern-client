import { gql } from "apollo-boost";

const getPostsQuery = gql`
    {
        posts {
            id
            text
        }
    }
`

const getCommentsQuery = gql`
    {
        comments {
            id
            text
        }
    }
`

const addCommentMutation = gql`
    mutation($text: String!, $postId: ID!) {
        addComment(text: $text, postId: $postId) {
            id
            text
        }
    }
`

export { getPostsQuery, getCommentsQuery };