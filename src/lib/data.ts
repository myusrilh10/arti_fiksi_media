

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
  mainCategory: 'Lensa Lokal' | 'Lifestyle' | 'Public Interest';
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
}

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Jakarta Art Week 2026",
    date: "15-22 Maret 2026",
    location: "Galeri Nasional Indonesia",
    category: "Art & Culture",
    imageUrl: "/images/tech.png"
  },
  {
    id: "e2",
    title: "Indie Music Fest",
    date: "5 April 2026",
    location: "Stadion Madya GBK",
    category: "Art & Culture",
    imageUrl: "/images/music.png"
  },
  {
    id: "e3",
    title: "Digital Nomad Summit",
    date: "10-12 Mei 2026",
    location: "Ubud, Bali",
    category: "Business & Career",
    imageUrl: "/images/cafe.png"
  },
  {
    id: "e4",
    title: "Fashion Fusion Night",
    date: "20 Juni 2026",
    location: "SCBD Park, Jakarta",
    category: "Fashion",
    imageUrl: "/images/fashion.png"
  }
];
