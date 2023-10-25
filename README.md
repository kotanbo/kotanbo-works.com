# kotanbo-works.com

## :arrow_forward: Usage

### Develop the site locally

Add the `GH_API_TOKEN` and `QIITA_API_TOKEN` to `.env`.

```
GH_API_TOKEN="xxxxxxxxxx"
QIITA_API_TOKEN="xxxxxxxxxx"
```

```bash
$ yarn install
$ yarn develop
```

Open at `http://localhost:3000` in the browser.

## :rocket: Deploy

### Deploy to GitHub Pages using GitHub Actions

Add secrets to repository settings.

- **GH_API_TOKEN**
  - Use for fetch repository data from GitHub.
  - Scope: `public_repo`
- **QIITA_API_TOKEN**
  - Use for fetch article data from Qiita.
  - Scope: `read_qiita`

Create the workflow file like `gh-pages.yml` and add it to `.github/workflows`.
Push your changes to the master branch and start the build for deploy to GitHub Pages.
