export const metadata = {
  title: 'Pedoman Media Siber - Arti Fiksi',
  description: 'Pedoman Media Siber Arti Fiksi',
};

export default function PedomanMediaSiberPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-black text-[#203627] mb-8 font-montserrat-black uppercase border-b-4 border-[#e7fe41] pb-4 inline-block">
          Pedoman Media Siber
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800 mt-8 space-y-6">
          {/* 
            TODO: Isi pedoman media siber di sini
            Anda dapat menggunakan tag HTML seperti <p>, <h2>, <ul>, <li> dll untuk memformat struktur teks.
          */
            <div>
              <h2>Peraturan Dewan Pers</h2>

              <p>
                Kemerdekaan berpendapat, kemerdekaan berekpresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di Indonesai juga merupakan bagian dari kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers, dan kemerdekaan pers.
              </p>
              <p>
                Media siber memiliki karakter khusus sehingga memerlukan pedoman agar pengelolaannya dapat dilaksanakan secara profesional, memenuhi fungsi, hak, dan kewajibannya sesuai Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan Kode Etik Jurnalistik. Untuk itu dewam pers bersama organisasi pers, pengelola media siber, dan masyarakat menyusun Pedoman Pemberitaan Media Siber sebagai berikut :
              </p>
              <h2> 1. Ruang Lingkup</h2>
              <ol>
                <li>Media Siber adalah segala bentuk media yang menggunakan wahanan internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan standara perusahaan Pers yang ditetapkan Dewan Pers.</li>
                <li>Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan atau dipublikasikan oleh pengguna media siber, antara lain, artikel, gambar, komentar, suara, video, dan berbagai bentuk unggahan yang melekat pada media siber, seperti blog, forum, komentar pembaca atau pemirsa, dan bentuk lain.</li>
              </ol>


            </div>

          }

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-gray-500 italic text-center">
              [ Halaman kosong ini sudah siap Anda isi dengan teks dokumen Pedoman Media Siber ]
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
