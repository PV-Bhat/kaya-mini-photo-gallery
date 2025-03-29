import React, { useState } from 'react';
import PhotoModal from './PhotoModal';
import { photoData } from '../data';

function AboutSection({ cats }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const getCatPhotos = (photoIds) => {
    return photoIds.map(id => photoData.find(photo => photo.id === id));
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="about-section">
      {cats.map(cat => {
        const catPhotos = getCatPhotos(cat.photos);
        
        return (
          <div key={cat.name} className="cat-profile">
            <h2>{cat.name}</h2>
            
            <div className="cat-traits">
              {cat.traits.map(trait => (
                <span key={trait} className="cat-trait">{trait}</span>
              ))}
            </div>
            
            <p className="cat-description">{cat.description}</p>
            
            <div className="cat-photos">
              {catPhotos.map(photo => (
                <div 
                  key={photo.id}
                  className="cat-photo-thumbnail"
                  style={{ backgroundImage: `url(${photo.imagePath})` }}
                  onClick={() => openPhotoModal(photo)}
                />
              ))}
            </div>
          </div>
        );
      })}

      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={closePhotoModal} 
        />
      )}
    </div>
  );
}

export default AboutSection;