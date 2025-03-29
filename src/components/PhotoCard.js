import React, { useState } from 'react';

function PhotoCard({ photo, onPhotoClick, onLike, onComment }) {
  const [commentText, setCommentText] = useState('');

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLike(photo.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(photo.id, {
        id: Date.now(),
        text: commentText,
        username: 'user',
      });
      setCommentText('');
    }
  };

  // Double-tap to like
  const [lastTap, setLastTap] = useState(0);
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      // Double tap detected
      onLike(photo.id);
    }
    setLastTap(now);
  };

  return (
    <div className="photo-card">
      <div className="photo-card-header">
        <h3>{photo.catName}</h3>
      </div>
      
      <img 
        src={photo.imagePath} 
        alt={photo.caption} 
        className="photo-image"
        onClick={() => {
          handleDoubleTap();
          onPhotoClick();
        }}
      />
      
      <div className="photo-actions">
        <button onClick={handleLikeClick}>❤️</button>
      </div>
      
      <div className="photo-likes">
        {photo.likes} {photo.likes === 1 ? 'like' : 'likes'}
      </div>
      
      <div className="photo-caption">
        <strong>{photo.catName}</strong> {photo.caption}
      </div>
      
      {photo.comments.length > 0 && (
        <div className="photo-comments">
          {photo.comments.map(comment => (
            <div key={comment.id} className="photo-comment">
              <strong>{comment.username}</strong> {comment.text}
            </div>
          ))}
        </div>
      )}
      
      <form className="photo-comment-form" onSubmit={handleCommentSubmit}>
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PhotoCard;