import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      
      {/* Veliki pozadinski tekst za "industrijski" vibe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20rem] md:text-[35rem] font-black text-white/[0.02] leading-none select-none">
          404
        </span>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red text-xs font-black uppercase tracking-widest mb-6 border border-brand-red/20">
          GRESKA_U_PUTANJI
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
          STRANICA JE <br /> <span className="text-brand-red">NESTALA</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-12 font-medium">
          Tražena pozicija ne postoji u našem sistemu. Proverite adresu ili se vratite na početnu stranu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-brand-red hover:bg-red-700 text-white py-5 px-10 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Nazad na početnu
          </Link>
          <Link 
            href="/kontakt" 
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 py-5 px-10 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
          >
            Prijavi problem
          </Link>
        </div>
      </div>

      {/* Svetlosni efekat u uglu */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/10 blur-[120px] rounded-full"></div>
    </main>
  );
}