import React from 'react';
import path from 'path';
import fs from 'fs';
import { GalleryItems } from './items';

export function Gallery() {
  const nomadDirectory = path.join(process.cwd(), 'public', 'images', 'nomad');
  const files = fs.readdirSync(nomadDirectory);
  const images = files.map((file: string) => {
    return { src: path.join('images', 'nomad', file), alt: '' };
  });

  return <div>{images && <GalleryItems images={images} />}</div>;
}
