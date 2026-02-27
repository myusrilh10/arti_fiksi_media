

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string; // Sub-category
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  content?: string;
  mainCategory: string;
}


export const CATEGORY_MAPPING = {
  'Lensa Lokal': [],
  'Lifestyle': [],
  'Public Interest': []
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Masa Depan Industri Kreatif Indonesia di Era Digital",
    excerpt: "Bagaimana teknologi AI dan blockchain mengubah cara kita menikmati seni dan budaya pop lokal.",
    category: "Business & Career",
    mainCategory: "Public Interest",
    author: "Rizky Ramadhan",
    date: "7 Feb 2026",
    imageUrl: "/images/tech.png",
    slug: "masa-depan-industri-kreatif",
    content: `...`
  },
  {
    id: "2",
    title: "5 Kafe Tersembunyi di Jakarta Selatan",
    excerpt: "Tempat nongkrong asik dengan suasana vintage yang cocok untuk WFC atau sekadar bersantai.",
    category: "Home", // Using 'Home' as closest match for Lifestyle/Spaces
    mainCategory: "Lifestyle",
    author: "Sarah Amalia",
    date: "6 Feb 2026",
    imageUrl: "/images/cafe.png",
    slug: "kafe-tersembunyi-jakarta",
    content: `...`
  },
  {
    id: "3",
    title: "Filosofi di Balik Tren Fashion 'Slow Living'",
    excerpt: "Kenapa semakin banyak brand lokal beralih ke metode produksi yang ramah lingkungan?",
    category: "Fashion",
    mainCategory: "Lifestyle",
    author: "Dimas Anggara",
    date: "5 Feb 2026",
    imageUrl: "/images/fashion.png",
    slug: "filosofi-slow-living",
    content: `...`
  },
  {
    id: "4",
    title: "Eksplorasi Emosi dalam Sinema Modern",
    excerpt: "Sebuah tinjauan mendalam tentang bagaimana sutradara muda mengangkat isu kesehatan mental.",
    category: "Art & Culture",
    mainCategory: "Lensa Lokal",
    author: "Dinda Kirana",
    date: "4 Feb 2026",
    imageUrl: "/images/film.png",
    slug: "review-film-modern",
    content: `...`
  },
  {
    id: "5",
    title: "Panduan Memulai Podcasting untuk Pemula",
    excerpt: "Alat, tips, dan trik untuk membuat podcast yang didengar ribuan orang.",
    category: "Business & Career",
    mainCategory: "Public Interest",
    author: "Aldi Taher",
    date: "3 Feb 2026",
    imageUrl: "/images/podcast.png",
    slug: "panduan-podcasting",
    content: `...`
  },
  {
    id: "6",
    title: "Sejarah Musik Indie di Indonesia",
    excerpt: "Perjalanan panjang musisi independen menaklukkan industri musik tanah air.",
    category: "Human Stories",
    mainCategory: "Lensa Lokal",
    author: "Citra Scholastika",
    date: "2 Feb 2026",
    imageUrl: "/images/music.png",
    slug: "sejarah-musik-indie",
    content: `...`
  },
  {
    id: "7",
    title: "Science Behind Sleep",
    excerpt: "Mengapa tidur berkualitas sangat penting untuk produktivitas dan kesehatan mental.",
    category: "Science",
    mainCategory: "Public Interest",
    author: "Dr. Sleep",
    date: "1 Feb 2026",
    imageUrl: "/images/tech.png",
    slug: "science-behind-sleep",
    content: `...`
  },
  {
    id: "8",
    title: "Love in the Time of AI",
    excerpt: "Bagaimana teknologi mempengaruhi cara kita menjalin hubungan di masa kini.",
    category: "Love & Relationships",
    mainCategory: "Lifestyle",
    author: "Samantha",
    date: "31 Jan 2026",
    imageUrl: "/images/cafe.png",
    slug: "love-in-ai",
    content: `...`
  },
  {
    id: "9",
    title: "Wellness Retreats in Bali",
    excerpt: "Menemukan ketenangan batin di pulau dewata.",
    category: "Wellness",
    mainCategory: "Lifestyle",
    author: "Bali Spirit",
    date: "30 Jan 2026",
    imageUrl: "/images/fashion.png",
    slug: "wellness-bali",
    content: `...`
  },
  {
    id: "10",
    title: "General Knowledge Quiz",
    excerpt: "Seberapa luas wawasanmu tentang dunia? Coba tes di sini.",
    category: "General Knowledge",
    mainCategory: "Public Interest",
    author: "Quiz Master",
    date: "29 Jan 2026",
    imageUrl: "/images/film.png",
    slug: "general-knowledge-quiz",
    content: `...`
  }
];

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
  slug: string;
  description?: string;
}

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Jakarta Art Week 2026",
    date: "15-22 Maret 2026",
    location: "Galeri Nasional Indonesia",
    category: "Art & Culture",
    imageUrl: "/images/tech.png",
    slug: "jakarta-art-week-2026",
    description: "Jakarta Art Week 2026 kembali hadir dengan kurasi karya seni kontemporer terbaik dari seniman lokal dan mancanegara. Tahun ini mengusung tema 'Resonansi Urban' yang mengeksplorasi hubungan antara manusia dan ruang kota yang dinamis. Nikmati pameran instalasi, workshop seni, dan diskusi panel eksklusif."
  },
  {
    id: "e2",
    title: "Indie Music Fest",
    date: "5 April 2026",
    location: "Stadion Madya GBK",
    category: "Art & Culture",
    imageUrl: "/images/music.png",
    slug: "indie-music-fest",
    description: "Rayakan keberagaman musik independen Indonesia di Indie Music Fest. Menampilkan lebih dari 20 musisi lintas genre, festival ini menjadi wadah bagi musisi pendatang baru untuk bersinar dan musisi senior untuk kembali menyapa penggemarnya. Area kreatif dan bazaar merchandise juga tersedia."
  },
  {
    id: "e3",
    title: "Digital Nomad Summit",
    date: "10-12 Mei 2026",
    location: "Ubud, Bali",
    category: "Business & Career",
    imageUrl: "/images/cafe.png",
    slug: "digital-nomad-summit",
    description: "Bergabunglah dengan ratusan digital nomad dari seluruh dunia dalam konferensi tiga hari di jantung budaya Bali. Temukan strategi terbaru dalam remote work, investasi digital, dan gaya hidup berpindah-pindah. Sesi networking eksklusif dan petualangan outdoor menantimu."
  },
  {
    id: "e4",
    title: "Fashion Fusion Night",
    date: "20 Juni 2026",
    location: "SCBD Park, Jakarta",
    category: "Fashion",
    imageUrl: "/images/fashion.png",
    slug: "fashion-fusion-night",
    description: "Malam puncak perayaan fashion yang memadukan elemen tradisional Indonesia dengan gaya street-wear modern. Menampilkan runway show dari desainer kenamaan dan koleksi terbatas kolaborasi brand lokal. Dihadiri oleh para fashion enthusiast dan influencers ternama."
  }
];

export interface Video {
  id: string;
  title: string;
  duration: string;
  date: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  slug: string;
}

export const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Exploring the Streets of Palu",
    duration: "10:24",
    date: "10 Feb 2026",
    category: "City Tour",
    imageUrl: "/images/tech.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    slug: "exploring-streets-palu"
  },
  {
    id: "v2",
    title: "How to Brew Perfect Coffee",
    duration: "05:15",
    date: "8 Feb 2026",
    category: "Lifestyle",
    imageUrl: "/images/cafe.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    slug: "how-to-brew-perfect-coffee"
  },
  {
    id: "v3",
    title: "Interview with Local Artist",
    duration: "15:30",
    date: "5 Feb 2026",
    category: "Art & Culture",
    imageUrl: "/images/music.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    slug: "interview-local-artist"
  }
];
