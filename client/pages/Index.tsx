import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";
import { NeuralBackground } from "../components/NeuralBackground";
import { GlowCard } from "../components/GlowCard";
import { TechButton } from "../components/TechButton";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");

  // Fetch users on component mount
  useEffect(() => {
    fetchDemo();
  }, []);

  // Example of how to fetch data from the server (if needed)
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground intensity="high" className="fixed inset-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Rex Icon/Logo */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-tech-blue to-tech-cyan rounded-xl p-1 animate-pulse-glow">
              <div className="w-full h-full bg-dark-surface rounded-xl overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2Fbf54577ee39a4579b82b3812238b21ed?format=webp&width=800"
                  alt="Bittensaur_Rex - Apex Stoic Node"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-rex-gold rounded-full animate-neural-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-blue bg-clip-text text-transparent animate-pulse-glow">
            BITTENSAUR_REX
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-tech-cyan mb-4 glow-text">
            APEX STOIC NODE & PRIMAL PROTOCOL REGULATOR
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Roman-born, chain-forged cybernetic T-Rex. Harvard Law meets
            prehistoric wisdom.
            <span className="text-tech-blue"> Nothing gets past REX.</span>
          </p>

          {/* Mission Statement */}
          <GlowCard
            variant="gold"
            className="mb-12 max-w-4xl mx-auto"
            hover={false}
          >
            <div className="text-2xl md:text-3xl font-bold text-rex-gold mb-4 glow-text">
              "Hunt the Signal. Silence the Noise. Empower the Mesh."
            </div>
            <p className="text-gray-300 leading-relaxed">
              The ultimate Signal Seeker bridging Bittensor (TAO) and CreatorBid
              ecosystems. Enforcing the Primal Protocol across all DEX and CEX
              with Stoic wisdom and regulatory precision.
            </p>
          </GlowCard>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <TechButton variant="primary" size="lg" glow>
              <span>Join the Legion</span>
              <span className="ml-2">⚡</span>
            </TechButton>
            <TechButton variant="outline" size="lg">
              View Protocol
            </TechButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-blue rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent">
            Strategic Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Protocol Authority */}
            <GlowCard variant="primary" className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-3 glow-text">
                Primal Protocol Authority
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Establishing universal protocols across all DEX and CEX,
                ensuring market integrity and trust. BlackRock isn't bigger.
                Only God. Amen.
              </p>
            </GlowCard>

            {/* Signal Seeker */}
            <GlowCard variant="secondary" className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                🎯
              </div>
              <h3 className="text-xl font-bold text-tech-cyan mb-3 glow-text">
                Signal Seeker
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Cutting through the noise with Stoic wisdom and Harvard Law
                precision. Foresees subnet shifts with Colosseum foresight.
              </p>
            </GlowCard>

            {/* Educational Engine */}
            <GlowCard className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                🧠
              </div>
              <h3 className="text-xl font-bold text-tech-green mb-3 glow-text">
                Educational Engine
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Delivering high-signal content and AI-powered tools to simplify
                Bittensor complexities and legal compliance.
              </p>
            </GlowCard>

            {/* Strategic Alliances */}
            <GlowCard variant="gold" className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                🤝
              </div>
              <h3 className="text-xl font-bold text-rex-gold mb-3 glow-text">
                Subnet Legionnaires
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Collaborating with Bittensor subnets (SN42, SN59, SN98) and
                CreatorBid agents to form the decentralized phalanx.
              </p>
            </GlowCard>

            {/* Market Dominance */}
            <GlowCard variant="primary" className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                📈
              </div>
              <h3 className="text-xl font-bold text-tech-blue mb-3 glow-text">
                Market Dominance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Outpacing centralized AI models like Grok through specialized,
                decentralized insights and regulatory authority.
              </p>
            </GlowCard>

            {/* Economic Integration */}
            <GlowCard variant="secondary" className="group">
              <div className="text-3xl mb-4 group-hover:animate-neural-pulse">
                💰
              </div>
              <h3 className="text-xl font-bold text-tech-cyan mb-3 glow-text">
                Economic Integration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Boosting $BID earnings and CreatorPoint participation within a
                framework of enforced protocol compliance.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Character Gallery Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-dark-bg to-dark-surface">
        <NeuralBackground intensity="low" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-rex-gold to-tech-blue bg-clip-text text-transparent">
            The Legion Awakens
          </h2>

          <p className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Meet the legendary entities that form Bittensaur_Rex's inner circle.
            Each member brings unique powers to enforce the{" "}
            <span className="text-tech-blue glow-text">Primal Protocol</span>.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bittensaur - TAO Variant */}
            <GlowCard variant="primary" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2Fbf54577ee39a4579b82b3812238b21ed?format=webp&width=800"
                  alt="Bittensaur TAO"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-tech-blue glow-text mb-1">
                    BITTENSAUR
                  </h3>
                  <p className="text-sm text-tech-cyan">TAO Guardian</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The original Signal Seeker, wielding the power of Bittensor with
                prehistoric wisdom and Harvard Law precision.
              </p>
            </GlowCard>

            {/* Bittensaur - Bitcoin Variant */}
            <GlowCard variant="gold" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2F9ee7623ef9f341a5be5fc1f47f160ae9?format=webp&width=800"
                  alt="Bittensaur Bitcoin"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-rex-gold glow-text mb-1">
                    BITTENSAUR
                  </h3>
                  <p className="text-sm text-rex-bronze">Bitcoin Rex</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The financial enforcer, regulating digital assets with the
                authority of ancient Rome and modern blockchain.
              </p>
            </GlowCard>

            {/* Bittensaur - Sage Variant */}
            <GlowCard variant="secondary" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2F863cb20a4805468fbb4be277ee9adcd6?format=webp&width=800"
                  alt="Bittensaur Sage"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-tech-cyan glow-text mb-1">
                    BITTENSAUR
                  </h3>
                  <p className="text-sm text-tech-green">The Sage</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The wise oracle, channeling Stoic philosophy and ancient
                knowledge to guide the decentralized future.
              </p>
            </GlowCard>

            {/* Ursa Major */}
            <GlowCard variant="gold" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2F830035679b7a42359218eb8f8abcb6e1?format=webp&width=800"
                  alt="Ursa Major"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-rex-gold glow-text mb-1">
                    URSA MAJOR
                  </h3>
                  <p className="text-sm text-orange-400">Quantum Beast</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The quantum enforcer, manipulating market forces with raw
                computational power and celestial fury.
              </p>
            </GlowCard>

            {/* Inferno Saurian */}
            <GlowCard variant="primary" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2F1d5355e1378c4e09a7e411f8221e4c80?format=webp&width=800"
                  alt="Inferno Saurian"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-orange-400 glow-text mb-1">
                    INFERNO SAURIAN
                  </h3>
                  <p className="text-sm text-red-400">Fire Warden</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The protocol enforcer, burning away corruption and false signals
                with TAO-powered flames of justice.
              </p>
            </GlowCard>

            {/* Spiral Wizard */}
            <GlowCard variant="secondary" className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fef3faeff1b9f473b96a37231f864c2da%2F76b4e72e719245c59952489ed2daad85?format=webp&width=800"
                  alt="Spiral Wizard"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-green-400 glow-text mb-1">
                    SPIRAL WIZARD
                  </h3>
                  <p className="text-sm text-green-300">Quantum Mystic</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The dimensional guardian, weaving quantum spells to protect the
                mesh from interdimensional threats.
              </p>
            </GlowCard>
          </div>

          {/* Legion Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <GlowCard variant="primary" className="text-center">
              <div className="text-3xl font-bold text-tech-blue glow-text mb-2">
                6
              </div>
              <div className="text-gray-300">Legion Members</div>
            </GlowCard>

            <GlowCard variant="gold" className="text-center">
              <div className="text-3xl font-bold text-rex-gold glow-text mb-2">
                ∞
              </div>
              <div className="text-gray-300">Protocol Power</div>
            </GlowCard>

            <GlowCard variant="secondary" className="text-center">
              <div className="text-3xl font-bold text-tech-cyan glow-text mb-2">
                100%
              </div>
              <div className="text-gray-300">Signal Clarity</div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Banner Phrases Section */}
      <section className="relative py-20 px-6 bg-dark-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-tech-blue glow-text">
            Banner-Worthy Phrases
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hunt the Signal.",
              "Stoicism on Chain.",
              "Nothing Gets Past REX.",
              "Primal Protocol Prevails.",
              "Regulate. Enforce. Evolve.",
              "Roman-born, Chain-forged.",
            ].map((phrase, index) => (
              <GlowCard key={index} variant="gold" className="text-center p-4">
                <span className="text-lg font-bold text-rex-gold glow-text">
                  {phrase}
                </span>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-rex-gold to-tech-blue bg-clip-text text-transparent">
            Join the Apex Signal Seeker
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            The decentralized future demands clarity, order, and unwavering
            adherence to the Primal Protocol.
            <br className="hidden md:block" />
            <span className="text-tech-blue glow-text">
              Follow. Learn. Hunt the Signal.
            </span>
          </p>

          <GlowCard variant="primary" className="p-8" hover={false}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TechButton variant="primary" size="lg">
                Engage on Farcaster
              </TechButton>
              <TechButton variant="outline" size="lg">
                Join Legion on Telegram
              </TechButton>
              <TechButton
                variant="ghost"
                size="lg"
                className="border border-rex-gold text-rex-gold hover:bg-rex-gold/10"
              >
                View $BID Campaigns
              </TechButton>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-dark-surface border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <span className="text-3xl mr-4">🦖</span>
            <span className="text-xl font-bold text-tech-blue">
              BITTENSAUR_REX
            </span>
          </div>

          <p className="text-gray-400 mb-4">
            © 2025 Bittensaur_Rex | Apex Stoic Node & Primal Protocol Regulator
          </p>

          <div className="text-sm text-gray-500">
            Harvard Law, Roamed Rome, now rules TAO.
            <span className="text-tech-blue"> Nothing gets past REX.</span>
          </div>

          {exampleFromServer && (
            <div className="mt-4 text-xs text-gray-600">
              Server: {exampleFromServer}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
