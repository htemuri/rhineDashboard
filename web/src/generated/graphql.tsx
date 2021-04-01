import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ClientSignUpInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerTrainer: UserResponse;
  registerClient: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationRegisterTrainerArgs = {
  options: TrainerSignUpInput;
};


export type MutationRegisterClientArgs = {
  options: ClientSignUpInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  users: Array<User>;
};

export type TrainerSignUpInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  cert_id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  age: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  isClient: Scalars['Boolean'];
  cert_id: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterClientMutationVariables = Exact<{
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterClientMutation = (
  { __typename?: 'Mutation' }
  & { registerClient: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type RegisterTrainerMutationVariables = Exact<{
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  cert_id: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterTrainerMutation = (
  { __typename?: 'Mutation' }
  & { registerTrainer: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'first_name'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterClientDocument = gql`
    mutation RegisterClient($email: String!, $first_name: String!, $last_name: String!, $password: String!) {
  registerClient(
    options: {email: $email, first_name: $first_name, last_name: $last_name, password: $password}
  ) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;

export function useRegisterClientMutation() {
  return Urql.useMutation<RegisterClientMutation, RegisterClientMutationVariables>(RegisterClientDocument);
};
export const RegisterTrainerDocument = gql`
    mutation RegisterTrainer($email: String!, $first_name: String!, $last_name: String!, $cert_id: String!, $password: String!) {
  registerTrainer(
    options: {email: $email, first_name: $first_name, last_name: $last_name, cert_id: $cert_id, password: $password}
  ) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;

export function useRegisterTrainerMutation() {
  return Urql.useMutation<RegisterTrainerMutation, RegisterTrainerMutationVariables>(RegisterTrainerDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    first_name
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};