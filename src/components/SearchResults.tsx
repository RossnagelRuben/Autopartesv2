import React, {useMemo, useState} from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {CompatibilityChecker} from './CompatibilityChecker';
import {useProducts} from '../context/ProductsContext';
import {useCart} from '../context/CartContext';
import {formatARS} from '../lib/formatMoney';

export const SearchResults = () => {
  const {productos, loading, fromNetwork, error, tipos} = useProducts();
  const {addItem} = useCart();
  const [selectedTipos, setSelectedTipos] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (selectedTipos.size === 0) return productos;
    return productos.filter((p) => selectedTipos.has(p.tipo));
  }, [productos, selectedTipos]);

  function toggleTipo(t: string) {
    setSelectedTipos((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6 flex gap-10"
    >
      <aside className="hidden lg:block w-72 shrink-0 space-y-8">
        <CompatibilityChecker className="mb-8" />
        <header>
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">Filtros</h2>
          <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest mt-1">Por tipo (hoja PRODUCTOS)</p>
        </header>

        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-primary mb-3">Tipo de vidrio</h3>
            <div className="space-y-2">
              {tipos.map((t) => (
                <label key={t} className="flex items-center gap-2 group cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTipos.has(t)}
                    onChange={() => toggleTipo(t)}
                    className="rounded-sm border-outline-variant text-primary focus:ring-primary"
                  />
                  <span
                    className={`text-sm group-hover:text-primary transition-colors ${
                      selectedTipos.has(t) ? 'text-on-surface font-medium' : 'text-on-surface-variant'
                    }`}
                  >
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </section>
        </div>
      </aside>

      <section className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
          <div>
            <span className="text-sm text-on-surface-variant">
              Catálogo: <strong className="text-on-surface font-bold">vidrios y lunetas</strong>
            </span>
            <span className="text-xs text-on-surface-variant block">
              {loading ? 'Cargando…' : `${filtered.length} artículos`}
              {!fromNetwork && !loading && error ? ` · datos locales (${error})` : null}
            </span>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.codigo}
                className="bg-surface-container-lowest group border border-transparent hover:border-primary/10 transition-all duration-300 flex flex-col"
              >
                <Link to={`/product/${encodeURIComponent(p.codigo)}`} className="block">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={p.imagenUrl}
                      alt={p.descripcion}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 tracking-tighter">
                        {p.tipo}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 flex-1">
                    <div className="space-y-1">
                      <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        {p.codigo}
                      </span>
                      <h3 className="font-bold text-on-surface leading-tight text-lg group-hover:text-primary transition-colors">
                        {p.descripcion}
                      </h3>
                      <p className="text-xs text-on-surface-variant">{p.modelo}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary font-headline tracking-tighter">
                        {formatARS(p.precioUnitario)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-5 pb-5 pt-0 border-t border-outline-variant/10 flex gap-2">
                  <Link
                    to={`/product/${encodeURIComponent(p.codigo)}`}
                    className="flex-1 text-center bg-surface-container-high text-primary py-2 text-xs font-bold tracking-tight hover:bg-surface-container transition-colors rounded"
                  >
                    Ver ficha
                  </Link>
                  <button
                    type="button"
                    onClick={() => addItem(p, 1)}
                    className="flex-1 bg-primary text-white py-2 text-xs font-bold tracking-tight hover:opacity-90 transition-opacity rounded"
                  >
                    Al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
};
