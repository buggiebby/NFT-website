import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import Market from './components/Market';
import About from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-400/90 backdrop-blur-sm border-b-4 border-orange-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-lg font-bold transition-colors ${
                  activeSection === 'home'
                    ? 'text-orange-900'
                    : 'text-orange-900/70 hover:text-orange-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('market')}
                className={`text-lg font-bold transition-colors ${
                  activeSection === 'market'
                    ? 'text-orange-900'
                    : 'text-orange-900/70 hover:text-orange-900'
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-lg font-bold transition-colors ${
                  activeSection === 'about'
                    ? 'text-orange-900'
                    : 'text-orange-900/70 hover:text-orange-900'
                }`}
              >
                About
              </button>
            </div>

            <button className="hidden sm:flex items-center space-x-2 bg-orange-300 hover:bg-orange-200 text-orange-900 font-bold px-6 py-3 rounded-full border-3 border-orange-900 transition-all hover:scale-105 shadow-lg">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>

            <button
              className="sm:hidden text-orange-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-orange-400 border-t-2 border-orange-800/30">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  setActiveSection('home');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-bold text-orange-900 py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveSection('market');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-bold text-orange-900 py-2"
              >
                Market
              </button>
              <button
                onClick={() => {
                  setActiveSection('about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-bold text-orange-900 py-2"
              >
                About
              </button>
              <button className="flex items-center space-x-2 bg-orange-300 text-orange-900 font-bold px-6 py-3 rounded-full border-3 border-orange-900 w-full justify-center">
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && <Hero />}
        {activeSection === 'market' && <Market />}
        {activeSection === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
