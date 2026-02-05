import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | Metalikum Pro - Lasersko Sečenje Nova Pazova",
  description: "Kontaktirajte Metalikum Pro za usluge laserskog sečenja metala i izradu panelnih ograda. Nalazimo se u Novoj Pazovi, Cvije Kukolja 121.",
  keywords: ["kontakt metalikum pro", "lasersko secenje nova pazova", "cnc savijanje kontakt", "metalne ograde pazova"],
};

export default function Kontakt() {
  // Korišćenje HTTPS i Embed formata sa tvojim koordinatama za maksimalnu preciznost
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2823.8634085323133!2d20.202371976245942!3d44.94644462107022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a59497b3de497%3A0xe076a46af0e1ffc9!2z0KbQstC40ZjQtSDQmtGD0LrQvtGZ0LAgMTIxLCDQndC-0LLQsCDQn9Cw0LfQvtCy0LAgMjIzMzA!5e0!3m2!1ssr!2srs!4v1770249494365!5m2!1ssr!2srs";

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Kontakt sekcija */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          
          {/* Leva strana: Info podaci */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-red font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Pronađite nas</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-10 tracking-tighter">
              DOGOVORITE <br /> <span className="text-brand-red">PROJEKAT</span>
            </h1>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-gray-500 text-[10px] uppercase mb-3 font-bold tracking-widest">Sedište i proizvodnja</p>
                <p className="text-2xl md:text-3xl text-white font-bold group-hover:text-brand-red transition-colors leading-tight">
                  Cvije Kukolja 121, <br /> 22330 Nova Pazova
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-[10px] uppercase mb-3 font-bold tracking-widest">Direktan kontakt</p>
                <a href="tel:0646621809" className="text-3xl md:text-5xl text-white font-black hover:text-brand-red transition-colors block mb-2 tracking-tighter">
                  064 662 1809
                </a>
                <p className="text-gray-400 font-medium tracking-wide font-mono text-sm uppercase">metalikumpro@gmail.com</p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-gray-500 text-[10px] uppercase mb-4 font-bold tracking-widest">Radno Vreme</p>
                <div className="flex gap-12 text-white font-bold text-lg">
                  <div>
                    <p className="text-brand-red text-[9px] uppercase tracking-[0.2em] mb-1">Pon - Pet</p>
                    <p className="font-black text-2xl">07:00 - 15:00</p>
                  </div>
                  <div>
                    <p className="text-brand-red text-[9px] uppercase tracking-[0.2em] mb-1">Subota</p>
                    <p className="font-black text-2xl uppercase italic">Po dogovoru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desna strana: Osvetljena Mapa */}
          <div className="h-[450px] md:h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(227,30,36,0.1)] relative group bg-zinc-900">
            {/* Suptilni crveni overlay koji nestaje na hover */}
            <div className="absolute inset-0 bg-brand-red/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
              }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Metalikum Pro Lokacija"
              className="transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
            ></iframe>
          </div>
        </div>

        {/* Recenzije Sekcija */}
        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              POVERENJE <span className="text-brand-red">INDUSTRIJE</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-10 bg-brand-red/40"></span>
              <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                Utisci naših dugogodišnjih partnera
              </p>
              <span className="h-[1px] w-10 bg-brand-red/40"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Marko J.", 
                firma: "Metalogradnja", 
                text: "Zahtevali smo preciznost u desetim milimetra za specifične mašinske delove. Metalikum Pro je isporučio bez greške." 
              },
              { 
                name: "Nikola S.", 
                firma: "Bravarski Studio", 
                text: "Panelne ograde su im brutalne. Sečenje je čisto, nema onih oštrih ivica koje se viđaju kod drugih. Svaka preporuka." 
              },
              { 
                name: "Dejan M.", 
                firma: "Dizajn Enterijera", 
                text: "Preporuka za svakog ko traži moderan dizajn i debeli lim. Nisu 'štedeli' na materijalu, kapija je masivna i stabilna." 
              }
            ].map((rev, i) => (
              <div key={i} className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 relative hover:border-brand-red/30 transition-all duration-300 group">
                <div className="text-brand-red text-6xl absolute top-6 right-8 opacity-10 font-serif group-hover:opacity-30 transition-opacity">&quot;</div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed relative z-10 italic">
                  {rev.text}
                </p>
                <div className="relative z-10 border-l-2 border-brand-red/30 pl-4">
                  <p className="text-white font-black uppercase text-sm tracking-widest">{rev.name}</p>
                  <p className="text-brand-red text-[10px] font-mono uppercase mt-1 tracking-[0.2em]">{rev.firma}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}