import { blogPosts } from "../page";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 15 zahteva da params bude Promise
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#050505] pt-40 pb-20"> {/* Povećan pt-40 zbog navbara */}
      <div className="max-w-4xl mx-auto px-4">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center text-brand-red font-black text-xs uppercase tracking-widest mb-12 hover:gap-2 transition-all group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Nazad na žurnal
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-brand-red"></span>
            <span className="text-brand-red font-mono text-sm uppercase tracking-[0.3em]">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
            {post.title}
          </h1>
        </header>

        <div className="relative h-[300px] md:h-[550px] w-full rounded-[3rem] overflow-hidden mb-12 border border-white/10 shadow-2xl bg-zinc-900">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-zinc-900/30 backdrop-blur-md p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
          <div className="prose prose-invert prose-red max-w-none">
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 font-medium italic border-l-4 border-brand-red pl-6">
              {post.excerpt}
            </p>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
               <p>
                 U industriji obrade metala, preciznost nije samo cilj — to je standard. 
                 Korišćenjem najsavremenije tehnologije koju posedujemo u našem pogonu u Novoj Pazovi, 
                 obezbeđujemo klijentima maksimalnu iskoristivost materijala uz minimalne gubitke.
               </p>
               <p>
                 Bilo da se radi o serijskoj proizvodnji delova ili o unikatnim projektima kao što su 
                 CNC panelne ograde, svaki rez je kompjuterski kontrolisan i proveren. 
                 Naš tim stručnjaka stoji vam na raspolaganju za svaku vrstu konsultacija oko 
                 tehničke dokumentacije i pripreme fajlova.
               </p>
            </div>

            {/* CTA unutar bloga */}
            <div className="mt-16 p-10 rounded-[2rem] bg-gradient-to-br from-brand-red to-red-900 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-black text-white uppercase mb-2">Potrebna vam je usluga?</h3>
                <p className="text-white/80">Pošaljite nam upit i dobićete ponudu u roku od 24h.</p>
              </div>
              <Link 
                href="/kontakt" 
                className="bg-white text-brand-red px-8 py-4 rounded-xl font-black uppercase text-sm hover:bg-black hover:text-white transition-all whitespace-nowrap"
              >
                Zatraži ponudu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}