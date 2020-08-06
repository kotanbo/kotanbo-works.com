# kotanbo-works.com

## :arrow_forward: Usage

### Create a new site
```
$ npm install -g gatsby-cli
$ gatsby new kotanbo-works https://github.com/kotanbo/kotanbo-works.com
```

### Develop the site locally
Add the `GH_API_TOKEN` and `QIITA_API_TOKEN` to `.env`.

```
GH_API_TOKEN = xxxxxxxxxx
QIITA_API_TOKEN = xxxxxxxxxx
```

```bash
$ yarn install
$ yarn develop
```

Open at `http://localhost:8000` in the browser.

## :rocket: Deploy

### Deploy to GitHub Pages using GitHub Actions

Add the `pathPrefix` to `gatsby-config.js`.

```js
module.exports = {
  pathPrefix: `/repo-name`,
}
```

Update the build script to `package.json`.

```diff
-"build": "gatsby build",
+"build": "gatsby build --prefix-paths",
```

Add secrets to repository settings.

- **GT_API_TOKEN**
  - Use for fetch repository data from GitHub.
  - Scope: `public_repo`
- **QIITA_API_TOKEN**
  - Use for fetch article data from Qiita.
  - Scope: `read_qiita`

Create the workflow file like `gh-pages.yml` and add it to `.github/workflows`. 
Push your changes to the master branch and start the build for deploy to GitHub Pages.

## :memo: Licence
MIT
