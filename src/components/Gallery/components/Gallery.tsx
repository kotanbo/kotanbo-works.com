import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

type Props = {
  images?: typeof DEFAULT_IMAGES
}

const Gallery: React.FC<Props> = ({ images = DEFAULT_IMAGES }) => {
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
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                caption={obj.caption}
                description={obj.description}
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
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = `Gallery`

export default Gallery
