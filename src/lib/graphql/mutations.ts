import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUsersPermissionsUser($data: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $data) {
      data {
        documentId
        username
        email
        confirmed
        blocked
        role {
          documentId
          name
          type
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($data: AccountInput!) {
    createAccount(data: $data) {
      documentId
      Profile_photo {
        documentId
        url
      }
      Firstname
      Lastname
      DOB
      Bio
      Gender
      Address
      Grade
      Domain
      Stream
      Branch
      Mobile_No
      users_permissions_user {
        documentId
        username
        email
      }
      createdAt
      updatedAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        documentId
        username
        email
        confirmed
        blocked
        role {
          id
          name
          type
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $data) {
      data {
        documentId
        username
        email
        is_onboarded
      }
    }
  }
`;

export const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount($documentId: ID!, $data: AccountInput!) {
    updateAccount(documentId: $documentId, data: $data) {
      documentId
      Profile_photo {
        documentId
        url
      }
      Firstname
      Lastname
      DOB
      Bio
      Gender
      Address
      Grade
      Domain
      Stream
      Branch
      Mobile_No
      users_permissions_user {
        documentId
        username
        email
      }
      createdAt
      updatedAt
    }
  }
`;

