import Image from "next/image";

const content = `
<p><strong>ASTAXANTHIN : ANTIOKSIDAN 6000X LEBIH KUAT DAR VIT.C</strong></p>
<p>Astaxanthin adalah pigmen alami dari kelompok <strong>karotenoid</strong>, yang dikenal sebagai antioksidan kuat dengan berbagai manfaat kesehatan. Pigmen ini memberi warna merah atau oranye pada beberapa organisme laut seperti salmon, udang, dan ganggang merah.</p>
<p>Astaxanthin memiliki kekuatan antioksidan yang jauh lebih tinggi dibandingkan vitamin C, vitamin E, dan beta-karoten. Karena sifatnya yang unik, astaxanthin disebut sebagai <strong>\"super antioksidan\"</strong> karena dapat melindungi sel dari stres oksidatif dan peradangan.Astaxanthin secara alami ditemukan dalam beberapa organisme, terutama yang hidup di lingkungan laut. Berikut adalah sumber terbesarnya:</p>
<ol>
<li><strong> Ganggang Mikro: Haematococcus pluvialis </strong></li>
</ol>
<p>Sumber astaxanthin terkaya di dunia, Mengandung hingga 3,8% astaxanthin dari total berat keringnya sehingga sering digunakan dalam suplemen kesehatan dan industri kosmetik</p>
<ol start=\"2\">
<li><strong> Krill (Euphausia superba) </strong></li>
</ol>
<p>Krill merupakan plankton kecil yang kaya astaxanthin, Biasa diolah menjadi minyak krill untuk suplemen kesehatan</p>
<ol start=\"3\">
<li><strong> Ikan Salmon (Salmo salar, Oncorhynchus spp.) </strong></li>
</ol>
<p>Warna merah muda pada salmon berasal dari astaxanthin, &nbsp;Ikan salmon liar memiliki kadar lebih tinggi dibandingkan ikan budidaya</p>
<ol start=\"4\">
<li><strong> Udang dan Lobster </strong></li>
</ol>
<p>Warna merah pada cangkang udang dan lobster berasal dari astaxanthin, Namun, kandungannya lebih rendah dibandingkan ganggang mikro</p>
<ol start=\"5\">
<li><strong> Kepiting dan Kerang </strong></li>
</ol>
<p>Beberapa spesies kepiting dan kerang memiliki astaxanthin dalam jumlah kecil, Biasanya terkonsentrasi di bagian daging dan organ dalamnya</p>
<p>&nbsp;</p>
<p><strong>Beberapa Manfaat bagi&nbsp; kesehatan dari Astaxanthin adalah sebagai&nbsp; berikut:</strong></p>
<ul>
<li><strong>Antioksidan kuat</strong> &ndash; 6000x lebih kuat dari vitamin C</li>
<li><strong>Meningkatkan sistem imun</strong> &ndash; Membantu melawan infeksi dan peradangan</li>
<li><strong>Menjaga kesehatan mata</strong> &ndash; Melindungi retina dari kerusakan akibat cahaya biru</li>
<li><strong>Menyehatkan jantung</strong> &ndash; Menurunkan kadar kolesterol jahat (LDL) dan meningkatkan HDL</li>
<li><strong>Melindungi otak</strong> &ndash; Membantu mencegah penyakit neurodegeneratif seperti Alzheimer</li>
<li><strong>Anti-penuaan alami</strong> &ndash; Digunakan dalam produk kecantikan untuk melawan kerutan dan menjaga elastisitas kulit</li>
</ul>
<p>Karena manfaatnya yang luar biasa, astaxanthin kini banyak digunakan dalam <strong>suplemen kesehatan, kosmetik, dan industri pangan</strong>.Salah satunya juga digunakan di dalam <strong>Moment NEOGLUCOGEN</strong>,produk suplementasi nutrisi yang juga mengandung glutathione dan kolagen.</p>
`;

export default function ArticleSlug() {
  return (
    <>
      <Image
        className="absolute w-screen h-screen object-cover -z-10"
        src={'/assets/images/pictures/cover-astaxanthin.jpg'}
        alt={`Cover Astaxanthin`}
        width={1920}
        height={1080}
      />

      <div className="h-[60vh]" />

      <article className="container max-w-4xl mx-auto rounded-2xl bg-white py-10 px-8 shadow-lg">
        <h1 className="text-2xl font-bold">
          {`ASTAXANTHIN : ANTIOKSIDAN 6000X LEBIH KUAT DARI VIT.C`}
        </h1>

        <section className="mt-4 article-content" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
};
