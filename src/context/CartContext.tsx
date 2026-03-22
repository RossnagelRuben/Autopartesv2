import React, {createContext, useCallback, useContext, useMemo, useSyncExternalStore} from 'react';
import type {CartLine, Producto} from '../types/product';

const STORAGE_KEY = 'autopartesv2-cart-v1';

type CartSnapshot = {lines: CartLine[]};

function loadSnapshot(): CartSnapshot {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {lines: []};
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== 'object' || !Array.isArray((data as CartSnapshot).lines)) {
      return {lines: []};
    }
    return data as CartSnapshot;
  } catch {
    return {lines: []};
  }
}

function saveSnapshot(s: CartSnapshot) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

let snapshot: CartSnapshot = typeof window === 'undefined' ? {lines: []} : loadSnapshot();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): CartSnapshot {
  return snapshot;
}

function setCart(mutate: (prev: CartSnapshot) => CartSnapshot) {
  snapshot = mutate(snapshot);
  saveSnapshot(snapshot);
  emit();
}

export function addItem(producto: Producto, cantidad = 1) {
  if (cantidad <= 0) return;
  setCart((prev) => {
    const lines = [...prev.lines];
    const i = lines.findIndex((l) => l.producto.codigo === producto.codigo);
    if (i === -1) {
      lines.push({producto, cantidad});
    } else {
      lines[i] = {...lines[i], cantidad: lines[i].cantidad + cantidad};
    }
    return {lines};
  });
}

export function updateCantidad(codigo: string, nuevaCantidad: number) {
  setCart((prev) => {
    if (nuevaCantidad <= 0) {
      return {lines: prev.lines.filter((l) => l.producto.codigo !== codigo)};
    }
    return {
      lines: prev.lines.map((l) =>
        l.producto.codigo === codigo ? {...l, cantidad: nuevaCantidad} : l,
      ),
    };
  });
}

export function removeItem(codigo: string) {
  setCart((prev) => ({
    lines: prev.lines.filter((l) => l.producto.codigo !== codigo),
  }));
}

export function clearCart() {
  setCart(() => ({lines: []}));
}

function useCartState() {
  return useSyncExternalStore(subscribe, getSnapshot, () => ({lines: []}));
}

type CartContextValue = {
  lines: CartLine[];
  totalItems: number;
  subtotal: number;
  addItem: (producto: Producto, cantidad?: number) => void;
  updateCantidad: (codigo: string, nuevaCantidad: number) => void;
  removeItem: (codigo: string) => void;
  clearCart: () => void;
  cantidadDe: (codigo: string) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({children}: {children: React.ReactNode}) {
  const {lines} = useCartState();

  const totalItems = useMemo(() => lines.reduce((s, l) => s + l.cantidad, 0), [lines]);
  const subtotal = useMemo(
    () => lines.reduce((s, l) => s + l.producto.precioUnitario * l.cantidad, 0),
    [lines],
  );

  const cantidadDe = useCallback(
    (codigo: string) => lines.find((l) => l.producto.codigo === codigo)?.cantidad ?? 0,
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      totalItems,
      subtotal,
      addItem,
      updateCantidad,
      removeItem,
      clearCart,
      cantidadDe,
    }),
    [lines, totalItems, subtotal, cantidadDe],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
  return ctx;
}
