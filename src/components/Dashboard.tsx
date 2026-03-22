import React from 'react';
import { Icons } from './Icons';
import { motion } from 'motion/react';

export const UserDashboard = () => {
  return (
    <div className="flex gap-10">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 space-y-8">
        <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">RD</div>
          <div>
            <p className="text-sm font-bold text-on-surface">Ruben D.</p>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold">Nivel Avanzado</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          {[
            { icon: Icons.Package, label: 'Mis Compras', active: true },
            { icon: Icons.Star, label: 'Favoritos' },
            { icon: Icons.MessageSquare, label: 'Mensajes' },
            { icon: Icons.History, label: 'Historial' },
            { icon: Icons.Settings, label: 'Configuración' }
          ].map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg transition-all ${item.active ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">Mis Compras</h1>
            <p className="text-on-surface-variant text-sm">Seguimiento técnico de tus pedidos</p>
          </div>
          <div className="flex bg-surface-container-high p-1 rounded-lg">
            <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md text-primary">Todos</button>
            <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant">En camino</button>
            <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant">Entregados</button>
          </div>
        </header>

        <div className="space-y-4">
          {[
            { id: '#MP-99420', date: '22 Mar 2024', status: 'En camino', items: 2, total: 145.00, img: 'https://picsum.photos/seed/order1/100/100' },
            { id: '#MP-99418', date: '15 Mar 2024', status: 'Entregado', items: 1, total: 89.90, img: 'https://picsum.photos/seed/order2/100/100' }
          ].map((order) => (
            <div key={order.id} className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-6 flex items-center gap-6 hover:border-primary/20 transition-all group">
              <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0">
                <img src={order.img} alt="Order" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Pedido</p>
                  <p className="text-sm font-bold text-primary">{order.id}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Fecha</p>
                  <p className="text-sm font-bold text-on-surface">{order.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Estado</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${order.status === 'En camino' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-primary-container/20 text-primary'}`}>
                    {order.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total</p>
                  <p className="text-lg font-black text-primary">${order.total}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-primary text-white px-4 py-2 text-xs font-bold rounded hover:opacity-90 transition-all">Ver Detalle</button>
                <button className="text-primary text-xs font-bold hover:underline">Repetir Compra</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const SellerDashboard = () => {
  return (
    <div className="flex gap-10">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 space-y-8">
        <div className="p-6 bg-primary text-white rounded-2xl shadow-xl">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Ventas del Mes</p>
          <p className="text-3xl font-black mt-1">$12,450.00</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold bg-white/20 px-2 py-1 rounded w-fit">
            <Icons.TrendingUp className="w-3 h-3" /> +15% vs mes anterior
          </div>
        </div>
        
        <nav className="space-y-1">
          {[
            { icon: Icons.LayoutDashboard, label: 'Resumen', active: true },
            { icon: Icons.Package, label: 'Publicaciones' },
            { icon: Icons.MessageSquare, label: 'Preguntas (4)' },
            { icon: Icons.TrendingUp, label: 'Métricas' },
            { icon: Icons.Settings, label: 'Configuración' }
          ].map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg transition-all ${item.active ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">Panel del Vendedor</h1>
            <p className="text-on-surface-variant text-sm">Gestión de inventario y transacciones</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-all">
            <Icons.Plus className="w-5 h-5" />
            NUEVA PUBLICACIÓN
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg">
                <Icons.AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">Stock Bajo</h3>
            </div>
            <p className="text-2xl font-black text-on-surface">12 Artículos</p>
            <p className="text-xs text-on-surface-variant mt-1">Requieren reposición inmediata</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary-container/20 text-primary rounded-lg">
                <Icons.MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">Preguntas</h3>
            </div>
            <p className="text-2xl font-black text-on-surface">4 Pendientes</p>
            <p className="text-xs text-on-surface-variant mt-1">Tiempo de respuesta: 12 min</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-surface-container-highest text-primary rounded-lg">
                <Icons.Package className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary">Envíos</h3>
            </div>
            <p className="text-2xl font-black text-on-surface">8 Por despachar</p>
            <p className="text-xs text-on-surface-variant mt-1">Límite de entrega hoy: 17:00</p>
          </div>
        </div>

        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-primary">Publicaciones Activas</h2>
            <button className="text-primary text-xs font-bold hover:underline">Ver todas</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <tr>
                  <th className="px-6 py-4">Producto</th>
                  <th className="px-6 py-4">Precio</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Ventas</th>
                  <th className="px-6 py-4">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-outline-variant/10">
                {[
                  { name: 'Kit Distribución VW Bora 1.8T', price: 185.00, stock: 15, sales: 42, img: 'https://picsum.photos/seed/part1/100/100' },
                  { name: 'Bomba de Agua Audi A4 B8', price: 95.00, stock: 3, sales: 18, img: 'https://picsum.photos/seed/part2/100/100' },
                  { name: 'Juego Amortiguadores Monroe', price: 210.00, stock: 8, sales: 5, img: 'https://picsum.photos/seed/part3/100/100' }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img src={item.img} className="w-10 h-10 rounded bg-surface-container" referrerPolicy="no-referrer" />
                        <span className="font-bold text-primary">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold">${item.price}</td>
                    <td className="px-6 py-4">
                      <span className={`font-bold ${item.stock < 5 ? 'text-error' : 'text-on-surface'}`}>{item.stock}</span>
                    </td>
                    <td className="px-6 py-4">{item.sales}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-surface-container rounded-lg text-primary"><Icons.Settings className="w-4 h-4" /></button>
                        <button className="p-2 hover:bg-surface-container rounded-lg text-error"><Icons.Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export const Dashboard = () => {
  const [view, setView] = React.useState<'user' | 'seller'>('user');
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-24 pb-20 max-w-screen-2xl mx-auto px-6"
    >
      <div className="flex justify-center mb-12">
        <div className="bg-surface-container-high p-1 rounded-xl flex">
          <button 
            onClick={() => setView('user')}
            className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${view === 'user' ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant'}`}
          >
            Panel de Comprador
          </button>
          <button 
            onClick={() => setView('seller')}
            className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${view === 'seller' ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant'}`}
          >
            Panel de Vendedor
          </button>
        </div>
      </div>
      
      {view === 'user' ? <UserDashboard /> : <SellerDashboard />}
    </motion.div>
  );
};
