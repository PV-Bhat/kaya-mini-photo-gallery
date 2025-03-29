// Sample data for the app

// Photo data - using the pictures we have
export const photoData = [
  {
    id: 1,
    catName: "Kaya",
    imagePath: "/images/black-cat-2257262.jpg",
    caption: "Lounging in my favorite spot, judging everyone silently.",
    likes: 15,
    comments: [
      { id: 1, username: "cat_lover", text: "Such a beautiful cat!" },
      { id: 2, username: "mini_fan", text: "Looking majestic as always, Kaya!" }
    ],
    timestamp: "2025-03-28T14:30:00Z"
  },
  {
    id: 2,
    catName: "Mini",
    imagePath: "/images/R.jpeg",
    caption: "Caught mid-play! Don't let my shyness fool you.",
    likes: 23,
    comments: [
      { id: 3, username: "black_cat_society", text: "Mini is so adorable!" }
    ],
    timestamp: "2025-03-29T09:15:00Z"
  },
  {
    id: 3,
    catName: "Kaya",
    imagePath: "/images/R (1).jpeg",
    caption: "Adventure time! Found a sunny spot for my afternoon nap.",
    likes: 19,
    comments: [],
    timestamp: "2025-03-29T16:45:00Z"
  }
];

// Cat profile data with personality traits based on research
export const catData = [
  {
    name: "Kaya",
    traits: ["Adventurous", "Lazy", "Fat"],
    description: "Kaya is a confident, loyal black cat who enjoys exploring at her own pace. As a typical black cat, she's intelligent and aware of her surroundings, but prefers to conserve energy whenever possible. Her favorite activities include finding new sunny spots for naps, judging humans from elevated perches, and occasionally embarking on kitchen adventures in search of treats. Despite her larger size, she moves with surprising grace when motivated by food or curiosity. Kaya embodies the ancient Egyptian reverence for black cats, carrying herself with a dignified, almost royal demeanor while maintaining a deep bond with her chosen human companions.",
    photos: [1, 3]
  },
  {
    name: "Mini",
    traits: ["Shy", "Playful", "Scrawny"],
    description: "Mini is an intelligent and spirited black cat who balances her natural shyness with bursts of playful energy. Though initially reserved around strangers, she becomes quite animated with those she trusts. Her slender frame belies her agility and grace, allowing her to execute impressive acrobatic feats during play sessions. Mini particularly loves interactive toys and games that challenge her quick reflexes and keen mind. Despite black cats often being perceived as mysterious or aloof, Mini defies stereotypes with her expressive behaviors and responsive nature. She's especially good at handling new situations once she's had time to observe and assess them, showing the adaptability and resilience typical of black cats.",
    photos: [2]
  }
];