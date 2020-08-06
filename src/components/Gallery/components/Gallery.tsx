import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import GalleryItem from './GalleryItem'

type Site = {
  site: {
    siteMetadata: {
      gallery: {
        directory_name: string
      }
    }
  }
}
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
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  const data = useStaticQuery<Site & Images>(graphql`
    query {
      site {
        siteMetadata {
          gallery {
            directory_name
          }
        }
      }
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

  const images = data.images.edges.filter((edge) =>
    edge.node.relativePath.includes(data.site.siteMetadata.gallery.directory_name)
  )
  const views = images.map((obj) => {
    return { caption: ``, source: obj.node.publicURL }
  })

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
