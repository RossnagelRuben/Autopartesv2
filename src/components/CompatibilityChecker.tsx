import React from 'react';
import { Icons } from './Icons';

interface CompatibilityCheckerProps {
  className?: string;
}

export const CompatibilityChecker: React.FC<CompatibilityCheckerProps> = ({ className }) => {
  return (
    <div className={`bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary text-white rounded-md">
          <Icons.ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-tight">Verificador de Compatibilidad</h4>
          <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">Garantía de Ajuste Preciso</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">VIN / Chasis</label>
          <input 
            type="text" 
            placeholder="17 caracteres..." 
            className="w-full bg-surface-container-lowest border-none rounded p-2 text-xs focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Motor</label>
          <select className="w-full bg-surface-container-lowest border-none rounded p-2 text-xs focus:ring-1 focus:ring-primary">
            <option>Seleccionar Código</option>
            <option>1.8T (AUM)</option>
            <option>2.0 TSI (CCZA)</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full bg-primary text-white py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
            VALIDAR PIEZA
          </button>
        </div>
      </div>
    </div>
  );
};
