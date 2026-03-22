import {parseProductosCsv} from '../lib/parseProductsCsv';
import type {Producto} from '../types/product';
import {PRODUCTS_FALLBACK} from '../data/productsFallback';

function csvUrl(): string {
  const custom = import.meta.env.VITE_PRODUCTS_CSV_URL as string | undefined;
  if (custom?.trim()) return custom.trim();
  return '/api/sheet.csv';
}

export async function fetchProductosDesdeSheet(): Promise<{
  productos: Producto[];
  fromNetwork: boolean;
  error?: string;
}> {
  try {
    const res = await fetch(csvUrl(), {cache: 'no-store'});
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const text = await res.text();
    const parsed = parseProductosCsv(text);
    if (parsed.length === 0) {
      throw new Error('CSV sin filas válidas');
    }
    return {productos: parsed, fromNetwork: true};
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error desconocido';
    return {
      productos: PRODUCTS_FALLBACK,
      fromNetwork: false,
      error: msg,
    };
  }
}
