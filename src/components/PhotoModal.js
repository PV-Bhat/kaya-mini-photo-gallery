import React from 'react';

function PhotoModal({ photo, onClose, onLike }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = () => {
    // In a real app, this would integrate with the Web Share API
    // For this MVP, we'll just show an alert
    alert(`Sharing ${photo.catName}'s photo: ${photo.caption}`);
  };

  return (
    <div className="photo-modal-backdrop" onClick={handleClick}>
      <div className="photo-modal-content">
        <img 
          src={photo.imagePath} 
          alt={photo.caption} 
          className="photo-modal-image" 
        />
        <div className="photo-actions" style={{ padding: '12px' }}>
          <button onClick={onLike}>❤️</button>
          <button onClick={handleShare}>📤</button>
        </div>
        <div className="photo-caption" style={{ padding: '0 12px 12px', color: 'black' }}>
          <strong>{photo.catName}</strong> {photo.caption}
        </div>
      </div>
      <button className="photo-modal-close" onClick={onClose}>×</button>
    </div>
  );
}

export default PhotoModal;