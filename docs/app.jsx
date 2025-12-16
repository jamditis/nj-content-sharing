import React, { useState, useEffect, useRef } from 'react';
import { 
  Newspaper, 
  Share2, 
  Users, 
  Calendar, 
  ChevronRight, 
  ExternalLink, 
  Copy, 
  Check, 
  Mail,
  ArrowRight,
  Info,
  Menu,
  X
} from 'lucide-react';

// --- Custom Hook for Intersection Observer (Scroll Animations) ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Trigger only once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- Sub-Components ---

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionHeader = ({ label, title, description, centered = false }) => (
  <div className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    <span className="inline-block py-1 px-3 border border-red-800/30 rounded-full text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 mb-4">
      {label}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-gray-600 leading-relaxed font-sans max-w-2xl">
      {description}
    </p>
  </div>
);

const WidgetCard = ({ title, badge, description, delay }) => (
  <FadeInSection delay={delay} className="group relative bg-white border border-gray-200 p-8 hover:border-red-700 transition-colors duration-200">
    <div className="absolute top-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    <div className="flex justify-between items-start mb-6">
      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-bold">
        {badge}
      </span>
      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowRight size={14} />
      </div>
    </div>
    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
      {description}
    </p>
    <div className="bg-gray-50 border border-dashed border-gray-300 p-4 rounded text-center">
      <p className="text-xs text-gray-400 font-mono">Widget preview unavailable</p>
    </div>
  </FadeInSection>
);

