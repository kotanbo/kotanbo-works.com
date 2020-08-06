import React, { useCallback } from 'react'
import Img, { FluidObject } from 'gatsby-image'

type Props = {
  id: string
  source: string
  thumbnail: string | FluidObject
  caption: string
  description: string
  position: string
  toggleLightbox: (position: string) => void
}

const GalleryItem: React.FC<Props> = ({ id, source, thumbnail, caption, description, position, toggleLightbox }) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        {typeof thumbnail === `string` ? <img src={thumbnail} /> : <Img fluid={thumbnail} />}
      </a>

      <h3>{caption}</h3>
      <p>{description}</p>
    </article>
  )
}

GalleryItem.displayName = `GalleryItem`

export default GalleryItem
