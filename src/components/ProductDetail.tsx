import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Icons} from './Icons';
import {motion} from 'motion/react';
import {CompatibilityChecker} from './CompatibilityChecker';
import {useProducts} from '../context/ProductsContext';
import {useCart} from '../context/CartContext';
import {formatARS} from '../lib/formatMoney';

export const ProductDetail = () => {
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const {getByCodigo, loading} = useProducts();
  const {addItem, cantidadDe} = useCart();

  const codigo = id ? decodeURIComponent(id) : '';
  const producto = codigo ? getByCodigo(codigo) : undefined;
  const enCarrito = cantidadDe(codigo);

  if (!loading && !producto) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6 text-center"
      >
        <h1 className="text-2xl font-bold text-primary mb-4">Producto no encontrado</h1>
        <p className="text-on-surface-variant mb-6">Código: {codigo || '—'}</p>
        <button type="button" onClick={() => navigate('/search')} className="text-primary font-bold underline">
          Volver al catálogo
        </button>
      </motion.div>
    );
  }

  if (!producto) {
    return (
      <div className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6">
        <div className="h-96 bg-surface-container-low rounded-lg animate-pulse" />
      </div>
    );
  }

  const p = producto;

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6"
    >
      <nav className="flex gap-2 text-xs font-label uppercase tracking-widest text-on-surface-variant mb-10">
        <Link to="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link to="/search" className="hover:text-primary transition-colors">
          Catálogo
        </Link>
        <span>/</span>
        <span className="text-primary font-bold">{p.descripcion}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-lg overflow-hidden group">
            <img
              src={p.imagenUrl}
              alt={p.descripcion}
              className="w-full max-h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-2">
            <span className="bg-tertiary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">
              {p.tipo}
            </span>
          </div>
          <h1 className="text-4xl font-headline font-bold text-on-surface leading-tight mb-4 tracking-tight">{p.descripcion}</h1>

          <p className="text-sm text-on-surface-variant mb-6">
            <span className="font-mono font-bold text-primary">{p.codigo}</span>
            {' · '}
            Modelo referencia: <strong>{p.modelo}</strong>
          </p>

          <div className="bg-surface-container-low p-6 rounded-lg mb-8">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-headline font-bold text-on-surface">{formatARS(p.precioUnitario)}</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">
              Precio referencia (planilla sin columna precio). Consultá valor final al cotizar.
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant mb-6">
              <Icons.Package className="w-5 h-5" />
              <span className="text-sm">Stock y envío según disponibilidad</span>
            </div>
            <CompatibilityChecker className="mb-6 bg-surface-container-lowest border-none" />
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => addItem(p, 1)}
                className="w-full bg-primary text-white font-bold py-4 rounded transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Icons.ShoppingCart className="w-5 h-5" />
                Agregar al carrito
                {enCarrito > 0 ? ` (${enCarrito} en carrito)` : ''}
              </button>
              <Link
                to="/cart"
                className="w-full text-center bg-surface-container-lowest border-2 border-primary text-primary font-bold py-4 rounded transition-all hover:bg-primary/5 active:scale-95"
              >
                Ver carrito
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-headline font-bold mb-8 border-l-4 border-primary pl-4">Datos del ítem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 rounded">
            <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest block mb-4">
              Descripción
            </span>
            <p className="text-on-surface leading-relaxed">{p.descripcion}</p>
          </div>
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10 rounded">
            <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest block mb-4">
              Compatibilidad referencia
            </span>
            <p className="text-on-surface leading-relaxed">
              Indicado para <strong>{p.modelo}</strong>. Verificá medidas y año con tu vehículo antes de comprar.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
