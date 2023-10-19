import { SITE_OWNER } from 'constants/site';
import { getRepositories } from 'lib/github';

export async function GithubItems() {
  const repositories = await getRepositories();
  if (repositories.length === 0) {
    return null;
  }

  const items = repositories.map((repository) => {
    const { id, name, description, url } = repository;
    return (
      <li key={id}>
        <a href={url}>{name}</a>
        <br />
        <span>{description}</span>
      </li>
    );
  });

  return (
    <section id="github">
      <h2>GitHub</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={SITE_OWNER.githubUrl} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  );
}
