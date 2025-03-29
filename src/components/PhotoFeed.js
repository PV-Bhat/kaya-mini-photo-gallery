import React, { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';

function PhotoFeed({ photos, onLike, onComment }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-feed">
      {photos.map(photo => (
        <PhotoCard 
          key={photo.id} 
          photo={photo} 
          onPhotoClick={() => openPhotoModal(photo)}
          onLike={onLike}
          onComment={onComment}
        />
      ))}

      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={closePhotoModal} 
          onLike={() => onLike(selectedPhoto.id)}
        />
      )}
    </div>
  );
}

export default PhotoFeed;