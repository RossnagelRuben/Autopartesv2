import React from 'react';
import {Link} from 'react-router-dom';
import {Icons} from './Icons';
import {motion} from 'motion/react';
import {useCart} from '../context/CartContext';
import {useProducts} from '../context/ProductsContext';
import {formatARS} from '../lib/formatMoney';

export const Cart = () => {
  const {lines, subtotal, updateCantidad, removeItem, totalItems, addItem} = useCart();
  const {productos} = useProducts();

  const iva = Math.round(subtotal * 0.21);
  const total = subtotal + iva;

  const sugeridos = productos.filter((p) => !lines.some((l) => l.producto.codigo === p.codigo)).slice(0, 2);

  if (lines.length === 0) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="pt-24 pb-20 max-w-screen-2xl mx-auto w-full px-6 text-center"
      >
        <Icons.ShoppingCart className="w-16 h-16 text-on-surface-variant mx-auto mb-6 opacity-40" />
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">Tu carrito está vacío</h1>
        <p className="text-on-surface-variant font-medium mb-8">Agregá productos desde el catálogo.</p>
        <Link
          to="/search"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Ver catálogo
          <Icons.ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto w-full px-6"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Tu carrito</h1>
        <p className="text-on-surface-variant font-medium mt-2">
          {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-6">
          {lines.map(({producto: p, cantidad: qty}) => (
            <div
              key={p.codigo}
              className="bg-surface-container-lowest rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-center transition-all hover:translate-x-1 duration-200"
            >
              <div className="w-32 h-32 bg-surface-container rounded flex-shrink-0 overflow-hidden">
                <img
                  src={p.imagenUrl || 'https://picsum.photos/seed/cart/300/300'}
                  alt={p.descripcion}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow space-y-1 w-full sm:w-auto">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      {p.tipo}
                    </span>
                    <h3 className="text-lg font-bold text-primary">{p.descripcion}</h3>
                    <p className="text-xs text-on-surface-variant font-mono mt-1">Código: {p.codigo}</p>
                    <p className="text-xs text-on-surface-variant mt-1">Vehículo: {p.modelo}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(p.codigo)}
                    className="text-on-surface-variant hover:text-error transition-colors shrink-0"
                    aria-label="Quitar del carrito"
                  >
                    <Icons.Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4 min-w-[120px] w-full sm:w-auto">
                <div className="flex items-center border border-outline-variant/30 rounded overflow-hidden">
                  <button
                    type="button"
                    className="px-3 py-1 hover:bg-surface-container transition-colors"
                    onClick={() => updateCantidad(p.codigo, qty - 1)}
                  >
                    −
                  </button>
                  <span className="px-4 py-1 text-sm font-bold border-x border-outline-variant/30">{qty}</span>
                  <button
                    type="button"
                    className="px-3 py-1 hover:bg-surface-container transition-colors"
                    onClick={() => updateCantidad(p.codigo, qty + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-xl font-bold text-primary font-headline">{formatARS(p.precioUnitario * qty)}</span>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4 sticky top-24">
          <div className="bg-surface-container-low rounded-lg p-8 border-none backdrop-blur-md bg-opacity-80">
            <h2 className="text-2xl font-bold text-primary mb-8 border-b-2 border-primary-container pb-4">Resumen</h2>
            <div className="space-y-4 font-body">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal ({totalItems} ítems)</span>
                <span className="font-medium text-on-surface">{formatARS(subtotal)}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Envío</span>
                <span className="font-medium text-primary">A coordinar</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>IVA estimado (21%)</span>
                <span className="font-medium text-on-surface">{formatARS(iva)}</span>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/30">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <span className="text-3xl font-black text-primary font-headline">{formatARS(total)}</span>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <button
                type="button"
                className="w-full bg-primary text-white py-4 rounded font-bold text-lg hover:scale-95 transition-transform duration-150 flex items-center justify-center gap-2"
              >
                Finalizar compra
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded border-none">
                <Icons.ShieldCheck className="w-6 h-6 text-tertiary" />
                <div className="text-[10px] leading-tight text-on-surface-variant">
                  <strong>PAGO PROTEGIDO</strong>
                  <br />
                  Los precios son referencia; confirmá disponibilidad con el vendedor.
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {sugeridos.length > 0 ? (
        <section className="mt-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-primary">Te puede interesar</h2>
              <p className="text-on-surface-variant">Del mismo catálogo</p>
            </div>
            <Link to="/search" className="text-primary font-bold flex items-center gap-1 hover:underline">
              Ver catálogo <Icons.ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sugeridos.map((p) => (
              <div
                key={p.codigo}
                className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-surface-container rounded-lg overflow-hidden shrink-0">
                    <img
                      src={p.imagenUrl}
                      alt=""
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{p.descripcion}</h4>
                    <p className="text-xs text-on-surface-variant">{p.modelo}</p>
                    <p className="font-bold text-primary mt-2">{formatARS(p.precioUnitario)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(p, 1)}
                  className="mt-4 w-full py-3 bg-primary text-white font-bold text-sm rounded flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <Icons.Plus className="w-4 h-4" />
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </motion.div>
  );
};
