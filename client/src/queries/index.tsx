import { gql } from 'apollo-boost';

export const SIGNIN_USER = gql`
  query($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const GET_USER_INFO = gql`
  query {
    userInfo {
      username
      email
      avatar
      job
      name
      lastname
      phone
    }
  }
`;
