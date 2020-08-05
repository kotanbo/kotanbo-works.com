import React from 'react'

export type RepositoryItem = {
  node: {
    id: string
    url: string
    name: string
    description: string
  }
}

type Props = {
  repositoryItems: RepositoryItem[]
  userName: string
}

const GithubItems: React.FC<Props> = ({ repositoryItems, userName }) => {
  const items = repositoryItems.map((repositoryItem) => {
    const { id, url, name, description } = repositoryItem.node
    return (
      <li key={id}>
        <a href={url}>{name}</a>
        <br />
        <span>{description}</span>
      </li>
    )
  })

  return (
    <section id="github">
      <h2>GitHub</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={`https://github.com/${userName}`} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

export default GithubItems
