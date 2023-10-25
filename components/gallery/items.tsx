'use client';

import Image from 'next/image';
import { MouseEvent, useCallback, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

export function GalleryItems({ images }: { images: { src: string; alt: string }[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselDialog = useRef<HTMLDialogElement>(null);

  const onClickImage = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const index = parseInt(e.currentTarget.dataset.index ?? '0');
    setSelectedIndex(index);
    carouselDialog.current?.showModal();
  }, []);
  const onClickCloseCarouselDialog = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    carouselDialog.current?.close();
  };

  return (
    <>
      <div className="row">
        {images.map((image, index) => {
          return (
            <article key={index} className="6u 12u$(xsmall) work-item">
              <a
                className="image fit thumb"
                href={image.src}
                data-index={index}
                onClick={onClickImage}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={350}
                  style={{ maxWidth: 350, height: 'auto' }}
                  loading="lazy"
                />
              </a>
            </article>
          );
        })}
      </div>
      <dialog
        ref={carouselDialog}
        style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(40, 57, 65, 0.8)' }}
      >
        <span
          onClick={onClickCloseCarouselDialog}
          style={{ display: 'flex', justifyContent: 'end', marginBottom: 20, cursor: 'pointer' }}
        >
          <i className="fa fa-times fa-lg"></i>
        </span>
        <Carousel
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
          selectedItem={selectedIndex}
        >
          {images.map((image, index) => {
            return (
              <div key={index} style={{ position: 'relative', width: '100%', height: '80vh' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
            );
          })}
        </Carousel>
      </dialog>
    </>
  );
}
