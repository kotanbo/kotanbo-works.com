import repositoryFragment from '../fragments/repository';

export const getRepositoriesQuery = /* GraphQL */ `
  query getRepositories {
    viewer {
      login
      repositories(first: 100, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          ...repository
        }
      }
    }
  }
  ${repositoryFragment}
`;
