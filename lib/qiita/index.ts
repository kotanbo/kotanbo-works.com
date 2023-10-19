import { QIITA_API_BASE_URL } from 'lib/constants';
import { Item } from './types';

const key = process.env.QIITA_API_TOKEN!;

type QueryParams = {
  [key: string]: string | number;
};

function appendQueryParams(url: string, queryParams: QueryParams): string {
  const queryString = Object.keys(queryParams)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key].toString())}`)
    .join('&');

  if (queryString) {
    return url.includes('?') ? `${url}&${queryString}` : `${url}?${queryString}`;
  }

  return url;
}

export async function qiitaFetch<T>({
  endpoint,
  queryParams
}: {
  method?: string;
  endpoint: string;
  queryParams?: QueryParams;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(queryParams ? appendQueryParams(endpoint, queryParams) : endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`
      }
    });

    const body = await result.json();
    if (body.message) {
      throw Error(body.message);
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      error: e
    };
  }
}

export async function getPosts(): Promise<Item[]> {
  const endpoint = `${QIITA_API_BASE_URL}authenticated_user/items`;
  const res = await qiitaFetch<Item[]>({
    endpoint,
    queryParams: {
      page: 1,
      per_page: 100
    }
  });

  return res.body;
}
