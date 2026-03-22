import React from 'react';
import { Icons } from './Icons';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920" 
            alt="Engine parts" 
            className="w-full h-full object-cover object-right opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 max-w-screen-2xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
              Ingeniería de Precisión
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold text-primary tracking-tighter leading-none mb-8">
              ENCUENTRA LA <br/>PIEZA EXACTA.
            </h1>
            
            <div className="bg-surface-container-lowest/80 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-surface-container-low px-4 py-3 rounded-lg flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Marca</label>
                  <select className="bg-transparent border-none p-0 focus:ring-0 font-medium text-sm text-primary">
                    <option>Seleccionar Marca</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes-Benz</option>
                  </select>
                </div>
                <div className="bg-surface-container-low px-4 py-3 rounded-lg flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Modelo</label>
                  <select className="bg-transparent border-none p-0 focus:ring-0 font-medium text-sm text-primary">
                    <option>Seleccionar Modelo</option>
                  </select>
                </div>
                <div className="bg-surface-container-low px-4 py-3 rounded-lg flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Año</label>
                  <select className="bg-transparent border-none p-0 focus:ring-0 font-medium text-sm text-primary">
                    <option>Seleccionar Año</option>
                  </select>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Icons.Search className="w-5 h-5" />
                BUSCAR REPUESTO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-24 max-w-screen-2xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Sistemas Críticos</h2>
            <p className="text-on-surface-variant font-medium">Categorías de alto rendimiento certificadas</p>
          </div>
          <Link to="/search" className="text-primary font-bold text-sm border-b-2 border-primary-container pb-1 hover:border-primary transition-all">Ver catálogo completo</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-8 flex flex-col justify-between hover:bg-surface-container transition-colors">
            <div className="relative z-10">
              <Icons.ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-headline text-3xl font-bold text-primary mb-2">Frenos</h3>
              <p className="max-w-xs text-on-surface-variant text-sm">Discos, pastillas y sistemas hidráulicos de alta fricción.</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800" 
              alt="Brake disc" 
              className="absolute right-0 bottom-0 w-1/2 h-full object-contain opacity-20 group-hover:opacity-40 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <button className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                Explorar <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-primary text-white p-8 flex flex-col justify-between">
            <div>
              <Icons.TrendingUp className="w-10 h-10 mb-4" />
              <h3 className="font-headline text-3xl font-bold mb-2">Suspensión</h3>
              <p className="text-primary-container text-sm">Amortiguación reactiva para control absoluto.</p>
            </div>
            <button className="bg-white text-primary px-4 py-3 rounded-lg text-xs font-bold w-full hover:bg-surface-container transition-colors">
              VER AMORTIGUADORES
            </button>
          </div>
          
          <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col justify-between">
            <div>
              <Icons.Package className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-headline text-3xl font-bold text-primary mb-2">Motor</h3>
              <p className="text-on-surface-variant text-sm">Componentes internos de precisión micrométrica.</p>
            </div>
            <button className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              Ver Componentes <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="md:col-span-8 bg-surface-container p-8 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-headline text-3xl font-bold text-primary">Transmisión & Kit</h3>
              <p className="text-on-surface-variant text-sm">Kits de embrague y cajas de transferencia.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center border border-outline-variant/20">
                <Icons.Settings className="text-primary w-8 h-8" />
              </div>
              <div className="w-20 h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center border border-outline-variant/20">
                <Icons.Package className="text-primary w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Offers */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-tertiary font-bold text-[10px] tracking-widest uppercase">Stock Limitado</span>
              <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter">OFERTAS DEL DÍA</h2>
            </div>
            <div className="flex gap-2">
              <div className="bg-surface-container-lowest p-2 rounded-lg border border-outline-variant/10 text-center min-w-[60px]">
                <span className="block text-xl font-bold text-primary">08</span>
                <span className="text-[8px] uppercase font-bold text-on-surface-variant">Hrs</span>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg border border-outline-variant/10 text-center min-w-[60px]">
                <span class="block text-xl font-bold text-primary">45</span>
                <span class="text-[8px] uppercase font-bold text-on-surface-variant">Min</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-surface-container-lowest p-6 border border-outline-variant/5 hover:border-primary/20 transition-all flex flex-col group">
                <div className="relative mb-6 bg-surface-container-low aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/part${i}/400/400`} 
                    alt="Part" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-error text-white px-2 py-1 text-[10px] font-bold rounded-sm">-25%</span>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Bosch Performance</span>
                  <h4 className="font-headline text-lg font-bold text-primary mb-2">Filtro de Aceite Serie M</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-full text-lg font-black">$45.00</span>
                    <span className="text-on-surface-variant line-through text-xs">$60.00</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex justify-between text-[10px] border-b border-outline-variant/10 pb-1">
                      <span className="text-on-surface-variant">OEM ID:</span>
                      <span className="font-bold text-primary">BX-99420-S</span>
                    </div>
                    <div className="flex justify-between text-[10px] border-b border-outline-variant/10 pb-1">
                      <span className="text-on-surface-variant">Compatibilidad:</span>
                      <span className="font-bold text-primary">BMW / Audi</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 font-bold text-xs tracking-widest uppercase hover:bg-primary-container transition-colors">
                  AÑADIR AL BOX
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-12">Socio Estratégico de las Mejores Marcas</p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:grayscale-0 transition-all">
            <div className="text-3xl font-headline font-black text-primary">MERCEDES</div>
            <div className="text-3xl font-headline font-black text-primary">AUDI</div>
            <div className="text-3xl font-headline font-black text-primary">BMW</div>
            <div className="text-3xl font-headline font-black text-primary">VOLVO</div>
            <div className="text-3xl font-headline font-black text-primary">TOYOTA</div>
            <div className="text-3xl font-headline font-black text-primary">HONDA</div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
