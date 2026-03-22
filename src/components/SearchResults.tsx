import React from 'react';
import { Icons } from './Icons';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CompatibilityChecker } from './CompatibilityChecker';

export const SearchResults = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6 flex gap-10"
    >
      {/* Sidebar Filters */}
      <aside className="hidden lg:block w-72 shrink-0 space-y-8">
        <CompatibilityChecker className="mb-8" />
        <header>
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">Filtros Técnicos</h2>
          <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest mt-1">Refinar Búsqueda</p>
        </header>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-primary mb-3">Marca de Vehículo</h3>
            <div className="space-y-2">
              {['Honda (124)', 'Yamaha (89)', 'Kawasaki (56)', 'Suzuki (34)'].map((brand, i) => (
                <label key={brand} className="flex items-center gap-2 group cursor-pointer">
                  <input 
                    type="checkbox" 
                    defaultChecked={i === 1}
                    className="rounded-sm border-outline-variant text-primary focus:ring-primary" 
                  />
                  <span className={`text-sm group-hover:text-primary transition-colors ${i === 1 ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-primary mb-3">Estado del Repuesto</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-primary text-white rounded-xl text-xs font-medium cursor-pointer">Nuevo</span>
              <span className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant rounded-xl text-xs font-medium cursor-pointer hover:bg-primary/10">Usado</span>
              <span className="px-3 py-1.5 bg-surface-container-high text-on-surface-variant rounded-xl text-xs font-medium cursor-pointer hover:bg-primary/10">Reacondicionado</span>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-primary mb-3">Rango de Precio</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input type="text" placeholder="Mín" className="bg-surface-container-high border-none rounded-lg p-2 text-xs focus:ring-1 focus:ring-primary" />
              <input type="text" placeholder="Máx" className="bg-surface-container-high border-none rounded-lg p-2 text-xs focus:ring-1 focus:ring-primary" />
            </div>
            <div className="h-1 bg-surface-container-high rounded-full relative">
              <div className="absolute inset-y-0 left-1/4 right-1/4 bg-primary rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm"></div>
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm"></div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-primary mb-3">Ubicación</h3>
            <div className="relative mb-3">
              <img 
                src="https://picsum.photos/seed/map/300/100" 
                alt="Map" 
                className="w-full h-24 object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 rounded-lg border border-outline-variant/20"></div>
            </div>
            <select className="w-full bg-surface-container-high border-none rounded-lg text-xs py-2 focus:ring-1 focus:ring-primary">
              <option>Ciudad de México</option>
              <option>Guadalajara</option>
              <option>Monterrey</option>
            </select>
          </section>
        </div>
      </aside>

      {/* Product Feed */}
      <section className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
          <div>
            <span className="text-sm text-on-surface-variant">Resultados para: <strong className="text-on-surface font-bold">"Pastillas de freno Yamaha"</strong></span>
            <span className="text-xs text-on-surface-variant block">124 artículos encontrados</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Ordenar por:</span>
            <div className="flex bg-surface-container-highest rounded-lg p-1">
              <button className="px-4 py-1 text-xs font-bold bg-white shadow-sm rounded-md text-primary">Relevancia</button>
              <button className="px-4 py-1 text-xs font-medium text-on-surface-variant hover:text-primary">Precio</button>
              <button className="px-4 py-1 text-xs font-medium text-on-surface-variant hover:text-primary">Recientes</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link to="/product/1" key={i} className="bg-surface-container-lowest group border border-transparent hover:border-primary/10 transition-all duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={`https://picsum.photos/seed/yamaha${i}/400/400`} 
                  alt="Product" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 tracking-tighter">OEM CERTIFIED</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Sistemas de Frenado</span>
                  <h3 className="font-bold text-on-surface leading-tight text-lg group-hover:text-primary transition-colors">Kit Pastillas de Freno Sinterizadas Yamaha MT-07</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-primary font-headline tracking-tighter">$1,250.00</span>
                    <span className="text-[10px] text-primary-container font-bold flex items-center gap-1">
                      <Icons.Package className="w-3 h-3" /> ENVÍO GRATIS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded-sm">100% COMPATIBLE</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/10 flex gap-2">
                  <button className="flex-1 bg-primary text-white py-2 text-xs font-bold tracking-tight hover:opacity-90 transition-opacity">COMPRAR AHORA</button>
                  <button className="w-10 flex items-center justify-center bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all">
                    <Icons.Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-surface-container-high">
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high">3</button>
          <span className="px-2 text-outline">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-high">12</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-primary hover:bg-surface-container-high">
            <Icons.ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </motion.div>
  );
};
