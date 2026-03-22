import type {Producto} from '../types/product';
import {precioUnitarioDesdeCodigo} from '../lib/precioReferencia';

/** Copia local por si falla la red o CORS en producción sin proxy. Misma hoja PRODUCTOS. */
const rows: Omit<Producto, 'precioUnitario'>[] = [
  {codigo: 'CR-001', descripcion: 'Parabrisas Laminado', tipo: 'Parabrisas', modelo: 'Toyota Hilux', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-002', descripcion: 'Luneta Térmica', tipo: 'Luneta', modelo: 'VW Gol Trend', imagenUrl: 'https://fullparabrisas.cl/wp-content/uploads/2025/07/que-es-una-luneta.jpg'},
  {codigo: 'CR-003', descripcion: 'Parabrisas c/ Sensor', tipo: 'Parabrisas', modelo: 'Ford Ranger', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-004', descripcion: 'Luneta Trasera Fija', tipo: 'Luneta', modelo: 'Fiat Cronos', imagenUrl: 'https://fullparabrisas.cl/wp-content/uploads/2025/07/que-es-una-luneta.jpg'},
  {codigo: 'CR-005', descripcion: 'Parabrisas Antiacústico', tipo: 'Parabrisas', modelo: 'Chevrolet Cruze', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-006', descripcion: 'Luneta Térmica Fume', tipo: 'Luneta', modelo: 'Peugeot 208', imagenUrl: 'https://fullparabrisas.cl/wp-content/uploads/2025/07/que-es-una-luneta.jpg'},
  {codigo: 'CR-007', descripcion: 'Parabrisas Degradé', tipo: 'Parabrisas', modelo: 'Honda Civic', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-008', descripcion: 'Luneta c/ Agujero', tipo: 'Luneta', modelo: 'Renault Sandero', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-009', descripcion: 'Parabrisas Panorámico', tipo: 'Parabrisas', modelo: 'Citroën C3', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-010', descripcion: 'Luneta Térmica Negra', tipo: 'Luneta', modelo: 'VW Amarok', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-011', descripcion: 'Parabrisas Camión', tipo: 'Parabrisas', modelo: 'MB Atego', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-012', descripcion: 'Luneta Curva', tipo: 'Luneta', modelo: 'Ford Ka', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-013', descripcion: 'Parabrisas Soporte', tipo: 'Parabrisas', modelo: 'Nissan Frontier', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-014', descripcion: 'Luneta Trasera', tipo: 'Luneta', modelo: 'Jeep Renegade', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-015', descripcion: 'Parabrisas Filtro UV', tipo: 'Parabrisas', modelo: 'Hyundai Tucson', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-016', descripcion: 'Luneta Térmica', tipo: 'Luneta', modelo: 'Toyota Corolla', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-017', descripcion: 'Parabrisas Antena', tipo: 'Parabrisas', modelo: 'Audi A4', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-018', descripcion: 'Luneta Básica', tipo: 'Luneta', modelo: 'Chevy Corsa', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-019', descripcion: 'Parabrisas Blindado', tipo: 'Parabrisas', modelo: 'Especial', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-020', descripcion: 'Luneta Térmica', tipo: 'Luneta', modelo: 'Ford EcoSport', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-021', descripcion: 'Parabrisas Serigrafía', tipo: 'Parabrisas', modelo: 'VW Vento', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-022', descripcion: 'Luneta Portón', tipo: 'Luneta', modelo: 'Renault Kangoo', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-023', descripcion: 'Parabrisas Laminado', tipo: 'Parabrisas', modelo: 'Fiat Toro', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-024', descripcion: 'Luneta Trasera', tipo: 'Luneta', modelo: 'Chevy Onix', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-025', descripcion: 'Parabrisas Térmico', tipo: 'Parabrisas', modelo: 'Ford Mondeo', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-026', descripcion: 'Luneta Deportiva', tipo: 'Luneta', modelo: 'Peugeot RCZ', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-027', descripcion: 'Parabrisas Utilitario', tipo: 'Parabrisas', modelo: 'MB Sprinter', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-028', descripcion: 'Luneta c/ Stop', tipo: 'Luneta', modelo: 'Honda HR-V', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-029', descripcion: 'Parabrisas Confort', tipo: 'Parabrisas', modelo: 'BMW Serie 3', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
  {codigo: 'CR-030', descripcion: 'Luneta Térmica', tipo: 'Luneta', modelo: 'Kia Sportage', imagenUrl: 'https://www.autofacil.es/wp-content/uploads/2022/08/apertura_parabrisas_funciones.jpg'},
];

export const PRODUCTS_FALLBACK: Producto[] = rows.map((r) => ({
  ...r,
  precioUnitario: precioUnitarioDesdeCodigo(r.codigo),
}));
