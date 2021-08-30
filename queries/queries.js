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

export { getPostsQuery, getCommentsQuery };