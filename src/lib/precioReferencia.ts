/** Precio de referencia estable por código (la planilla no trae columna precio). */
export function precioUnitarioDesdeCodigo(codigo: string): number {
  let h = 0;
  for (let i = 0; i < codigo.length; i++) {
    h = (h * 31 + codigo.charCodeAt(i)) | 0;
  }
  return 45000 + (Math.abs(h) % 95000);
}
