/**
 * Alineado al modelo Producto de Autopartes_LEO (Codigo, Descripcion, Tipo, Modelo, ImagenUrl).
 * La hoja de Google no incluye precio; se usa un valor de referencia estable por código.
 */
export interface Producto {
  codigo: string;
  descripcion: string;
  tipo: string;
  modelo: string;
  imagenUrl: string;
  precioUnitario: number;
}

export interface CartLine {
  producto: Producto;
  cantidad: number;
}
