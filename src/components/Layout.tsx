import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const {totalItems} = useCart();
  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 py-3 max-w-screen-2xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-black text-primary italic font-headline tracking-tighter">
            MotoParts Precision
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/search" className="font-headline text-sm font-bold tracking-tight text-primary border-b-2 border-primary pb-1">Categorías</Link>
            <a href="#" className="font-headline text-sm font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors">Ofertas</a>
            <a href="#" className="font-headline text-sm font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors">Vender</a>
            <a href="#" className="font-headline text-sm font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors">Ayuda</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-highest px-3 py-1.5 rounded-sm">
            <Icons.Search className="text-on-surface-variant w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar por OEM o pieza..." 
              className="bg-transparent border-none focus:ring-0 text-xs w-64 text-on-surface"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link to="/cart" className="p-2 hover:bg-surface-container rounded-sm transition-transform active:scale-95 relative" aria-label="Carrito">
              <Icons.ShoppingCart className="text-primary w-5 h-5" />
              {totalItems > 0 ? (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              ) : null}
            </Link>
            <button className="p-2 hover:bg-surface-container rounded-sm transition-transform active:scale-95">
              <Icons.Bell className="text-primary w-5 h-5" />
            </button>
            <Link to="/dashboard" className="p-2 hover:bg-surface-container rounded-sm transition-transform active:scale-95">
              <Icons.User className="text-primary w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full mt-auto border-t border-outline-variant/20 bg-surface-container-low py-12">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-headline font-bold text-primary text-lg tracking-widest uppercase">MotoParts Precision</span>
          <p className="mt-4 text-[10px] text-on-surface-variant font-body uppercase tracking-widest leading-loose">
            Arquitectura técnica para el mantenimiento profesional y la ingeniería mecánica automotriz.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h6 className="font-headline text-xs font-bold text-primary uppercase tracking-widest">Recursos</h6>
            <a href="#" className="text-on-surface-variant text-xs hover:text-primary transition-colors underline underline-offset-4">Documentación OEM</a>
            <a href="#" className="text-on-surface-variant text-xs hover:text-primary transition-colors underline underline-offset-4">Referencia API</a>
            <a href="#" className="text-on-surface-variant text-xs hover:text-primary transition-colors underline underline-offset-4">Garantía de Ajuste</a>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-headline text-xs font-bold text-primary uppercase tracking-widest">Soporte</h6>
            <a href="#" className="text-on-surface-variant text-xs hover:text-primary transition-colors underline underline-offset-4">Devoluciones</a>
            <a href="#" className="text-on-surface-variant text-xs hover:text-primary transition-colors underline underline-offset-4">Soporte Técnico</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h6 className="font-headline text-xs font-bold text-primary uppercase tracking-widest">Boletín Técnico</h6>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-surface-container-lowest border-none text-xs p-2 flex-1 rounded-sm focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Unirse</button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-outline-variant/10 px-6 text-center">
        <p className="text-[10px] font-body uppercase tracking-widest text-on-surface-variant">
          © 2024 MotoParts Precision. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
