import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Landing from '@/pages/Landing';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain" />
      <Header />
      <main className="flex-1 relative z-[2]">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
