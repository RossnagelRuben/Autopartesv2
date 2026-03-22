import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import type {Producto} from '../types/product';
import {fetchProductosDesdeSheet} from '../services/fetchProductos';

type ProductsContextValue = {
  productos: Producto[];
  loading: boolean;
  fromNetwork: boolean;
  error?: string;
  getByCodigo: (codigo: string) => Producto | undefined;
  tipos: string[];
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({children}: {children: React.ReactNode}) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromNetwork, setFromNetwork] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const r = await fetchProductosDesdeSheet();
      if (cancelled) return;
      setProductos(r.productos);
      setFromNetwork(r.fromNetwork);
      setError(r.error);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const tipos = useMemo(() => {
    const s = new Set<string>();
    productos.forEach((p) => {
      if (p.tipo) s.add(p.tipo);
    });
    return [...s].sort();
  }, [productos]);

  const getByCodigo = useMemo(() => {
    const map = new Map(productos.map((p) => [p.codigo, p]));
    return (codigo: string) => map.get(codigo);
  }, [productos]);

  const value = useMemo(
    () => ({
      productos,
      loading,
      fromNetwork,
      error,
      getByCodigo,
      tipos,
    }),
    [productos, loading, fromNetwork, error, getByCodigo, tipos],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts debe usarse dentro de ProductsProvider');
  return ctx;
}
