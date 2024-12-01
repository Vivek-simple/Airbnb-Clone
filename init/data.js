const sampleListings = [
  // {
  //   title: "Duplex Villa with Private Pool - Tamarind Retreat",
  //   description:
  //     "Escape to our Private Pool Duplex Villa at Tamarind Retreat—an exclusive haven within our 1.1-acre paradise",
  //   image: {
  //     filename: "listingimage",
  //     url: ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjY0ODYzNjEzMzAwNzU1OTY0/original/066ba3ab-21c4-4728-81cd-8bbd15cadc61.jpeg?im_w=1200",],
  //   },
  //   category:['rooms','trending'],
  //   price: 1500,
  //   location: "Alibag",
  //   country: "India",
  //   geometry:{
  //     type:'Point',
  //     coordinates:[72.8773,18.6584]
  //   }
  // },
  {
    title: "Green Heaven, Holiday Maiyaan",
    description:
      "A beautiful 1bhk apartment  away from the hustle bustle of the city with a luxurious balcony and a senic view ..",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/34c1ddc3-cb25-480f-82ed-a082f2f2cebc.jpg?im_w=960",
      ],
    },
    category: ["rooms"],
    price: 1200,
    location: "Dhamani",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.0464, 19.9359],
    },
  },
  {
    title: "Bougainvillea room with Breakfast",
    description:
      "Make some memories at this unique,Sea Facing and family-friendly place.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1090355616341073560/original/1e96e717-027e-49f3-b7fb-9c0b18e6e7dd.jpeg?im_w=720",
    },
    category: ["rooms"],
    price: 1000,
    location: "Alibag",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8773, 18.6584],
    },
  },
  {
    title: "3 BR Beach Villa at Thal Beach",
    description:
      "A gorgeous gateway to Thal Beach- A 3-bedroom villa with old-world charm flanged by coconut groves and a well-manicured lawn. Feel connected to the beach from the bedroom, living area and verandah. A perfect spot for hosting grand celebrations.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1062711922476606416/original/cbb77948-2209-4fe3-b831-626410372d7a.jpeg?im_w=1200",
    },
    category: ["rooms"],
    price: 2500,
    location: "Raigad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [83.4117, 19.1715],
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [122.6784, 45.5152],
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [86.8515, 21.1619],
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [120.0324, 39.0968],
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["beach"],
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [118.2426, 34.0549],
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0961],
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.8333, 2.3333],
    },
  },
  {
    title: "Beachfront Paradise Villa",
    description:
      "Experience luxury living in this stunning beachfront villa. Enjoy breathtaking ocean views and private beach access.",
    image: {
      filename: "beachfront_villa",
      url: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202107161117437419-e3fafef2e4a811eba1070242ac110004.jpg",
    },
    category: ["beach", "villa"],
    price: 6000,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7695, 15.2993],
    },
  },
  {
    title: "Cozy Beach House",
    description:
      "Relax and unwind in this cozy beach house just steps away from the shore. Perfect for a beach getaway with family or friends.",
    image: {
      filename: "beach_house",
      url: "https://assets.cntraveller.in/photos/60ba0736ee63ec1fe6ee8357/4:3/w_1200,h_900,c_limit/lead.jpg",
    },
    category: ["beach", "house"],
    price: 3000,
    location: "Mahabalipuram",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [80.1967, 12.6269],
    },
  },
  {
    title: "Mountain View Chalet",
    description:
      "Enjoy panoramic mountain views from this charming chalet. Perfect for a cozy retreat in the heart of the mountains.",
    image: {
      filename: "mountain_chalet",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/71/3c/32/mount-ville-cottages.jpg",
    },
    category: ["mountain", "chalet"],
    price: 4000,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.171, 31.1048],
    },
  },
  {
    title: "Private Pool Villa",
    description:
      "Indulge in luxury at this private pool villa. Relax by the poolside and enjoy stunning views of the surrounding mountains.",
    image: {
      filename: "pool_villa",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447633976.jpg?k=a910329f92b69cf534ee9c208c1b93d7c49078941f6eb4928347538f1aacfd19&o=&hp=1",
    },
    category: ["pool", "villa"],
    price: 7000,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },
  {
    title: "Lakefront Cottage",
    description:
      "Escape to this charming lakefront cottage for a peaceful getaway. Enjoy fishing, boating, and breathtaking sunsets.",
    image: {
      filename: "lakefront_cottage",
      url: "https://ik.imagekit.io/5tgxhsqev/saffronstays-media/tr:w-800,h-460,q-62/image/upload/npj3qzq4vc5hfora9cvc.webp",
    },
    category: ["lake", "cottage"],
    price: 3500,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4629, 29.3801],
    },
  },

  {
    title: "Riverside Retreat",
    description:
      "Escape to this serene riverside retreat surrounded by lush greenery. Enjoy fishing, birdwatching, and tranquil walks along the riverbank.",
    image: {
      filename: "riverside_retreat",
      url: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Nainital-Villas_17th-dec.jpg",
    },
    category: ["lake", "retreat"],
    price: 4500,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    title: "Luxury Mountain Resort",
    description:
      "Indulge in luxury at this breathtaking mountain resort. Enjoy world-class amenities and panoramic views of the Himalayas.",
    image: {
      filename: "mountain_resort",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/73/a7/e0/sunrise-villa-entrance.jpg?w=700&h=-1&s=1",
    },
    category: ["mountain", "resort"],
    price: 8000,
    location: "Shimla",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
  },
  {
    title: "Boat House Experience",
    description:
      "Stay in a charming boat house and enjoy life on the water. Explore the serene backwaters and experience the rich culture of Kerala.",
    image: {
      filename: "boat_house",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrEdNF2PhtOiaXxo-6K26n598XXyH5yIRSCyPQeU4Xw&s",
    },
    category: ["boat", "house"],
    price: 6000,
    location: "Alleppey",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3454, 9.4981],
    },
  },
  {
    title: "beach Cabin Retreat",
    description:
      "Experience tranquility at this lakeside cabin retreat. Enjoy stunning views, fishing, and kayaking on the pristine lake.",
    image: {
      filename: "lakeside_cabin",
      url: "https://static2.tripoto.com/media/filter/tst/img/89292/TripDocument/1440057773_a.jpg",
    },
    category: ["beach", "cabin"],
    price: 3800,
    location: "Udaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7384, 24.5854],
    },
  },
  {
    title: "Beachfront Bungalow",
    description:
      "Stay in a charming beachfront bungalow and enjoy the sound of the waves. Relax on the sandy shores and soak in the sun.",
    image: {
      filename: "beachfront_bungalow",
      url: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/04/ss-220517-A-shot-of-the-swimming-pool-by-the-sea-at-Niraamaya-Retreat-in-Kovalam.jpg",
    },
    category: ["beach", "bungalow"],
    price: 5500,
    location: "Kovalam",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.8144, 8.3884],
    },
  },
  {
    title: "Mountain View Retreat",
    description:
      "Escape to this secluded mountain retreat for a peaceful getaway. Enjoy panoramic views of the surrounding peaks and valleys.",
    image: {
      filename: "mountain_view_retreat",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/436784750.jpg?k=16351da706f230ecf156f50549450244ab60a0683ee2bc051f4c7317a11af54b&o=",
    },
    category: ["mountain", "retreat"],
    price: 5000,
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0496, 10.0889],
    },
  },
  {
    title: "Poolside Villa",
    description:
      "Relax and unwind at this luxurious poolside villa. Enjoy private pool access and lush tropical surroundings.",
    image: {
      filename: "poolside_villa",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336906839.jpg?k=c034b3711a254f611d6e4f3849cb2bf72352e41897722c68ada0eb9b9a65c470&o=&hp=1",
    },
    category: ["pool", "villa"],
    price: 7000,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7695, 15.2993],
    },
  },
  {
    title: "Lake View Cottage",
    description:
      "Stay in a cozy cottage with stunning views of the lake. Enjoy peaceful walks by the water and picturesque sunsets.",
    image: {
      filename: "lake_view_cottage",
      url: "https://c8.alamy.com/comp/H4FEGB/nainital-uttarakhand-india-november-13-2015-the-old-house-governer-H4FEGB.jpg",
    },
    category: ["lake", "cottage"],
    price: 4200,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4629, 29.3801],
    },
  },
  {
    title: "Riverside Log Cabin",
    description:
      "Experience rustic charm at this riverside log cabin. Relax on the porch and listen to the soothing sounds of the river.",
    image: {
      filename: "riverside_log_cabin",
      url: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_29/842523/322295.jpg",
    },
    category: ["boat", "cabin"],
    price: 4500,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.171, 31.1048],
    },
  },

  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains"],
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains"],
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.065, 17.7134],
    },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["beach"],
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [1.8839, 51.795],
    },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["trending"],
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [71.0589, 42.3601],
    },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["boat", "lake", "mountains"],
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, 8.4095],
    },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["trending"],
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [115.5708, 51.1784],
    },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains", "trending"],
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [80.1918, 25.7617],
    },
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains", "lake"],
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.3307, 7.9843],
    },
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["beach"],
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [4.2264, 57.4596],
    },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["trending"],
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains"],
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [110.3626, 46.8797],
    },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["pool", "rooms"],
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [72.8773, 18.6584],
    },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["beach"],
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [72.8773, 18.6584],
    },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains"],
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [79.932, 32.7833],
    },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    category: ["rooms"],
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.65, 35.6764],
    },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["mountains", "lake"],
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [71.5724, 43.1939],
    },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["lake"],
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["boat", "lake"],
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [106.8175, 39.1911],
    },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    category: ["beach"],
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [83.7534, 9.7489],
    },
  },
];

module.exports = { data: sampleListings };
