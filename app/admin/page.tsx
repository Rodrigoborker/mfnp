"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  MapPin,
  FileText,
  BookOpen,
  HelpCircle,
  Quote,
  Users,
  Search,
  Settings,
  Plus,
  Pencil,
  type LucideIcon,
} from "lucide-react";

type NavItem = { id: string; label: string; icon: LucideIcon };

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "imoveis", label: "Imóveis", icon: Building2 },
  { id: "destinos", label: "Destinos", icon: MapPin },
  { id: "artigos", label: "Artigos", icon: FileText },
  { id: "guias", label: "Guias", icon: BookOpen },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "depoimentos", label: "Depoimentos", icon: Quote },
  { id: "leads", label: "Leads", icon: Users },
  { id: "seo", label: "SEO", icon: Search },
  { id: "config", label: "Configurações", icon: Settings },
];

const STATS = [
  { label: "Imóveis publicados", value: "18" },
  { label: "Leads novos (7 dias)", value: "9" },
  { label: "Artigos em rascunho", value: "3" },
  { label: "Destinos ativos", value: "4" },
];

const LEADS = [
  {
    name: "Marcos Alves",
    location: "Porto de Galinhas",
    source: "Formulário",
    status: "Novo",
    style: "bg-orange/10 text-orange",
    date: "14/09",
  },
  {
    name: "Beatriz Lima",
    location: "São Miguel dos Milagres",
    source: "WhatsApp",
    status: "Em contato",
    style: "bg-navy/10 text-navy",
    date: "13/09",
  },
  {
    name: "Carlos Souza",
    location: "Praia dos Carneiros",
    source: "Formulário",
    status: "Qualificado",
    style: "bg-green-100 text-green-700",
    date: "12/09",
  },
  {
    name: "Fernanda Reis",
    location: "Tamandaré",
    source: "Instagram",
    status: "Novo",
    style: "bg-orange/10 text-orange",
    date: "11/09",
  },
  {
    name: "João Pedro",
    location: "Porto de Galinhas",
    source: "Formulário",
    status: "Perdido",
    style: "bg-gray-100 text-gray-500",
    date: "09/09",
  },
];

const PROPERTIES = [
  {
    name: "Studio Frente-Mar, Porto de Galinhas",
    destination: "Porto de Galinhas",
    status: "Publicado",
    style: "bg-green-100 text-green-700",
    updated: "Há 2 dias",
  },
  {
    name: "Flat Vista Mar, Tamandaré",
    destination: "Tamandaré",
    status: "Publicado",
    style: "bg-green-100 text-green-700",
    updated: "Há 5 dias",
  },
  {
    name: "Loft Carneiros",
    destination: "Praia dos Carneiros",
    status: "Rascunho",
    style: "bg-gray-100 text-gray-500",
    updated: "Há 1 dia",
  },
  {
    name: "Casa Milagres",
    destination: "São Miguel dos Milagres",
    status: "Despublicado",
    style: "bg-red-100 text-red-700",
    updated: "Há 9 dias",
  },
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const activeLabel =
    NAV_ITEMS.find((item) => item.id === activeSection)?.label ?? "";

  return (
    <div className="flex min-h-screen bg-surface-alt font-sans text-ink">
      <aside className="flex w-60 shrink-0 flex-col bg-navy-dark text-white">
        <div className="border-b border-white/10 px-5 py-6">
          <div className="font-heading text-base font-extrabold">
            Meu Flat <span className="text-orange-light">na Praia</span>
          </div>
          <div className="mt-0.5 text-xs text-white/50">
            Painel administrativo
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 p-3">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeSection;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-3 rounded-brand px-3.5 py-2.5 text-left text-sm font-medium ${
                  isActive
                    ? "bg-orange/15 text-orange-light"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                <item.icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2.5 border-t border-white/10 px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[13px] font-bold">
            RM
          </div>
          <div className="text-[13px]">
            <div className="font-semibold">Rodrigo M.</div>
            <div className="text-[11px] text-white/50">Administrador</div>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 bg-surface-alt">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-white px-8 py-4.5">
          <h1 className="font-heading text-lg font-bold text-navy">
            {activeLabel}
          </h1>
          <button
            type="button"
            className="flex items-center gap-2 rounded-brand bg-orange px-4.5 py-2.5 text-sm font-semibold text-white hover:bg-orange/90"
          >
            <Plus className="h-4 w-4" aria-hidden />
            Novo
          </button>
        </header>

        <div className="p-8">
          <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-border bg-white p-5"
              >
                <div className="mb-2 text-[13px] text-ink-soft">
                  {stat.label}
                </div>
                <div className="font-heading text-2xl font-extrabold text-navy">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border bg-white">
            <div className="flex items-center justify-between border-b border-border px-5 py-4.5">
              <span className="font-heading text-[15px] font-bold text-navy">
                Leads recentes
              </span>
              <span className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-soft">
                Todos
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.03em] text-ink-soft">
                    <th className="px-5 py-3 font-semibold">Nome</th>
                    <th className="px-5 py-3 font-semibold">Localização</th>
                    <th className="px-5 py-3 font-semibold">Origem</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                    <th className="px-5 py-3 font-semibold">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {LEADS.map((lead) => (
                    <tr key={lead.name} className="border-t border-border">
                      <td className="px-5 py-3.5 font-semibold text-navy">
                        {lead.name}
                      </td>
                      <td className="px-5 py-3.5 text-ink-soft">
                        {lead.location}
                      </td>
                      <td className="px-5 py-3.5 text-ink-soft">
                        {lead.source}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${lead.style}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-ink-soft">
                        {lead.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 border border-border bg-white">
            <div className="border-b border-border px-5 py-4.5 font-heading text-[15px] font-bold text-navy">
              Imóveis
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.03em] text-ink-soft">
                    <th className="px-5 py-3 font-semibold">Nome</th>
                    <th className="px-5 py-3 font-semibold">Destino</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                    <th className="px-5 py-3 font-semibold">Atualizado</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {PROPERTIES.map((property) => (
                    <tr key={property.name} className="border-t border-border">
                      <td className="px-5 py-3.5 font-semibold text-navy">
                        {property.name}
                      </td>
                      <td className="px-5 py-3.5 text-ink-soft">
                        {property.destination}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${property.style}`}
                        >
                          {property.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-ink-soft">
                        {property.updated}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          type="button"
                          aria-label={`Editar ${property.name}`}
                        >
                          <Pencil
                            className="h-4 w-4 text-ink-soft"
                            aria-hidden
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
