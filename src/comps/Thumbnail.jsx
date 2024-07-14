import React from 'react';

export default function Thumbnail({ image, isSelected, onClick }) {
  return (
    <img
      src={image.download_url}
      alt={image.author}
      style={{
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        border: isSelected ? '2px solid red' : 'none',
        filter: isSelected ? 'none' : 'blur(2px)',
        transition: 'filter 0.3s'
      }}
      onClick={onClick}
    />
  );
}
