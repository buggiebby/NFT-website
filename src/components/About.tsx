import { Users, Shield, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a vibrant community of collectors and creators',
  },
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'All NFTs are verified on the blockchain',
  },
  {
    icon: Zap,
    title: 'Instant Trading',
    description: 'Buy and sell with lightning-fast transactions',
  },
  {
    icon: Trophy,
    title: 'Exclusive Perks',
    description: 'Holders get access to special events and drops',
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-orange-900 mb-4">About Loaded Bears</h2>
          <p className="text-xl text-orange-100 font-bold max-w-3xl mx-auto">
            A collection of 10,000 unique bear NFTs living on the blockchain. Each bear is loaded
            with personality, style, and exclusive perks for holders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-orange-300/50 backdrop-blur-sm rounded-3xl p-8 border-4 border-orange-900 transform hover:scale-105 transition-all text-center"
              >
                <div className="w-16 h-16 bg-orange-200 rounded-2xl border-3 border-orange-900 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-900" />
                </div>
                <h3 className="text-xl font-black text-orange-900 mb-2">{feature.title}</h3>
                <p className="text-orange-900 font-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-orange-300/50 backdrop-blur-sm rounded-3xl p-12 border-4 border-orange-900">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-orange-900">The Story</h3>
              <div className="space-y-4 text-lg text-orange-900 font-medium">
                <p>
                  Loaded Bears started as a passion project by a group of artists and blockchain
                  enthusiasts who wanted to create something unique in the NFT space.
                </p>
                <p>
                  Each bear is algorithmically generated from over 200 hand-drawn traits, ensuring
                  every single one is completely unique. From cool sunglasses to paintbrushes and
                  chains, the possibilities are endless.
                </p>
                <p>
                  Our mission is to build a strong community where holders not only own amazing art,
                  but also gain access to exclusive events, merchandise, and future drops.
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-orange-900 hover:bg-orange-800 text-orange-100 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105">
                  Join Discord
                </button>
                <button className="bg-orange-200 hover:bg-orange-100 text-orange-900 font-bold px-8 py-4 rounded-full text-lg border-3 border-orange-900 transition-all hover:scale-105">
                  View Roadmap
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl border-4 border-orange-900 p-8 flex items-center justify-center aspect-square">
                <div className="text-8xl">🐻</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl border-4 border-orange-900 p-8 flex items-center justify-center aspect-square">
                <div className="text-8xl">🎨</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl border-4 border-orange-900 p-8 flex items-center justify-center aspect-square">
                <div className="text-8xl">💎</div>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl border-4 border-orange-900 p-8 flex items-center justify-center aspect-square">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
