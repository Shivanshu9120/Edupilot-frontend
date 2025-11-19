import { gql } from '@apollo/client';

export const GET_FAQS = gql`
  query GetFaqs {
    faqs {
      documentId
      Question
      Answer
      Sequence
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      documentId
      username
      email
      confirmed
      blocked
      account {
        data {
          documentId
          grade
          subjects
          learningGoals
          experience
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($documentId: ID!) {
    usersPermissionsUser(documentId: $documentId) {
      documentId
      email
      is_onboarded
    }
  }
`;

export const GET_ROLES = gql`
  query GetRoles {
    usersPermissionsRoles {
      id
      documentId
      name
      description
      type
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const GET_ACCOUNT = gql`
  query GetAccount($documentId: ID!) {
    account(documentId: $documentId) {
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

export const GET_ACCOUNT_BY_USER = gql`
  query GetAccountByUser($documentId: ID!) {
    accounts(filters: { users_permissions_user: { documentId: { eq: $documentId } } }) {
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

