import React from 'react';

function Header({ currentView, setCurrentView }) {
  return (
    <header className="header">
      <h1>Kaya & Mini</h1>
      <nav className="header-nav">
        <button 
          className={currentView === 'feed' ? 'active' : ''} 
          onClick={() => setCurrentView('feed')}
        >
          Feed
        </button>
        <button 
          className={currentView === 'about' ? 'active' : ''} 
          onClick={() => setCurrentView('about')}
        >
          About
        </button>
      </nav>
    </header>
  );
}

export default Header;