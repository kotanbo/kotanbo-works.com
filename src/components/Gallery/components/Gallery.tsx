import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { useSiteMetadata } from '../../../hooks'
import GalleryItem from './GalleryItem'

type Images = {
  images: {
    edges: {
      node: {
        publicURL: string
        relativePath: string
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }[]
  }
}

const Gallery: React.FC = () => {
  const siteMetadata = useSiteMetadata()
  const data = useStaticQuery<Images>(graphql`
    query {
      images: allFile {
        edges {
          node {
            publicURL
            relativePath
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.images.edges.filter((edge) => edge.node.relativePath.includes(siteMetadata.gallery.directoryName))
  const views = images.map((obj) => {
    return { caption: ``, source: obj.node.publicURL }
  })

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  return (
    <div>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <GalleryItem
                key={i.toString()}
                id={i.toString()}
                source={obj.node.publicURL}
                thumbnail={obj.node.childImageSharp.fluid}
                caption=""
                description=""
                position={i.toString()}
                toggleLightbox={toggleLightbox}
              />
            )
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={views} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = `Gallery`

export default Gallery
