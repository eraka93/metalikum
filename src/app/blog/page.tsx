import Link from "next/link";
import Image from "next/image";

export const blogPosts = [
  {
    id: 1,
    slug: "prednosti-fiber-lasera",
    title: "Zašto je Fiber Laser revolucija u obradi metala?",
    excerpt: "Saznajte zašto fiber laseri menjaju industriju i koje su ključne prednosti u odnosu na starije CO2 lasere. Brzina i preciznost bez konkurencije.",
    date: "05. Februar 2026.",
    image: "/blog-1.jpg" 
  },
  {
    id: 2,
    slug: "priprema-dxf-fajlova",
    title: "Vodič za pripremu DXF fajlova za sečenje",
    excerpt: "Kako da pravilno pripremite vaše crteže kako biste ubrzali proces proizvodnje i smanjili troškove izrade vaših pozicija.",
    date: "03. Februar 2026.",
    image: "/blog-2.jpg"
  },
  {
    id: 3,
    slug: "moderne-panelne-ograde",
    title: "Panelne ograde: Spoj privatnosti i modernog dizajna",
    excerpt: "Zašto su CNC sečeni paneli postali prvi izbor za moderne kuće i poslovne objekte u Srbiji. Izdržljivost i estetika u jednom.",
    date: "01. Februar 2026.",
    image: "/blog-3.jpg"
  }
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 uppercase tracking-tighter">
            METALIKUM <span className="text-brand-red">ŽURNAL</span>
          </h1>
<div className="flex items-center justify-center md:justify-start gap-4">
    <span className="h-px w-8 bg-brand-red/50"></span>
    <p className="text-gray-600 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em]">
      Vesti iz industrije & saveti stručnjaka
    </p>
  </div>        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-zinc-900/40 backdrop-blur-sm h-full rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-brand-red/50 hover:translate-y-[-8px]">
                <div className="relative h-64 w-full bg-zinc-800 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale group-hover:grayscale-0"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-[2px] bg-brand-red"></span>
                    <span className="text-brand-red font-mono text-xs uppercase tracking-[0.2em]">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-white text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                    Pročitaj više <span className="text-brand-red ml-2">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}