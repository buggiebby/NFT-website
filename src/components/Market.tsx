import { TrendingUp, Heart } from 'lucide-react';

const bears = [
  { id: 1, name: 'Cool Bear #1', price: '2.5 ETH', emoji: '😎' },
  { id: 2, name: 'Artist Bear #2', price: '1.8 ETH', emoji: '🎨' },
  { id: 3, name: 'Chill Bear #3', price: '3.2 ETH', emoji: '🧊' },
  { id: 4, name: 'Party Bear #4', price: '2.1 ETH', emoji: '🎉' },
  { id: 5, name: 'Loaded Bear #5', price: '4.5 ETH', emoji: '💰' },
  { id: 6, name: 'Boss Bear #6', price: '3.8 ETH', emoji: '👔' },
  { id: 7, name: 'Creative Bear #7', price: '2.7 ETH', emoji: '✨' },
  { id: 8, name: 'Vibe Bear #8', price: '1.9 ETH', emoji: '🌊' },
];

export default function Market() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrendingUp className="w-12 h-12 text-orange-900" />
            <h2 className="text-6xl font-black text-orange-900">Marketplace</h2>
          </div>
          <p className="text-xl text-orange-100 font-bold">
            Discover and collect unique Loaded Bears
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bears.map((bear) => (
            <div
              key={bear.id}
              className="group bg-orange-300/50 backdrop-blur-sm rounded-3xl p-6 border-4 border-orange-900 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center border-3 border-orange-900 mb-4">
                  <div className="text-8xl">{bear.emoji}</div>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-orange-200 rounded-full border-3 border-orange-900 flex items-center justify-center hover:bg-red-300 transition-colors">
                  <Heart className="w-5 h-5 text-orange-900" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black text-orange-900">{bear.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-900">{bear.price}</span>
                  <button className="bg-orange-900 hover:bg-orange-800 text-orange-100 font-bold px-4 py-2 rounded-full text-sm transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
