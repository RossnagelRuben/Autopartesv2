import React from 'react';
import { Icons } from './Icons';
import { motion } from 'motion/react';

export const Cart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto w-full px-6"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Tu Carrito</h1>
        <p className="text-on-surface-variant font-medium mt-2">3 artículos seleccionados con precisión técnica</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Product List */}
        <div className="lg:col-span-8 space-y-6">
          {[
            { name: 'Bujía Laser Iridium IZFR6K11', brand: 'NGK PLATINUM', oem: '9807B-561BW', price: 124.99, qty: 4, comp: 'Compatible: Honda Civic' },
            { name: 'Filtro de Aceite Sintético M1-110A', brand: 'MOBIL 1 PERFORMANCE', oem: '15400-PLM-A02', price: 45.50, qty: 1, comp: 'Larga Duración' },
            { name: 'Pastillas de Freno P28035', brand: 'BREMBO CERAMIC', oem: '45022-S01-A01', price: 89.00, qty: 1, comp: 'Certificación Técnica' }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-center transition-all hover:translate-x-1 duration-200">
              <div className="w-32 h-32 bg-surface-container rounded flex-shrink-0 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/cart${i}/300/300`} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{item.brand}</span>
                    <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                    <p className="text-xs text-on-surface-variant font-mono mt-1">OEM: {item.oem}</p>
                  </div>
                  <button className="text-on-surface-variant hover:text-error transition-colors">
                    <Icons.Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs px-2 py-0.5 bg-surface-container-high text-primary rounded-full font-bold">{item.comp}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4 min-w-[120px]">
                <div className="flex items-center border border-outline-variant/30 rounded overflow-hidden">
                  <button className="px-3 py-1 hover:bg-surface-container transition-colors">-</button>
                  <span className="px-4 py-1 text-sm font-bold border-x border-outline-variant/30">{item.qty}</span>
                  <button className="px-3 py-1 hover:bg-surface-container transition-colors">+</button>
                </div>
                <span className="text-xl font-bold text-primary font-headline">${item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Sidebar */}
        <aside className="lg:col-span-4 sticky top-24">
          <div className="bg-surface-container-low rounded-lg p-8 border-none backdrop-blur-md bg-opacity-80">
            <h2 className="text-2xl font-bold text-primary mb-8 border-b-2 border-primary-container pb-4">Resumen de Compra</h2>
            <div className="space-y-4 font-body">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal (3 productos)</span>
                <span className="font-medium text-on-surface">$259.49</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Costo de envío</span>
                <span className="font-medium text-primary">Gratis</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Impuestos estimados (IVA)</span>
                <span className="font-medium text-on-surface">$41.52</span>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/30">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <span className="text-3xl font-black text-primary font-headline">$301.01</span>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <button className="w-full bg-primary text-white py-4 rounded font-bold text-lg hover:scale-95 transition-transform duration-150 flex items-center justify-center gap-2">
                Finalizar Compra
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded border-none">
                <Icons.ShieldCheck className="w-6 h-6 text-tertiary" />
                <div className="text-[10px] leading-tight text-on-surface-variant">
                  <strong>PAGO PROTEGIDO</strong><br/>
                  Encriptación de grado militar para transacciones seguras.
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-tertiary-fixed/10 p-4 rounded-lg flex items-center gap-4">
            <Icons.Package className="w-5 h-5 text-tertiary" />
            <p className="text-xs text-on-tertiary-fixed font-medium">
              ¿Estas piezas son compatibles con tu <strong>Honda Civic 2018</strong>? 
              <a className="underline font-bold ml-1" href="#">Verificar ahora</a>
            </p>
          </div>
        </aside>
      </div>

      {/* Suggested Products */}
      <section className="mt-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary">Completá tu mantenimiento</h2>
            <p className="text-on-surface-variant">Basado en tus piezas seleccionadas</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:underline">
            Ver catálogo completo <Icons.ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest rounded-lg overflow-hidden group relative">
            <img 
              src="https://picsum.photos/seed/kit/800/600" 
              alt="Kit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 p-8">
              <span className="text-[10px] font-bold text-white bg-primary-container px-2 py-1 rounded">OFERTA DE TEMPORADA</span>
              <h3 className="text-2xl font-bold text-white mt-2">Kit Premium de Frenos Cerámicos</h3>
              <p className="text-white/80 text-sm mt-1 max-w-xs">Especialmente diseñado para altas temperaturas y uso intensivo.</p>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-white text-xl font-bold">$245.00</span>
                <button className="bg-white text-primary px-4 py-2 text-sm font-bold rounded flex items-center gap-2">
                  <Icons.ShoppingCart className="w-4 h-4" />
                  AGREGAR
                </button>
              </div>
            </div>
          </div>
          
          {[1, 2].map((i) => (
            <div key={i} className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors">
              <div>
                <div className="w-full aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/suggest${i}/300/300`} 
                    alt="Suggest" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-primary">Limpiador de Inyectores</h4>
                <p className="text-xs text-on-surface-variant">Liqui Moly Pro-Line 500ml</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-primary">$18.90</span>
                <button className="p-2 bg-surface-container rounded-full hover:bg-primary hover:text-white transition-all">
                  <Icons.Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
