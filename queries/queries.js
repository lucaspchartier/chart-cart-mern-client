import { gql } from "apollo-boost";

const getPostsQuery = gql`
    {
        posts {
            id
            text
        }
    }
`