import React from 'react'

export type QiitaPostItem = {
  node: {
    id: string
    title: string
    url: string
  }
}

type Props = {
  postItems: QiitaPostItem[]
  userName: string
}

const QiitaItems: React.FC<Props> = ({ postItems, userName }) => {
  const items = postItems.map((postItem) => {
    const { id, title, url } = postItem.node
    return (
      <li key={id}>
        <a href={url}>{title}</a>
      </li>
    )
  })

  return (
    <section id="qiita">
      <h2>Qiita</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={`https://qiita.com/${userName}`} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

export default QiitaItems
