import React from 'react';
import { Icons } from './Icons';
import { motion } from 'motion/react';
import { CompatibilityChecker } from './CompatibilityChecker';

export const ProductDetail = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6"
    >
      {/* Breadcrumbs */}
      <nav className="flex gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant mb-10">
        <a href="#" className="hover:text-primary transition-colors">Inicio</a>
        <span>/</span>
        <a href="#" className="hover:text-primary transition-colors">Frenos</a>
        <span>/</span>
        <span className="text-primary font-bold">Pastillas Brembo Sinterizadas</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 bg-surface-container-lowest rounded-lg overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/brembo1/800/500" 
              alt="Brembo" 
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-20 h-20 md:w-24 md:h-24 bg-surface-container-lowest border-2 rounded overflow-hidden flex-shrink-0 cursor-pointer ${i === 1 ? 'border-primary' : 'border-outline-variant/30'}`}>
                <img 
                  src={`https://picsum.photos/seed/brembo${i}/200/200`} 
                  alt="Thumb" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-2">
            <span className="bg-tertiary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">Premium Verified</span>
          </div>
          <h1 className="text-4xl font-headline font-bold text-on-surface leading-tight mb-4 tracking-tight">Pastillas de Freno Brembo Sinterizadas Serie Oro - Delanteras</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-tertiary">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icons.Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-on-surface-variant font-label">(128 opiniones)</span>
          </div>

          <div className="bg-surface-container-low p-6 rounded-lg mb-8">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-headline font-bold text-on-surface">$124.990</span>
              <span className="text-sm text-on-surface-variant line-through">$149.990</span>
            </div>
            <p className="text-primary font-medium text-sm mb-4">6 cuotas sin interés de $20.831</p>
            <div className="flex items-center gap-2 text-on-surface-variant mb-6">
              <Icons.Package className="w-5 h-5" />
              <span className="text-sm">Envío gratis a todo el país</span>
            </div>
            <CompatibilityChecker className="mb-6 bg-surface-container-lowest border-none" />
            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary text-white font-bold py-4 rounded transition-all active:scale-95 flex items-center justify-center gap-2">
                Comprar ahora
              </button>
              <button className="w-full bg-surface-container-lowest border-2 border-primary text-primary font-bold py-4 rounded transition-all hover:bg-primary/5 active:scale-95 flex items-center justify-center gap-2">
                <Icons.ShoppingCart className="w-5 h-5" />
                Agregar al carrito
              </button>
            </div>
          </div>

          <div className="border-t border-outline-variant/20 pt-6">
            <h3 className="font-headline font-bold text-sm uppercase tracking-widest mb-4">Vendedor</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white font-bold">MP</div>
              <div>
                <p className="text-sm font-bold text-on-surface">MotoParts Precision S.A.</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-wide">Vendedor Platinum - 10 años en el sitio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="mt-24 space-y-20">
        <section>
          <h2 className="text-3xl font-headline font-bold mb-8 border-l-4 border-primary pl-4">Descripción Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 rounded">
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest block mb-4">Composición</span>
              <p className="text-on-surface leading-relaxed">Compuesto sinterizado de alto rendimiento desarrollado para uso en carretera y deportivo exigente. Ofrece una fricción constante en todas las temperaturas.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 rounded">
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest block mb-4">Ventajas</span>
              <ul className="space-y-3 text-sm text-on-surface">
                {['Frenado inicial inmediato', 'Baja rumorosidad acústica', 'Mayor vida útil del disco'].map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="w-5 h-5 text-primary" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container p-8 rounded flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase">Coeficiente de fricción</span>
                <span className="text-xs font-bold text-primary">0.55 µ</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[85%]"></div>
              </div>
              <div className="flex justify-between items-center mt-6 mb-2">
                <span className="text-xs font-bold uppercase">Resistencia térmica</span>
                <span className="text-xs font-bold text-primary">650°C</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility */}
        <section>
          <h2 className="text-3xl font-headline font-bold mb-8 border-l-4 border-primary pl-4">Tabla de Compatibilidad</h2>
          <div className="overflow-x-auto rounded-lg border border-outline-variant/15">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white font-headline uppercase text-xs tracking-widest">
                <tr>
                  <th className="px-6 py-4">Marca</th>
                  <th className="px-6 py-4">Modelo</th>
                  <th className="px-6 py-4">Año</th>
                  <th className="px-6 py-4">Posición</th>
                  <th className="px-6 py-4">Estado</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body">
                {[
                  { m: 'BMW', mod: 'R 1250 GS / Adventure', y: '2018 - 2024', p: 'Delantera' },
                  { m: 'BMW', mod: 'S 1000 XR', y: '2015 - 2023', p: 'Delantera' },
                  { m: 'KTM', mod: '1290 Super Adventure R/S', y: '2017 - 2024', p: 'Delantera' },
                  { m: 'Ducati', mod: 'Multistrada V4', y: '2021 - 2024', p: 'Delantera' }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'hover:bg-surface-container-low transition-colors' : 'bg-surface-container-low/30 hover:bg-surface-container-low transition-colors'}>
                    <td className="px-6 py-4 font-bold">{row.m}</td>
                    <td className="px-6 py-4">{row.mod}</td>
                    <td className="px-6 py-4">{row.y}</td>
                    <td className="px-6 py-4">{row.p}</td>
                    <td className="px-6 py-4"><span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">Compatible</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant italic">
            <Icons.Info className="w-4 h-4" />
            Si tu modelo no figura en la lista, consúltanos en la sección de preguntas.
          </div>
        </section>

        {/* Q&A */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-headline font-bold mb-8 border-l-4 border-primary pl-4">Preguntas al Vendedor</h2>
          <div className="mb-10">
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Haz una pregunta</label>
            <div className="flex gap-4">
              <textarea className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 focus:ring-primary focus:border-primary min-h-[100px]" placeholder="Escribe tu duda técnica aquí..."></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-primary text-white px-8 py-3 font-bold rounded hover:opacity-90 transition-all">Preguntar</button>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-lg font-headline font-bold border-b border-outline-variant/10 pb-4">Últimas preguntas</h3>
            {[
              { q: '¿Vienen las dos pastillas para el disco delantero o es solo una?', a: 'El juego incluye las 2 pastillas para un caliper delantero. Si tu moto lleva doble disco, necesitas comprar 2 juegos.' },
              { q: '¿Sirven para una Suzuki V-Strom 650 año 2021?', a: '¡Hola! No, para ese modelo de Suzuki el código de pastilla es el 07SU26SA. Las tenemos en stock, puedes buscarlas en nuestro listado.' }
            ].map((qa, i) => (
              <div key={i} className="group">
                <p className="text-on-surface font-medium mb-2">{qa.q}</p>
                <div className="flex gap-4 ml-6 pl-4 border-l-2 border-outline-variant/20">
                  <Icons.ChevronRight className="w-4 h-4 text-on-surface-variant" />
                  <div>
                    <p className="text-on-surface-variant text-sm mb-1">{qa.a}</p>
                    <span className="text-[10px] text-outline uppercase font-bold">Respuesta del vendedor - Hace {i + 2} horas</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};
