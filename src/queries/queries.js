import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;


const addAuthor = gql 
`mutation AddAuthor{
    addAuthor{
        name
        id
    }
}`


const getUserQuery = gql`
    query GetUser($email: String!){
        user(email: $email) {
            id
            name
            pic
            bio
            email
            website
            location
            college
            count
        }
    }
`;

const updateUser = gql`
    mutation UpdateUser($id: String,$name: String,$website: String,$college: String,$location: String,$bio: String ){
        updateUser(id:$id,name: $name, website:$website,college:$college,location:$location,bio:$bio){
            id
            name
            pic
            bio
            email
            website
            location
            college
            count
        }
    }
`;







export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery,addAuthor,getUserQuery,updateUser };