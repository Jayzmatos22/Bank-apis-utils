import HeaderApp from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CircleDollarSign } from 'lucide-react';
import ExchangeInterface from "./components/Exchange";
import CriptosInterface from "./components/Criptos";
import Dashboard from "./components/Dashboard";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import AddressPage from "./pages/onboarding/AddressPage";
import BankPage from "./pages/onboarding/BankPage";
import EconomiaPage from "./pages/dashboard/economia/EconomiaPage";
import SalarioPage from "./pages/dashboard/economia/SalarioPage";
import PibPage from "./pages/dashboard/economia/PibPage";
import AcoesPage from "./pages/dashboard/mercado/AcoesPage";
import MetaisPage from "./pages/dashboard/mercado/MetaisPage";
import CambioPage from "./pages/dashboard/moedas/CambioPage";
import CriptoPage from "./pages/dashboard/moedas/CriptoPage";
import IbgePage from "./pages/dashboard/brasil/IbgePage";
import IpeaPage from "./pages/dashboard/brasil/IpeaPage";
import BancosPage from "./pages/dashboard/brasil/BancosPage";

// bg-app
import './App.css'


function AppLayout() {
  const location = useLocation();
  const showMoneyIcon =
    location.pathname === '/registro-usuario' ||
    location.pathname === '/login-usuario' ||
    location.pathname === '/';

  return (
    <div className="min-h-screen w-full bg-app flex flex-col overflow-x-hidden">
      <HeaderApp />
      
      {showMoneyIcon && (
        <CircleDollarSign size={120} className="money-icon-bg fixed filter drop-shadow-lg money-animated
               left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/5" />
      )}

      <div className="flex-1 w-full flex justify-center items-start mt-20 p-4 py-8">
        <Routes>
          <Route path="/"                   element={<RegisterPage />} />
          <Route path="/registro-usuario"  element={<RegisterPage />} />
          <Route path="/login-usuario"     element={<LoginPage />} />
          <Route path="/dados-endereco"    element={<AddressPage />} />
          <Route path="/dados-bancarios"   element={<BankPage />} />
          <Route path="/cotacao-criptomoedas" element={<CriptosInterface />} />
          <Route path="/cotacao-moedas"    element={<ExchangeInterface />} />
          <Route path="/dashboard"         element={<Dashboard />} />

          {/* Dashboard — economia */}
          <Route path="/dashboard/economia"        element={<EconomiaPage />} />
          <Route path="/dashboard/economia/salario" element={<SalarioPage />} />
          <Route path="/dashboard/economia/pib"     element={<PibPage />} />

          {/* Dashboard — mercado */}
          <Route path="/dashboard/mercado/acoes"   element={<AcoesPage />} />
          <Route path="/dashboard/mercado/metais"  element={<MetaisPage />} />

          {/* Dashboard — moedas */}
          <Route path="/dashboard/moedas/cambio"   element={<CambioPage />} />
          <Route path="/dashboard/moedas/cripto"   element={<CriptoPage />} />

          {/* Dashboard — brasil */}
          <Route path="/dashboard/brasil/ibge"     element={<IbgePage />} />
          <Route path="/dashboard/brasil/ipea"     element={<IpeaPage />} />
          <Route path="/dashboard/brasil/bancos"   element={<BancosPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="bottom-right" 
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            zIndex: 99999,
          },
          success: { duration: 4000 },
        }} 
      />
      <AppLayout />
    </BrowserRouter>
  );
}
