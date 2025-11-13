import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-3 h-8 bg-yellow-300 rounded-full transform rotate-45 opacity-70" />
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-3 h-3 bg-orange-300 rounded-full opacity-60" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-orange-900 leading-none tracking-tight">
                LOADED
              </h1>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-orange-900 leading-none tracking-tight">
                BEARS
              </h1>
              <h2 className="text-5xl sm:text-6xl font-black text-orange-900 leading-none">
                NFT
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-100">
                NFT Has Launched!
              </h3>
              <p className="text-xl text-orange-100 font-medium">
                Stay tuned for more coming soon
              </p>
            </div>

            <button className="group flex items-center space-x-2 bg-orange-200 hover:bg-orange-100 text-orange-900 font-black text-xl px-8 py-4 rounded-full border-4 border-orange-900 transition-all hover:scale-105 shadow-2xl">
              <span>Explore</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-orange-300/50 backdrop-blur-sm rounded-3xl p-6 border-4 border-orange-900 transform hover:scale-105 transition-all hover:rotate-2">
                  <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center border-3 border-orange-900">
                    <div className="text-6xl">🐻</div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="h-3 bg-orange-900 rounded-full w-3/4" />
                    <div className="h-3 bg-orange-900 rounded-full w-1/2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-orange-300/50 backdrop-blur-sm rounded-3xl p-6 border-4 border-orange-900 transform hover:scale-105 transition-all hover:-rotate-2">
                  <div className="w-full aspect-square bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center border-3 border-orange-900">
                    <div className="text-6xl">🕶️</div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="h-3 bg-orange-900 rounded-full w-3/4" />
                    <div className="h-3 bg-orange-900 rounded-full w-1/2" />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="bg-orange-300/50 backdrop-blur-sm rounded-3xl p-6 border-4 border-orange-900 transform hover:scale-105 transition-all">
                  <div className="w-full aspect-[2/1] bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center border-3 border-orange-900 space-x-4">
                    <div className="text-5xl">🐻</div>
                    <div className="text-5xl">🖌️</div>
                    <div className="text-5xl">🐻</div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="h-3 bg-orange-900 rounded-full w-2/3" />
                    <div className="h-3 bg-orange-900 rounded-full w-1/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
