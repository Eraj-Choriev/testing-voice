import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  ChevronDown, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- TYPES ---
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

// --- CONSTANTS ---
const POPULAR_PRODUCTS: Product[] = [
  { id: 1, name: "The Original Unisex Leather", price: "$290.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Tri-Tone Bradshaw Leather", price: "$320.00", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Christal Automatic Steel", price: "$450.00", image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Black & Gold Michael Kors", price: "$295.00", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Michael Kors Rose Gold", price: "$350.00", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=400" },
];

const BRANDS = ["ROLEX", "OMEGA", "CARTIER", "TAG HEUER", "PATEK"];

// --- COMPONENTS ---

const UtilityBar = () => (
  <div className="w-full bg-[#F5F5F5] h-9 border-b border-[#E5E5E5] flex items-center justify-between px-6 xl:px-24">
    <div className="flex gap-4 items-center">
      <button className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-secondary hover:text-primary transition-colors">
        Language: ENG <ChevronDown size={10} />
      </button>
      <button className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-secondary hover:text-primary transition-colors">
        Currency: USD <ChevronDown size={10} />
      </button>
    </div>
    <div className="flex gap-4 items-center divide-x divide-[#E5E5E5]">
      <div className="flex gap-4 pl-4 text-[10px] uppercase tracking-wider text-secondary">
        <button className="hover:text-primary transition-colors underline-offset-4 hover:underline">Login</button>
        <button className="hover:text-primary transition-colors underline-offset-4 hover:underline">Register</button>
        <div className="border-l border-[#E5E5E5] h-4 self-center mx-2" />
        <button className="hover:text-primary transition-colors flex items-center gap-1 uppercase">
          Wishlist
        </button>
        <button className="hover:text-primary transition-colors uppercase">Account</button>
      </div>
      <div className="relative pl-4 flex items-center">
        <button className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <ShoppingBag size={14} />
          <span className="text-[10px] uppercase tracking-wider font-semibold">2 Items — $1720.00</span>
          <span className="absolute -top-1 -right-2 bg-primary text-white text-[8px] px-1 rounded-full flex items-center justify-center min-w-[14px] h-[14px]">2</span>
        </button>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Home", "Categories", "Women", "Men", "Top Sale", "Blog", "Contact"];

  return (
    <nav className={`w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'fixed top-0 shadow-sm py-4' : 'relative border-b border-border py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 xl:px-12 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center font-bold text-lg">T</div>
          <span className="text-xl uppercase tracking-[0.25em] font-bold">Titanium</span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link text-[13px]">{item}</a>
          ))}
          <button className="text-primary hover:opacity-60 transition-opacity">
            <Search size={18} />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col gap-8"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl uppercase tracking-widest font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-xl uppercase tracking-wider border-b border-border pb-2 outline-none" onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const Hero = () => (
  <section className="w-full bg-[#F7F5F3] overflow-hidden">
    <div className="max-w-7xl mx-auto h-[600px] flex flex-col md:flex-row items-center px-6 xl:px-12 relative">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col gap-6 items-start z-10 py-12"
      >
        <span className="uppercase text-[10px] tracking-[0.2em] text-secondary font-medium">For Your Luxury & Elegant</span>
        <h1 className="text-5xl lg:text-7xl leading-tight">Unisex<br />Leather</h1>
        <p className="font-serif text-secondary text-lg max-w-md leading-relaxed">
          Discover the perfect balance of timeless craftsmanship and contemporary design. Our latest collection defines elegance for the modern individual.
        </p>
        <button className="btn-primary mt-4 flex items-center gap-4 group">
          Discover Now <span>→</span>
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 relative h-full flex items-center justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800" 
          alt="Luxury Watch"
          className="h-[80%] lg:h-[90%] object-contain drop-shadow-2xl translate-x-12 md:translate-x-20 scale-110"
        />
      </motion.div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="py-24 px-6 xl:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Block 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#F5F5F5] p-10 flex gap-6 items-center min-h-[350px]"
      >
        <div className="w-1/2 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400" className="w-full hover:scale-110 transition-transform duration-700" alt="Watch" />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <span className="italic font-serif text-secondary text-sm">From $2950.00</span>
          <h3 className="text-xl">Kobold Himalaya</h3>
          <a href="#" className="uppercase text-[10px] tracking-widest font-bold border-b border-primary w-fit pb-1 hover:opacity-60 transition-opacity">More Detail →</a>
        </div>
      </motion.div>

      {/* Block 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-[#E5E5E5] p-10 flex flex-row-reverse gap-6 items-center min-h-[350px]"
      >
        <div className="w-1/2 overflow-hidden text-right">
          <img src="https://images.unsplash.com/photo-1622434641406-a15812345ad1?auto=format&fit=crop&q=80&w=400" className="w-full hover:scale-110 transition-transform duration-700 inline-block" alt="Watch" />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <h3 className="text-xl">Kobold Expedition Leather</h3>
          <p className="italic font-serif text-secondary text-sm">Awesome, Luxury & Elegant</p>
        </div>
      </motion.div>

      {/* Block 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white border border-[#E5E5E5] p-10 flex flex-col justify-between min-h-[450px]"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">New Kobold Watch</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-accent rotate-45" />)}
          </div>
          <p className="font-serif text-secondary leading-relaxed">
            A celebration of precision and artistry. Crafted for those who appreciate the finer things in life.
          </p>
        </div>
        <div className="w-48 self-start ml-[-20px] mt-8">
          <img src="https://images.unsplash.com/photo-1539815208151-474163bb4368?auto=format&fit=crop&q=80&w=400" className="w-full object-contain" alt="Watch" />
        </div>
      </motion.div>

      {/* Block 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-[#F5F5F5] p-10 flex gap-6 items-center min-h-[450px]"
      >
        <div className="w-1/2 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1619134710290-9f33ae182745?auto=format&fit=crop&q=80&w=400" className="w-full hover:scale-110 transition-transform duration-700" alt="Watch" />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <h3 className="text-xl">The Horse Creative Show</h3>
          <p className="italic font-serif text-secondary text-sm">All in tonight</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const PopularItems = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVALS');
  const tabs = ['NEW ARRIVALS', 'BEST SELLERS', 'FEATURED ITEMS', 'SALE OFF'];

  return (
    <section className="py-24 px-6 xl:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-8 mb-16 text-center">
        <h2 className="text-3xl text-primary font-bold tracking-widest">Popular Items</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[11px] uppercase tracking-widest transition-all duration-300 relative pb-1
                ${activeTab === tab ? 'text-primary font-bold after:w-full' : 'text-secondary font-medium hover:text-primary after:w-0'}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary after:transition-all
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {POPULAR_PRODUCTS.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            className="flex flex-col items-center gap-4 group cursor-pointer"
          >
            <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-8 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 pointer-events-none" />
            </div>
            <h4 className="font-serif text-sm normal-case text-center tracking-normal text-secondary">{product.name}</h4>
            <p className="text-sm font-bold text-primary tracking-normal">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const FeaturedBanner = () => (
  <section className="w-full bg-[#2C2C2C] py-24 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: -15 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/4 hidden lg:block"
      >
        <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=400" className="w-full opacity-60 hover:opacity-100 transition-opacity scale-125" alt="Watch" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-2/4 flex flex-col items-center gap-6"
      >
        <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-[0.2em]">Kobold Himalaya</h2>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-accent rotate-45" />)}
        </div>
        <p className="text-white/60 font-serif text-center max-w-lg leading-relaxed text-lg italic">
          Elevate your style with the pinnacle of watchmaking. The Himalaya series combines rugged durability with unparalleled sophistication.
        </p>
        <button className="btn-outline border-white text-white hover:bg-white hover:text-primary group px-10">
          Discover Now <span className="ml-4 group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 15 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/4 hidden lg:block"
      >
        <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=400" className="w-full opacity-60 hover:opacity-100 transition-opacity scale-125" alt="Watch" />
      </motion.div>
    </div>
  </section>
);

const BrandRow = () => (
  <section className="py-24 px-6 xl:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {BRANDS.map((brand, i) => (
        <div key={i} className="border border-border py-10 flex items-center justify-center text-secondary/30 font-bold uppercase tracking-[0.4em] text-xs hover:text-primary hover:border-primary transition-all duration-300">
          {brand}
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-[#AAAAAA] pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6 xl:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
      <div className="flex flex-col gap-6">
        <h5 className="text-white text-sm tracking-widest font-bold">About Us</h5>
        <div className="flex flex-col gap-6">
          <p className="font-serif text-sm leading-relaxed">
            Titanium is synonymous with precision and heritage. For over half a century, we have curated the finest timepieces for connoisseurs worldwide.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 text-xs">
              <MapPin size={16} className="text-white mt-1 shrink-0" />
              <span>211b Baker Street - London - UK</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Phone size={16} className="text-white shrink-0" />
              <span>(+44) 123 456 789</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Mail size={16} className="text-white shrink-0" />
              <span>support@titanium.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h5 className="text-white text-sm tracking-widest font-bold">Support</h5>
        <div className="flex flex-col gap-4 uppercase text-[11px] tracking-wider font-medium">
          <a href="#" className="hover:text-white transition-colors">F.A.Q</a>
          <a href="#" className="hover:text-white transition-colors">Term & Condition</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#" className="hover:text-white transition-colors">Get Started</a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h5 className="text-white text-sm tracking-widest font-bold">Account</h5>
        <div className="flex flex-col gap-4 uppercase text-[11px] tracking-wider font-medium">
          <a href="#" className="hover:text-white transition-colors">Login</a>
          <a href="#" className="hover:text-white transition-colors">Register</a>
          <a href="#" className="hover:text-white transition-colors">Wishlist</a>
          <a href="#" className="hover:text-white transition-colors">My Cart</a>
          <a href="#" className="hover:text-white transition-colors">Checkout</a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h5 className="text-white text-sm tracking-widest font-bold">Newsletter</h5>
        <p className="font-serif text-sm italic">Signup to become the first to receive our latest news & offers.</p>
        <div className="flex border-b border-[#333] pb-2 mt-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="bg-transparent border-none outline-none text-sm w-full py-2 placeholder:text-[#555] text-white"
          />
          <button className="text-white hover:text-accent transition-colors"><Mail size={18} /></button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 xl:px-12 pt-12 border-t border-[#222] flex flex-col items-center gap-12">
      <div className="flex gap-8 text-[#666]">
        <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Facebook size={18} /></a>
        <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Twitter size={18} /></a>
        <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Instagram size={18} /></a>
        <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Linkedin size={18} /></a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] text-center font-medium">
          © Copyright 2026 Titanium - All Rights Reserved.
        </p>
        <p className="text-[9px] uppercase tracking-[0.1em] text-[#444] text-center italic">
          Powered by Gemini • Made with Precision
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white">
      <UtilityBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
        <PopularItems />
        <FeaturedBanner />
        <BrandRow />
      </main>
      <Footer />
    </div>
  );
}