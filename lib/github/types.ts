export type Repository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
};

export type GithubRepositoriesOperation = {
  data: {
    viewer: {
      repositories: {
        nodes: Repository[];
      };
    };
  };
};
