import React from 'react';

export default function SelectedImage({ image, onNextImage, onPrevImage }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <button onClick={onPrevImage}>&lt;</button>
      <div style={{ margin: '0 10px' }}>
        <img
          src={image.download_url}
          alt={image.author}
          style={{ width: '400px', height: '400px', objectFit: 'cover' }}
        />
        <p>{image.author}</p>
      </div>
      <button onClick={onNextImage}>&gt;</button>
    </div>
  );
}
