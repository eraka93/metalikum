import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metalikum Pro | Lasersko Sečenje i Panelne Ograde Nova Pazova",
  description: "Uslužno lasersko sečenje metala, CNC savijanje i izrada modernih panelnih ograda. Vrhunska preciznost i brza isporuka u Novoj Pazovi.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - Redizajniran sa svetlijim akcentima */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 flex items-center overflow-hidden">
        {/* Ambijentalno osvetljenje pozadine */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Tekst sadržaj */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-gradient-to-r from-brand-red/20 to-transparent border border-brand-red/30 mb-8">
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse mr-3"></span>
                <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Industrijska Zona Nova Pazova</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter uppercase">
                METALIKUM <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">PRO</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium border-l-2 border-brand-red/30 pl-6">
                Pretvaramo sirovi metal u vrhunske proizvode. Specijalizovani za <span className="text-white">fiber lasersko sečenje</span> i unikatne <span className="text-white">panelne ograde</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/kontakt" className="bg-brand-red hover:bg-red-700 text-white py-5 px-10 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(227,30,36,0.3)] transition-all transform hover:-translate-y-1 uppercase tracking-wider text-center">
                  Započni Projekat
                </Link>
                <Link href="/blog" className="flex items-center justify-center gap-3 text-white font-bold py-5 px-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-all uppercase text-xs tracking-[0.2em]">
                  Pogledaj radove <span className="text-brand-red">→</span>
                </Link>
              </div>
            </div>

            {/* Slika sa svetlosnim okvirom */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/20 to-transparent opacity-50 blur-3xl rounded-full"></div>
              <div className="relative h-[350px] md:h-[550px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-zinc-900">
                <Image 
                  src="/hero-laser.png" 
                  alt="Metalikum Pro Lasersko Sečenje"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS - Kartice koje "iskaču" */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 -mt-16 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projekata", val: "500+" },
            { label: "Tona Čelika", val: "100+" },
            { label: "Zadovoljnih klijenata", val: "200+" },
            { label: "Preciznost", val: "0.05mm" }
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-b from-zinc-800 to-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center shadow-xl">
              <p className="text-brand-red text-3xl md:text-4xl font-black mb-2">{stat.val}</p>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. QUICK INFO - Razbijanje crne pozadine sivom */}
      <section className="py-16 bg-zinc-900/40 border-y border-white/5 mb-32 rotate-[-1deg] w-[110%] -ml-[5%]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 rotate-[1deg]">
          {[
            { label: "Tehnologija", val: "FIBER LASER 2026", icon: "⚡" },
            { label: "Lokacija", val: "NOVA PAZOVA", icon: "📍" },
            { label: "Cena panela", val: "OD 50€ / m²", icon: "🏷️" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-2xl mb-3">{item.icon}</span>
              <p className="text-[10px] text-brand-red uppercase font-black tracking-widest mb-1">{item.label}</p>
              <p className="text-white font-bold text-2xl tracking-tight">{item.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES - Sa gradijentima umesto običnih okvira */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Premium <span className="text-brand-red">Usluge</span></h2>
<div className="flex items-center gap-3 mt-4">
    <span className="w-8 h-[1px] bg-brand-red"></span>
    <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
      Inženjerska rešenja za metalne konstrukcije
    </p>
  </div>            </div>
            <Link href="/kontakt" className="text-white bg-white/5 border border-white/10 py-3 px-6 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-brand-red hover:border-brand-red transition-all">Sve usluge</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Usluga 1 */}
            <div className="group bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5 hover:border-brand-red/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl group-hover:bg-brand-red/10 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Lasersko sečenje</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">Debljine do 20mm sa hirurškom preciznošću. Idealno za mašinske delove i kompleksne oblike.</p>
              <div className="w-12 h-12 rounded-full border border-brand-red/50 flex items-center justify-center group-hover:bg-brand-red transition-all">
                <span className="text-white group-hover:scale-110">→</span>
              </div>
            </div>

            {/* Usluga 2 - Istaknuta */}
            <div className="group bg-gradient-to-br from-brand-red to-red-900 p-12 rounded-[3rem] border-2 border-white/20 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Panelne Ograde</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">Unikatni CNC dezeni koji daju vašem domu modernu estetiku i maksimalnu privatnost.</p>
              <p className="text-white font-black text-2xl italic tracking-tighter">Već od 50€/m²</p>
            </div>

            {/* Usluga 3 */}
            <div className="group bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5 hover:border-brand-red/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl group-hover:bg-brand-red/10 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Savijanje Lima</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">Precizno savijanje na CNC presama za dobijanje savršenih uglova i kompleksnih profila.</p>
              <div className="w-12 h-12 rounded-full border border-brand-red/50 flex items-center justify-center group-hover:bg-brand-red transition-all">
                <span className="text-white group-hover:scale-110">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCES - Svetlija siva sekcija */}
      <section className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Brz <span className="text-brand-red">Put</span> Do Metala</h2>
            <div className="h-1 w-24 bg-brand-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upit i DXF", desc: "Pošaljite nacrte na email." },
              { step: "02", title: "Ponuda", desc: "Besplatna kalkulacija cene." },
              { step: "03", title: "Sečenje", desc: "Izrada na fiber laseru." },
              { step: "04", title: "Isporuka", desc: "Lično ili slanje kuririma." }
            ].map((item, i) => (
              <div key={i} className="relative group p-10 bg-black/50 border border-white/5 rounded-3xl hover:bg-brand-red transition-all duration-500">
                <span className="text-7xl font-black text-white/5 absolute top-4 right-6 group-hover:text-white/20">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white">{item.title}</h3>
                <p className="text-gray-500 text-sm group-hover:text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}