import type {Producto} from '../types/product';
import {precioUnitarioDesdeCodigo} from './precioReferencia';

function splitCsvRow(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function rowToProducto(cells: string[]): Producto | null {
  if (cells.length < 5) return null;
  const [codigo, descripcion, tipo, modelo, imagenUrl] = cells;
  if (!codigo || !descripcion) return null;
  if (/^c[oó]digo/i.test(codigo.trim())) return null;
  return {
    codigo: codigo.trim(),
    descripcion: descripcion.trim(),
    tipo: tipo.trim(),
    modelo: modelo.trim(),
    imagenUrl: imagenUrl.trim(),
    precioUnitario: precioUnitarioDesdeCodigo(codigo.trim()),
  };
}

export function parseProductosCsv(text: string): Producto[] {
  const clean = text.replace(/^\uFEFF/, '');
  const lines = clean.split(/\r?\n/).filter((l) => l.trim());
  const out: Producto[] = [];
  for (const line of lines) {
    const cells = splitCsvRow(line);
    const p = rowToProducto(cells);
    if (p) out.push(p);
  }
  return out;
}
