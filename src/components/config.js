const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1507", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode (its ur birthdate)", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: Your birth date!(Pass:1507)", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does Rheina love him more?", // Another example query
    `Rheina's birthdate (coz her bf forgets)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2022-12-19", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you...", // Title for the music page
  musicGallery: [
    {
      title: "Ik Kudi", // Title of the song
      artist: "Arpit Bala", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      left: "15%",
      top: "40%",
    },
    {
      title: "If the World was Ending",
      artist: "JP Saxe",
      left: "30%",
      top: "75%",
    },
    {
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      left: "5%",
      top: "65%",
    },
    {
      title: "Ye Tune Ky Kiya",
      artist: "Javed Bashir",
      left: "25%",
      top: "90%",
    },
    {
      title: "I Wanna Be Yours",
      artist: "Artic Monkey",
      left: "35%",
      top: "50%",
    },
    {
      title: "Ajab Si",
      artist: "KK",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Few of my fav pics of my Birthday Girl!!", // Title for the messages recap page
    messageGallery: [
      { title: "This pic is exactly what ZOYA means- LOVE", description: " How can men be gay, Js look at this beauty, DEMN!" }, // Message entry
      { title: "You always slay in pink dress QUEEN", description: "If i were to love u, i would ly like i luv BARCA" },
      { title: "MY FINE SHYT", description: "#LOML" },
    ],

    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "At MacDonalds", description: "This was us at ur last Bday🎉, i hope u wear that jersey when we meet next time." }, // Picture entry
      { title: "February 14, 2022", description: "This was best period of my life istg💕" },
      { title: "May 01, 2024", description: "Lit us after having a fight, remember??" },
    ],
  
  // 💌 Love Letter Page
  loveLetterMessage: "Happy Birthday!! LOML💖, Wishisng you the best life(wid me) ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
    "How long have we been together",
  ],
};

export default config;