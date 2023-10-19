import { SITE_OWNER } from 'constants/site';
import { getPosts } from 'lib/qiita';

export async function QiitaItems() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return null;
  }

  const items = posts.map((post) => {
    const { id, title, url } = post;
    return (
      <li key={id}>
        <a href={url}>{title}</a>
      </li>
    );
  });

  return (
    <section id="qiita">
      <h2>Qiita</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={SITE_OWNER.qiitaUrl} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  );
}
