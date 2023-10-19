import { GITHUB_GRAPHQL_API_ENDPOINT } from 'lib/constants';
import { GithubRepositoriesOperation, Repository } from './types';
import { getRepositoriesQuery } from './queries/repository';

const endpoint = `${GITHUB_GRAPHQL_API_ENDPOINT}`;
const key = process.env.GH_API_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function githubFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${key}`,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();
    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      error: e,
      query
    };
  }
}

export async function getRepositories(): Promise<Repository[]> {
  const res = await githubFetch<GithubRepositoriesOperation>({
    query: getRepositoriesQuery
  });

  return res.body.data.viewer.repositories.nodes;
}
