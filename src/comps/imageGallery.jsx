import React from 'react';
import Thumbnail from './Thumbnail';
import SelectedImage from './SelectedImage';

export default function ImageGallery({ images, selectedImageIndex, onImageSelect, onNextImage, onPrevImage }) {
  return (
    <div>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {images.map((image, index) => (
          <Thumbnail
            key={image.id}
            image={image}
            isSelected={selectedImageIndex === index}
            onClick={() => onImageSelect(index)}
          />
        ))}
      </div>
      <SelectedImage
        image={images[selectedImageIndex]}
        onNextImage={onNextImage}
        onPrevImage={onPrevImage}
      />
    </div>
  );
}
