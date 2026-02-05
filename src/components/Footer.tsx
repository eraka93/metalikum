import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Kolona 1: Logo i Kratak opis */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Metalikum Pro Logo" fill className="object-contain" />
              </div>
              <span className="ml-3 font-black text-white tracking-tighter">
                METALIKUM <span className="text-brand-red">PRO</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Vrhunska obrada metala na fiber laseru najnovije generacije. Kvalitet iz Nove Pazove za celu Srbiju.
            </p>
          </div>

          {/* Kolona 2: Brzi linkovi */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Navigacija</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="/" className="hover:text-brand-red transition">Početna</Link></li>
              <li><Link href="/blog" className="hover:text-brand-red transition">Blog Žurnal</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-red transition">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kolona 3: Usluge (SEO linkovi) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Usluge</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-default transition">Lasersko Sečenje</li>
              <li className="hover:text-white cursor-default transition">Panelne Ograde</li>
              <li className="hover:text-white cursor-default transition">Savijanje Lima</li>
              <li className="hover:text-white cursor-default transition">CNC Probijanje</li>
            </ul>
          </div>

          {/* Kolona 4: Kontakt i podaci */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Podaci o firmi</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="text-white font-bold">Metalikum Pro DOO</li>
              <li>Cvije Kukolja 121, Nova Pazova</li>
              <li>PIB: 113172048</li>
              <li>MB: 21818318</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
          <p>© {currentYear} Metalikum Pro. Sva prava zadržana.</p>
          <div className="flex gap-6 italic">
            <span className="text-gray-400">Designed for Metal Industry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}