const FeatureList = ({ items }) => (
  <ul className="space-y-4 mt-6">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start text-gray-700 text-sm">
        <span className="mr-3 mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-700">
          <Check size={10} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

// --- Main App Component ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    const text = `This story was originally published by [Original Outlet Name] and is republished here through the NJ News Commons content-sharing network. The NJ News Commons is a collaborative of news organizations across New Jersey, supported by the Center for Cooperative Media at Montclair State University. For more information, visit centerforcooperativemedia.org.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* --- Global Styles & Fonts --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        
        :root {
          --editorial-red: #CA3553;
          --ink-black: #1a1a1a;
          --paper-white: #FAFAF8;
        }

        body {
          font-family: 'Manrope', sans-serif;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }

        h1, h2, h3, h4, .serif {
          font-family: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: auto;
        }

        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 bg-red-700 text-white flex items-center justify-center font-serif font-bold rounded-sm transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              NJ
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-tight leading-none text-gray-900 transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                Content Sharing Network
              </span>
              <span className="text-[10px] uppercase tracking-widest text-red-700 font-semibold mt-0.5">
                NJ News Commons
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#widgets" className="hover:text-red-700 transition-colors">Widgets</a>
            <a href="#pluckywire" className="hover:text-red-700 transition-colors">PluckyWire</a>
            <a href="#roundup" className="hover:text-red-700 transition-colors">Roundup</a>
            <a href="#editorial-meetings" className="hover:text-red-700 transition-colors">Meetings</a>
            <a href="#attribution" className="text-red-700 hover:text-red-900 flex items-center gap-1">
              Guidelines <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 md:hidden shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a href="#widgets" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Widgets</a>
            <a href="#pluckywire" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>PluckyWire</a>
            <a href="#roundup" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Daily roundup</a>
            <a href="#editorial-meetings" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Editorial meetings</a>
            <a href="#attribution" className="text-lg font-serif text-red-700" onClick={() => setMobileMenuOpen(false)}>Attribution guidelines</a>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-50/50 to-transparent -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeInSection>
            <span className="block text-red-700 font-bold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-red-700 inline-block"></span>
              Collaborative journalism infrastructure
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-[0.95] tracking-tight">
              Share and access <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900 italic pr-2">
                local journalism
              </span>
              <br />
              across New Jersey.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12">
              The NJ Content Sharing Network connects local news organizations to share stories, expand coverage, and strengthen democracy throughout the state.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#pluckywire" className="bg-gray-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-red-700 transition-colors duration-200 flex items-center gap-2">
                Start sharing <ChevronRight size={18} />
              </a>
              <a href="#widgets" className="bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-sm font-medium hover:border-gray-900 transition-colors duration-200">
                Explore widgets
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- Widgets Section --- */}
      <section id="widgets" className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <SectionHeader 
              label="Automated content feeds"
              title="Content widgets from Distributed Media Lab"
              description="Add a stream of curated New Jersey news to your website with embeddable widgets. Choose from different content sources and customize the display for your audience."
            />
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WidgetCard 
              title="NJ Spotlight News"
              badge="Statewide policy"
              description="Embed a continuously updated feed of statewide policy, politics, and investigative reporting."
              delay={0}
            />
            <WidgetCard 
              title="NJ Arts"
              badge="Arts & culture"
              description="Feature comprehensive arts, culture, and entertainment coverage from NJ Arts on your site."
              delay={100}
            />
            <WidgetCard 
              title="NJ Statehouse"
              badge="Government"
              description="Keep your readers informed with state government and legislative coverage."
              delay={200}
            />
            <WidgetCard 
              title="SJ Climate News"
              badge="Environment"
              description="Environmental and climate coverage focused on South Jersey and the broader region."
              delay={300}
            />
          </div>

          <FadeInSection delay={400} className="mt-12 bg-gray-50 border border-gray-200 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white border border-gray-200 rounded-full text-red-700 shadow-sm">
                <Info size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-gray-900">Need a custom widget?</h4>
                <p className="text-gray-600">We can configure widgets filtered by topic, geography, or other criteria relevant to your audience.</p>
              </div>
            </div>
            <a href="mailto:info@centerforcooperativemedia.org" className="flex-shrink-0 text-red-700 font-bold border-b-2 border-red-700 pb-0.5 hover:text-gray-900 hover:border-gray-900 transition-all">
              Contact us to discuss
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* --- PluckyWire Section --- */}
      <section id="pluckywire" className="py-24 bg-[#FAFAF8] relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Text */}
            <div className="lg:col-span-5">
              <FadeInSection className="sticky top-32">
                <SectionHeader 
                  label="Story-by-story sharing"
                  title="Browse and republish with PluckyWire"
                  description="A streamlined content-sharing platform where member outlets can browse stories from other participating news organizations and republish them with one click."
                />
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4 p-4 bg-white border-l-4 border-red-700 shadow-sm">
                    <Share2 className="text-red-700 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">One-click republishing</h4>
                      <p className="text-sm text-gray-600">Copy story content with attribution included automatically.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white border-l-4 border-gray-200 hover:border-gray-400 transition-colors shadow-sm">
                    <Newspaper className="text-gray-400 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Weekly digests</h4>
                      <p className="text-sm text-gray-600">Get a curated list of available content delivered to your inbox.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://pluckywire.com" target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-900 transition-colors text-center">
                    Browse stories
                  </a>
                  <a href="mailto:info@centerforcooperativemedia.org" className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-colors text-center">
                    Request access
                  </a>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column: Visuals/List */}
            <div className="lg:col-span-7 space-y-8">
              <FadeInSection delay={200}>
                <div className="bg-white p-8 border border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
                  <h3 className="text-xl font-serif font-bold mb-6 border-b border-gray-100 pb-4">How it works</h3>
                  <FeatureList items={[
                    "Browse stories by topic, outlet, or date",
                    "Copy full story HTML with one click",
                    "Automatic boilerplate credit included",
                    "Track republishing metrics automatically"
                  ]} />
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="bg-gray-900 text-white p-8 border border-gray-900 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-700 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                  
                  <h3 className="text-xl font-serif font-bold mb-6 relative z-10 text-red-50">Participating partners</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    {["NJ Spotlight News", "NJ Arts", "NJ Statehouse News", "South Jersey Climate News", "Mosaic NJ", "Local Source"].map((partner, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-medium text-sm">{partner}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-gray-400 font-mono text-center">
                    + More outlets joining the network monthly
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- Roundup & Meetings Split Section --- */}
      <section className="py-24 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Roundup */}
            <div id="roundup">
              <FadeInSection>
                <div className="flex items-center gap-3 mb-4 text-red-700 font-bold tracking-widest text-xs uppercase">
                  <Mail size={16} />
                  <span>Stay informed</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  Daily news roundup
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join thousands of NJ news professionals. We aggregate the most important stories from NJ News Commons partners and deliver them to your inbox every weekday morning.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 mb-8">
                  <h4 className="font-bold text-sm uppercase text-gray-500 mb-4">Curated topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {["State government", "Education", "Environment", "Arts & culture", "Health", "Community"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://centerforcooperativemedia.us5.list-manage.com/subscribe?u=7f46611cb324e9e193acda7cc&id=dd61b54487" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block bg-red-700 text-white text-center py-4 font-bold hover:bg-red-800 transition-colors rounded-sm shadow-md"
                >
                  Subscribe now
                </a>
              </FadeInSection>
            </div>

            {/* Editorial Meetings */}
            <div id="editorial-meetings" className="md:border-l md:border-gray-200 md:pl-12 lg:pl-24">
              <FadeInSection delay={200}>
                <div className="flex items-center gap-3 mb-4 text-red-700 font-bold tracking-widest text-xs uppercase">
                  <Users size={16} />
                  <span>Collaboration</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  Open editorial meetings
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join monthly meetings where partners share story plans, collaborate on coverage, and learn from guest speakers.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0 mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Roundtable</h4>
                      <p className="text-sm text-gray-600">Partners share upcoming story plans and finding collaboration angles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0 mt-1">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Data deep dive</h4>
                      <p className="text-sm text-gray-600">Guest speakers present data resources and tools for local reporting.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-sm text-sm text-yellow-800">
                  <strong>Coming soon:</strong> Pilot meetings begin in late January 2025.
                </div>
              </FadeInSection>
            </div>

          </div>
        </div>
      </section>

      {/* --- Attribution Section (Dark) --- */}
      <section id="attribution" className="py-24 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">Guidelines</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Proper attribution
                </h2>
                <p className="leading-relaxed mb-6 text-gray-400">
                  All shared content requires proper attribution. We've standardized this to protect the original publishers while ensuring transparency for readers.
                </p>
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <Info size={16} />
                  <span>Included automatically in widgets</span>
                </div>
              </div>

              <div className="md:w-2/3 w-full">
                <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden relative group">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-950 border-b border-gray-700">
                    <span className="text-xs font-mono text-gray-500">Standard boilerplate</span>
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied ? "Copied" : "Copy text"}
                    </button>
                  </div>
                  <div className="p-6 font-serif text-lg leading-relaxed text-gray-200">
                    <p>
                      "This story was originally published by <span className="text-red-400 font-bold">[Original Outlet Name]</span> and is republished here through the NJ News Commons content-sharing network. The NJ News Commons is a collaborative of news organizations across New Jersey, supported by the Center for Cooperative Media at Montclair State University."
                    </p>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-900/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-950 text-gray-500 py-16 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-red-900 text-white flex items-center justify-center font-serif font-bold rounded-sm">
                  NJ
                </div>
                <span className="text-gray-200 font-serif font-bold text-lg">Content Sharing Network</span>
              </div>
              <p className="text-sm max-w-sm">
                A program of the <a href="https://centerforcooperativemedia.org" className="text-gray-300 hover:text-white underline decoration-red-900 underline-offset-4 transition-colors">Center for Cooperative Media</a> at Montclair State University.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="mailto:info@centerforcooperativemedia.org" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={16} /> Contact support
              </a>
              <a href="https://centerforcooperativemedia.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink size={16} /> Visit Center website
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-900 text-center md:text-left text-xs text-gray-700 flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} Center for Cooperative Media. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built for New Jersey journalism.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}