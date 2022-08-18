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

const getPostQuery = gql`
    query($id: ID) {
        post(id: $id) {
            id
            text
            comments {
                id
                text
            }
        }
    }
`

const getCommentQuery = gql`
    query($id: ID) {
        comment(id: $id) {
            id
            text
            post {
                id
                text
                comments {
                    id
                    text
                }
            }
        }
    }
`

const addPostMutation = gql`
    mutation($text: String!) {
        addPost(text: $text) {
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

const deletePosttMutation = gql`
    mutation($id: ID!) {
        deletePost(id: $id) {
            id
            text
            comments {
                id
                text
            }
        }
    }
`

export { getPostsQuery, getCommentsQuery, getPostQuery, getCommentQuery, addPostMutation, addCommentMutation };