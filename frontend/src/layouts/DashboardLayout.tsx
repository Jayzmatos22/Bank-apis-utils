import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  TrendingUp,
  BarChart2,
  DollarSign,
  Map,
  ChevronDown,
  ChevronRight,
  Activity,
  Wallet,
  Globe,
  Landmark,
  Bitcoin,
  Coins,
  Users,
  Building2,
  Database,
} from 'lucide-react';

// ─── Estrutura de navegação ───────────────────────────────────────────────────

const NAV = [
  {
    group: 'Economia',
    icon: TrendingUp,
    items: [
      { label: 'Indicadores',   path: '/dashboard/economia',         icon: Activity   },
      { label: 'Salário Mínimo',path: '/dashboard/economia/salario', icon: Wallet     },
      { label: 'PIB Brasil',    path: '/dashboard/economia/pib',     icon: Globe      },
    ],
  },
  {
    group: 'Mercado',
    icon: BarChart2,
    items: [
      { label: 'Ações',  path: '/dashboard/mercado/acoes',  icon: BarChart2 },
      { label: 'Metais', path: '/dashboard/mercado/metais', icon: Coins     },
    ],
  },
  {
    group: 'Moedas',
    icon: DollarSign,
    items: [
      { label: 'Câmbio',       path: '/dashboard/moedas/cambio', icon: DollarSign },
      { label: 'Criptomoedas', path: '/dashboard/moedas/cripto', icon: Bitcoin    },
    ],
  },
  {
    group: 'Brasil',
    icon: Map,
    items: [
      { label: 'IBGE',   path: '/dashboard/brasil/ibge',   icon: Map       },
      { label: 'IPEA',   path: '/dashboard/brasil/ipea',   icon: Users     },
      { label: 'Bancos', path: '/dashboard/brasil/bancos', icon: Building2 },
    ],
  },
] as const;

// ─── Estilos reutilizáveis ────────────────────────────────────────────────────

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all',
    isActive
      ? 'bg-yellow-500/15 text-yellow-400 font-medium'
      : 'text-slate-400 hover:text-white hover:bg-slate-800',
  ].join(' ');

// ─── Componente ──────────────────────────────────────────────────────────────

export default function DashboardLayout() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    Economia: true,
    Mercado: true,
    Moedas: true,
    Brasil: true,
  });

  const toggle = (group: string) =>
    setOpen((prev) => ({ ...prev, [group]: !prev[group] }));

  return (
    <div className="min-h-screen flex bg-slate-950">

      {/* ── Sidebar ── */}
      <aside className="w-60 min-h-screen bg-slate-900 border-r border-slate-700 flex flex-col shrink-0">

        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-5 border-b border-slate-700">
          <Database size={20} className="text-yellow-500" />
          <span className="text-white font-bold tracking-wider text-sm">Brasil Panel</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto">
          {NAV.map(({ group, icon: GroupIcon, items }) => (
            <div key={group} className="mb-1">

              {/* Cabeçalho do grupo */}
              <button
                onClick={() => toggle(group)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-slate-300
                           hover:bg-slate-800 transition-all text-sm font-semibold"
              >
                <GroupIcon size={15} className="text-yellow-500 shrink-0" />
                <span className="flex-1 text-left">{group}</span>
                {open[group]
                  ? <ChevronDown  size={14} className="text-slate-500" />
                  : <ChevronRight size={14} className="text-slate-500" />
                }
              </button>

              {/* Itens do grupo */}
              {open[group] && (
                <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-slate-700 pl-3">
                  {items.map(({ label, path, icon: ItemIcon }) => (
                    <NavLink
                      key={path}
                      to={path}
                      end
                      className={linkClass}
                    >
                      <ItemIcon size={14} className="shrink-0" />
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Rodapé da sidebar */}
        <div className="px-5 py-4 border-t border-slate-700 text-xs text-slate-600">
          brasil_panel © {new Date().getFullYear()}
        </div>
      </aside>

      {/* ── Conteúdo principal ── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
