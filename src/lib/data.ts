
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  content?: string;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Masa Depan Industri Kreatif Indonesia di Era Digital",
    excerpt: "Bagaimana teknologi AI dan blockchain mengubah cara kita menikmati seni dan budaya pop lokal.",
    category: "Teknologi",
    author: "Rizky Ramadhan",
    date: "7 Feb 2026",
    imageUrl: "/images/tech.png",
    slug: "masa-depan-industri-kreatif",
    content: `
      <p>Industri kreatif di Indonesia sedang mengalami revolusi besar-besaran. Dengan adopsi teknologi seperti Artificial Intelligence (AI) dan Blockchain, para kreator kini memiliki alat baru untuk mengekspresikan diri dan memonetisasi karya mereka.</p>
      <br/>
      <p>Salah satu contoh paling nyata adalah penggunaan AI dalam pembuatan musik dan seni visual. Meskipun menuai pro dan kontra, tidak dapat dipungkiri bahwa teknologi ini membuka peluang baru bagi mereka yang sebelumnya terkendala masalah teknis.</p>
      <br/>
      <h3>Dampak pada Ekonomi Kreatif</h3>
      <p>Menurut data terbaru, sektor ini menyumbang signifikan terhadap PDB nasional. Dengan adanya platform digital, batasan geografis semakin pudar, memungkinkan karya anak bangsa dinikmati oleh audiens global.</p>
    `
  },
  {
    id: "2",
    title: "5 Kafe Tersembunyi di Jakarta Selatan yang Wajib Dikunjungi",
    excerpt: "Tempat nongkrong asik dengan suasana vintage yang cocok untuk WFC atau sekadar bersantai.",
    category: "Gaya Hidup",
    author: "Sarah Amalia",
    date: "6 Feb 2026",
    imageUrl: "/images/cafe.png",
    slug: "kafe-tersembunyi-jakarta",
    content: `
      <p>Jakarta Selatan memang surganya tempat nongkrong. Namun, di balik keramaian Kemang dan Senopati, tersimpan beberapa kafe hidden gem yang menawarkan ketenangan dan kopi berkualitas.</p>
      <br/>
      <p>Salah satunya adalah 'Kopi Sudut', sebuah kedai kecil yang terletak di gang sempit Cipete. Dengan desain interior vintage yang kental, tempat ini seolah membawa kita kembali ke era 90-an.</p>
      <br/>
      <h3>Rekomendasi Menu</h3>
      <p>Jangan lupa mencoba Es Kopi Susu Gula Aren andalan mereka yang creamy namun tetap strong. Cocok diminum sambil mengerjakan tugas atau sekadar melamun di sore hari.</p>
    `
  },
  {
    id: "3",
    title: "Mengulik Filosofi di Balik Tren Fashion 'Slow Living'",
    excerpt: "Kenapa semakin banyak brand lokal beralih ke metode produksi yang lebih ramah lingkungan?",
    category: "Fashion",
    author: "Dimas Anggara",
    date: "5 Feb 2026",
    imageUrl: "/images/fashion.png",
    slug: "filosofi-slow-living",
    content: `
      <p>Fast fashion mulai ditinggalkan. Generasi muda kini lebih sadar akan dampak lingkungan dari pakaian yang mereka beli. Inilah yang memicu lahirnya tren 'Slow Fashion' atau 'Slow Living' dalam berpakaian.</p>
      <br/>
      <p>Brand lokal seperti 'Bumi Wear' mulai menggunakan bahan pewarna alami dan kain serat organik. Meski harganya sedikit lebih mahal, kualitas dan daya tahannya jauh lebih baik.</p>
    `
  },
  {
    id: "4",
    title: "Review Film: Eksplorasi Emosi dalam Sinema Modern",
    excerpt: "Sebuah tinjauan mendalam tentang bagaimana sutradara muda mengangkat isu kesehatan mental.",
    category: "Film",
    author: "Dinda Kirana",
    date: "4 Feb 2026",
    imageUrl: "/images/film.png",
    slug: "review-film-modern",
    content: `
      <p>Sinema bukan lagi sekadar hiburan. Film-film terbaru karya sineas muda Indonesia mulai berani mengangkat isu-isu sensitif seperti kesehatan mental dan trauma masa lalu.</p>
      <br/>
      <p>Melalui visual yang puitis dan narasi yang tidak linear, penonton diajak menyelami kompleksitas pikiran manusia. Sebuah langkah maju yang patut diapresiasi.</p>
    `
  },
  {
    id: "5",
    title: "Panduan Memulai Podcasting untuk Pemula",
    excerpt: "Alat, tips, dan trik untuk membuat podcast yang didengar ribuan orang.",
    category: "Kreatif",
    author: "Aldi Taher",
    date: "3 Feb 2026",
    imageUrl: "/images/podcast.png",
    slug: "panduan-podcasting",
    content: `
        <p>Ingin memulai podcast tapi bingung mulai dari mana? Tenang, Anda tidak butuh studio mahal. Cukup dengan smartphone dan aplikasi editing sederhana, Anda sudah bisa mulai berkarya.</p>
        <br/>
        <h3>Konsistensi adalah Kunci</h3>
        <p>Banyak podcaster pemula yang menyerah di tengah jalan. Padahal, kunci kesuksesan podcast adalah konsistensi dalam mengunggah episode baru.</p>
    `
  },
  {
    id: "6",
    title: "Sejarah Musik Indie di Indonesia: Dari Garasi ke Panggung Besar",
    excerpt: "Perjalanan panjang musisi independen menaklukkan industri musik tanah air.",
    category: "Musik",
    author: "Citra Scholastika",
    date: "2 Feb 2026",
    imageUrl: "/images/music.png",
    slug: "sejarah-musik-indie",
    content: `
        <p>Musik indie Indonesia telah menempuh jalan panjang. Dari yang awalnya hanya didengar segelintir orang di gig-gig kecil, kini musisi indie mampu merajai festival musik besar.</p>
        <br/>
        <p>Band-band seperti Efek Rumah Kaca dan Sore telah membuka jalan bagi generasi penerus untuk berkarya tanpa harus mendikte pasar.</p>
    `
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
    category: "Seni",
    imageUrl: "/images/tech.png" // Using existing images for now
  },
  {
    id: "e2",
    title: "Indie Music Fest",
    date: "5 April 2026",
    location: "Stadion Madya GBK",
    category: "Musik",
    imageUrl: "/images/music.png"
  },
  {
    id: "e3",
    title: "Digital Nomad Summit",
    date: "10-12 Mei 2026",
    location: "Ubud, Bali",
    category: "Teknologi",
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
