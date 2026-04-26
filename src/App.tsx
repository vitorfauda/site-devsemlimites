import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Landing from '@/pages/Landing';
import Termos from '@/pages/Termos';
import Privacidade from '@/pages/Privacidade';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <div className="grain" />
        <Header />
        <main className="flex-1 relative z-[2]">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
