"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group" onClick={closeMenu}>
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Metalikum Pro Logo" fill className="object-contain" />
              </div>
              <div className="ml-3 flex flex-col">
                <span className="font-black text-lg md:text-xl text-white tracking-tighter leading-none">
                  METALIKUM <span className="text-brand-red">PRO</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold hidden sm:block">Nova Pazova</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-xs font-bold text-gray-300 hover:text-brand-red transition tracking-widest">POČETNA</Link>
            <Link href="/blog" className="text-xs font-bold text-gray-300 hover:text-brand-red transition tracking-widest">BLOG</Link>
            <Link href="/kontakt" className="bg-brand-red text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20">KONTAKT</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white" aria-label="Menu">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2.5} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Popravljen Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/5 h-screen flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <Link href="/" onClick={closeMenu} className="text-xl font-bold text-white border-b border-white/5 py-4 w-full">Početna</Link>
          <Link href="/blog" onClick={closeMenu} className="text-xl font-bold text-white border-b border-white/5 py-4 w-full">Blog Žurnal</Link>
          <Link href="/kontakt" onClick={closeMenu} className="text-xl font-bold text-white border-b border-white/5 py-4 w-full text-brand-red">Kontakt</Link>
          
          <div className="pt-10 text-center">
             <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-mono">Direktan poziv:</p>
             <a href="tel:0646621809" className="text-2xl font-black text-white">064 662 1809</a>
          </div>
        </div>
      )}
    </nav>
  );
}