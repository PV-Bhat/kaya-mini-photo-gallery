# Kaya & Mini Photo Gallery

An Instagram-like photo gallery app for Kaya and Mini, two black cats. This app allows users to scroll through photos, like and comment on them, and learn about the cats' personalities.

![Kaya & Mini Gallery](https://github.com/PV-Bhat/kaya-mini-photo-gallery/blob/main/screenshots/app-preview.png)

## Features

- **Photo Feed:** Scrollable interface to view cat photos
- **Interactive Elements:** Like photos and add comments
- **Expanded View:** Click photos to see them in full-screen modal view
- **Responsive Design:** Works on both desktop and mobile
- **Double-tap to Like:** Instagram-like interaction
- **About Section:** Learn about Kaya and Mini's personalities
- **Simple Sharing:** Share photos with friends

## About Kaya & Mini

This app features two black cats with distinct personalities:

### Kaya
- **Traits:** Adventurous, Lazy, Fat
- Kaya is a confident, loyal black cat who enjoys exploring at her own pace. As a typical black cat, she's intelligent and aware of her surroundings, but prefers to conserve energy whenever possible.

### Mini
- **Traits:** Shy, Playful, Scrawny
- Mini is an intelligent and spirited black cat who balances her natural shyness with bursts of playful energy. Though initially reserved around strangers, she becomes quite animated with those she trusts.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/PV-Bhat/kaya-mini-photo-gallery.git
   ```

2. Navigate to the project directory:
   ```
   cd kaya-mini-photo-gallery
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Copy your cat images to the public/images directory:
   - From: `C:\Users\MAMATHA\Downloads\Catimages\`
   - To: `public/images/`
   
   Make sure the image paths in `src/data/index.js` match your file names.

5. Start the development server:
   ```
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- **View Photos:** Scroll through the feed to see photos of Kaya and Mini
- **Like Photos:** Click the heart icon or double-tap a photo to like it
- **Comment:** Add comments using the comment form below each photo
- **View Full Screen:** Click on a photo to view it in a larger modal
- **About Section:** Click the "About" button in the header to learn about Kaya and Mini

## Tech Stack

- **React.js** - Frontend library for building the user interface
- **CSS** - Styling and animations
- **JavaScript** - Interactivity and state management

## Future Enhancements

- User authentication
- Ability to upload new photos
- Instagram-like filters for photos
- Stories feature
- Direct messaging
- Cloud storage for images

## Created By

This app was created as an MVP following your specifications for an Instagram-like interface for Kaya and Mini. Enjoy your cat photo gallery!

## License

This project is licensed under the MIT License.
