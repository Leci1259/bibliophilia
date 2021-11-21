import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me{
        _id: ID
        username: String!
        password: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
  }
`;