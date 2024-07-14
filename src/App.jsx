import React, { useEffect, useState } from 'react';
import ImageGallery from './comps/imageGallery';

export default function App() {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images', error));
  }, []);

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {images.length > 0 ? (
        <ImageGallery
          images={images}
          selectedImageIndex={selectedImageIndex}
          onImageSelect={handleImageSelect}
          onNextImage={handleNextImage}
          onPrevImage={handlePrevImage}
        />
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
