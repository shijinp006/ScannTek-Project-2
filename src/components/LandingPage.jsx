import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import arrow1 from '../assets/arrow1.svg';
import arrow2 from '../assets/arrow2.svg';
import arrow3 from '../assets/arrow3.svg';
import arrow4 from '../assets/arrow4.svg';
import arrow5 from '../assets/arrow5.svg';
import arrow6 from '../assets/arrow6.svg';
import arrow7 from '../assets/arrow7.svg';
import arrow8 from '../assets/arrow8.svg';
import arrow9 from '../assets/arrow9.svg';
import arrow10 from '../assets/arrow10.svg';
import searchIcon from '../assets/searchIcon.svg';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("01");

  const accordionData = [
    {
      id: "01",
      num: "01",
      title: "COMFORT & SPACE",
      sub: "INNOVATION ON MULTIPLE LEVELS",
      desc: <>Alkan house is an 84 m2 residential space with<br />an optimal layout of rooms and moder design.</>,
      image: "/alkan_interior.png"
    },
    {
      id: "02",
      num: "02",
      title: "QUALITY & CRAF",
      sub: "EXCELLENCE IN DETAIL",
      desc: "Crafted with premium materials and high precision construction techniques.",
      image: "/hero_cabin.png"
    },
    {
      id: "03",
      num: "03",
      title: "WEB3 OWNERSHIP",
      sub: "DECENTRALIZED PROPERTY",
      desc: "Own shares of premium real estate securely on the blockchain ledger.",
      image: "/alkan_interior.png"
    },
    {
      id: "04",
      num: "04",
      title: "ENERGY NET ZERO",
      sub: "SUSTAINABLE ECOLOGY",
      desc: "Designed with solar integration and smart energy management.",
      image: "/hero_cabin.png"
    },
    {
      id: "05",
      num: "05",
      title: "MARKETPLACE",
      sub: "LIQUID REAL ESTATE",
      desc: "Trade your real estate holdings instantly via our custom exchange.",
      image: "/alkan_interior.png"
    },
    {
      id: "06",
      num: "06",
      title: "AFFORDABLE PRICE",
      sub: "ACCESSIBLE LUXURY",
      desc: "Premium spaces made accessible through innovative structural methods.",
      image: "/hero_cabin.png"
    }
  ];

  const properties = [
    {
      id: 1,
      city: "Atlanta, GA",
      sqft: "2,226",
      beds: 3,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      city: "San Francisco, CA",
      sqft: "2,226",
      beds: 3,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      city: "Boston, MA",
      sqft: "2,226",
      beds: 3,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      city: "Boston, MA",
      sqft: "2,226",
      beds: 3,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[85vh] md:h-[85vh] lg:h-[95vh] rounded-tl-[1.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-none overflow-hidden bg-[#0d0f12] animate-scale-up flex flex-col p-4 sm:p-5 md:p-6 text-white">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000 ease-out hover:scale-105"
          style={{ backgroundImage: "url('/hero_cabin.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center w-full">
          <h1 className="text-sm md:text-xl font-bold tracking-widest font-sans text-white">
            THE ARC
          </h1>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-[#e6d5c3] text-[#91682A] hover:bg-[#d4c1ad] hover:scale-105 active:scale-95 transition-all duration-300 font-extrabold tracking-widest text-[8px] md:text-xs px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-lg shadow-black/20 cursor-pointer"
          >
            MENU
          </button>
        </header>

        {/* Main Hero Content */}
        <main className="relative z-10 flex flex-col justify-end flex-grow pt-16 pb-8 md:pb-32 lg:pb-64 max-w-full md:max-w-2xl lg:max-w-3xl">
          <div className="space-y-2 md:space-y-5">
            <h2 className="text-[28px] sm:text-4xl md:text-6xl lg:text-[110px] xl:text-[130px] lg:whitespace-nowrap font-serif leading-[1.08] tracking-wide text-white">
              THE FUTURE <br className="hidden sm:inline" />
              OF HOME LIVING
            </h2>
            <p className="text-white/80 text-[8px] sm:text-xs md:text-[13px] lg:text-base max-w-[180px] sm:max-w-[250px] md:max-w-[360px] lg:max-w-lg leading-relaxed font-sans font-light">
              Welcome to our real estate agency, where your dream home awaits. Browse our listings and find the perfect property for you.
            </p>
            <div className="flex items-center space-x-2 md:space-x-3 pt-1 md:pt-2">
              <button className="bg-[#e6d5c3] text-[#91682A] hover:bg-[#d4c1ad] hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-[8px] md:text-xs px-3 py-1.5 md:px-6 md:py-2.5 rounded-full shadow-lg cursor-pointer">
                View
              </button>
              <button className="border border-white/40 text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-[8px] md:text-xs px-3 py-1.5 md:px-6 md:py-2.5 rounded-full cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </main>

        {/* Stats Card Overlay (Bottom Right) */}
        <div className="absolute bottom-0 right-0 z-20 bg-white text-black p-2 md:p-5 lg:p-6 w-[140px] sm:w-[220px] md:w-[380px] lg:w-[480px] xl:w-[540px] rounded-tl-[1rem] md:rounded-tl-[1.5rem] flex flex-col justify-between">
          {/* Concave Corner Elements */}
          <div className="inverted-corner-tr" />
          <div className="inverted-corner-bl" />

          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] sm:text-sm md:text-2xl font-extrabold font-sans tracking-tight text-black">
              Who Are You ?
            </h3>
            <p className="text-black font-bold text-[6px] sm:text-[10px] md:text-xs lg:text-base leading-tight md:leading-relaxed">
              We offer a range of services including <br />buying, selling, and property management.
            </p>

            {/* Stats Columns */}
            <div className="grid grid-cols-3 gap-1 md:gap-2 pt-1 md:pt-3">
              <div>
                <div className="text-[10px] sm:text-lg md:text-3xl lg:text-4xl font-black text-black leading-none">80+</div>
                <div className="text-black text-[4px] sm:text-[8px] md:text-xs font-bold mt-0.5 md:mt-1 leading-tight">Premium House</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-lg md:text-3xl lg:text-4xl font-black text-black leading-none">2K+</div>
                <div className="text-black text-[4px] sm:text-[8px] md:text-xs font-bold mt-0.5 md:mt-1 leading-tight">HappyClients</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-lg md:text-3xl lg:text-4xl font-black text-black leading-none">500+</div>
                <div className="text-black text-[4px] sm:text-[8px] md:text-xs font-bold mt-0.5 md:mt-1 leading-tight">AgentHouse</div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Hero Section */}

      {/* Advantages Section */}
      <section className="w-full text-black pt-8   md:pt-16 lg:pt-16 lg:pb-10 px-0 overflow-hidden md:overflow-visible">
        <div className="w-full mx-auto flex flex-col items-center">
          {/* Top Text Area */}
          <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto mb-1 md:mb-12 lg:mb-4 relative">
            <p className="text-[#91682A] font-sans font-medium text-sm md:text-base leading-none mb-4">
              FULFIL YOUR DREAMS
            </p>
            <h2 className="font-serif font-normal text-lg md:text-3xl lg:text-4xl leading-[1.3] text-[#000000] text-center mb-1 md:mb-3 lg:mb-8 px-4 md:px-0">
              "Kontako is committed to providing the <br className="hidden md:block" />best service in meeting your property <br className="hidden md:block" />needs for your future "
            </h2>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9]" />
              <div className="text-left">
                <p className="text-[#91682A] font-sans font-semibold text-sm md:text-base leading-none">Kianna Curtis</p>
                <p className="text-[#000000] font-sans font-normal text-xs md:text-sm leading-none mt-0.5">Founder of Kontako</p>
              </div>
            </div>
          </div>

          {/* Bottom Area: Pills and Image */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mx-auto relative min-h-[200px] md:min-h-[350px] md:h-[350px] lg:h-[500px] gap-2 md:gap-4 lg:gap-8 mt-4 md:mt-0 lg:mt-0">

            {/* Left: Pills */}
            <div className="flex flex-col justify-center items-start h-full w-full md:w-max py-4 relative z-10 space-y-6 md:space-y-4 lg:space-y-7 pr-0" style={{ clipPath: 'inset(-100vw -100vw 0 -100vw)' }}>
              <div className="bg-[#a27738] text-[#FFFFFF] pl-4 pr-12 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-sm font-sans font-medium leading-none shadow-sm transition-transform hover:scale-105 cursor-default relative">
                OUR ADVANTAGES
                <img src={arrow6} alt="" className="absolute left-[152px] bottom-1/2 h-[100px] w-auto max-w-none pointer-events-none z-0 object-contain opacity-90 md:hidden" />
                <img src={arrow1} alt="" className="absolute left-full ml-4 top-1/2 -translate-y-[1.6%] w-[45vw] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none z-[-1] object-contain opacity-100 hidden md:block" />
              </div>
              <div className="bg-[#a27738] text-[#FFFFFF] pl-4 pr-12 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-sm font-sans font-medium leading-none shadow-sm transition-transform hover:scale-105 cursor-default relative">
                YEARS OF GUARANTEE
                <img src={arrow7} alt="" className="absolute left-[172px] bottom-1/2 h-[170px] w-auto max-w-none pointer-events-none z-0 object-contain opacity-90 md:hidden" />
                <img src={arrow2} alt="" className="absolute left-full ml-4 top-1/2 -translate-y-[5.3%] w-[45vw] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none z-[-1] object-contain opacity-100 hidden md:block" />
              </div>
              <div className="bg-[#a27738] text-[#FFFFFF] pl-4 pr-12 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-sm font-sans font-medium leading-none shadow-sm transition-transform hover:scale-105 cursor-default relative">
                EFFICIENT LAYOUT DESIGN
                <img src={arrow8} alt="" className="absolute left-47 bottom-1/2 h-[160px] w-auto max-w-none pointer-events-none z-0 object-contain opacity-90 md:hidden" />
                <img src={arrow3} alt="" className="absolute left-full ml-4 top-1/2 -translate-y-[1.8%] w-[45vw] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none z-[-1] object-contain opacity-100 hidden md:block" />
              </div>
              <div className="bg-[#a27738] text-[#FFFFFF] pl-4 pr-12 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-sm font-sans font-medium leading-none shadow-sm transition-transform hover:scale-105 cursor-default flex items-center gap-2 relative">
                SHORT IMPLEMENTATION TIME
                <ArrowRight size={12} strokeWidth={3} className="block md:hidden" />
                <ArrowRight size={16} className="hidden md:block md:w-3 md:h-3 lg:w-4 lg:h-4" />
                <img src={arrow9} alt="" className="absolute left-[228px] bottom-1/2 h-[220px] w-auto max-w-none pointer-events-none z-0 object-contain opacity-90 md:hidden" />
                <img src={arrow4} alt="" className="absolute left-full ml-4 top-1/2 -translate-y-[36.4%] w-[45vw] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none z-[-1] object-contain opacity-100 hidden md:block" />
              </div>
              <div className="bg-[#a27738] text-[#FFFFFF] pl-4 pr-12 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-sm font-sans font-medium leading-none shadow-sm transition-transform hover:scale-105 cursor-default relative">
                MODERN ARCHITECTURE & TECHNOLOGY
                <img src={arrow10} alt="" className="absolute left-[252px] bottom-1/2 h-[260px] w-auto max-w-none pointer-events-none z-0 object-contain opacity-90 md:hidden" />
                <img src={arrow5} alt="" className="absolute left-full ml-4 top-1/2 -translate-y-[36.4%] w-[45vw] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none z-[-1] object-contain opacity-100 hidden md:block" />
              </div>
            </div>

            {/* Right: Image Container */}
            <div className="w-full md:w-[52%] lg:w-[55%] h-[180px] md:h-full relative rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-[#0d0f12]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out hover:scale-105" style={{ backgroundImage: "url('/hero_cabin.png')" }} />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute right-6 top-8 md:right-8 lg:right-10 md:top-12 lg:top-16 text-right">
                <h2 className="font-instrument font-normal text-2xl md:text-[32px] lg:text-6xl leading-[1.1] text-[#FFFFFF] text-right md:whitespace-nowrap">
                  TAKE A BIG STEP INTO<br />THE FUTURE OF<br />LIVING
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Match Section */}
      <section className="w-full bg-white text-black  lg:pt-0 pb-4 lg:pb-16 px-0">
        {/* Header */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 lg:mb-6 gap-6 px-4 sm:px-5 md:px-6 lg:px-8">
          <h2 className="font-instrument font-normal text-[50px] lg:text-[80px] leading-[50px] lg:leading-[80px] tracking-[0.01em]">
            Discover Your Perfect<br />
            <span className="text-[#a27738]">Property Match</span>
          </h2>
          <div className="md:w-1/3 text-left md:text-right">
            <p className="font-sans font-semibold text-[12px] lg:text-[14px] leading-snug tracking-[0.01em] text-right text-black">
              Discover Your Perfect Property Match with our<br className="hidden lg:block" />
              expert team, dedicated to finding the ideal<br className="hidden lg:block" />
              home or investment in California, San
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Large Card */}
          <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden h-[280px] sm:h-[400px] md:h-[350px] lg:h-[600px] group shadow-lg">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/hero_cabin.png')" }} />

            {/* Info Card Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-white/70 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-5 shadow-2xl flex flex-col justify-between border border-white/50">
              <div className="flex justify-between items-start mb-0">
                <h3 className="text-[#a27738] font-sans font-semibold text-[20px] leading-none tracking-normal">$930,000</h3>
                <button className="bg-[#a27738] text-white p-2 sm:p-2.5 rounded-full shadow-xl hover:scale-110 transition-all cursor-pointer">
                  <ArrowUpRight size={18} strokeWidth={3} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="flex justify-between items-end">
                <p className="text-black font-sans font-normal text-[12px] leading-none tracking-normal">
                  789 Lombard Street,<br />San Francisco,<br />CA 94133
                </p>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center font-sans font-medium text-[12px] leading-none tracking-normal text-black">
                    2,226<br />Sq. Ft
                  </div>
                  <div className="w-[1px] h-6 sm:h-8 bg-black/30" />
                  <div className="text-center font-sans font-medium text-[12px] leading-none tracking-normal text-black">
                    3<br />Beds
                  </div>
                  <div className="w-[1px] h-6 sm:h-8 bg-black/30" />
                  <div className="text-center font-sans font-medium text-[12px] leading-none tracking-normal text-black">
                    2<br />Baths
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid Area */}
          <div className="flex flex-col gap-4 md:gap-6 h-auto md:h-[350px] lg:h-[600px]">
            {/* Top two small images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[130px] sm:h-[220px] md:h-1/2">
              <div className="rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/hero_cabin.png')" }} />
              </div>
              <div className="rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/hero_cabin.png')" }} />
              </div>
            </div>
            {/* Bottom wide image */}
            <div className="rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative group h-[130px] sm:h-[220px] md:h-1/2 shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: "url('/hero_cabin.png')" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Comfort & Space Accordion Section */}
      <section className="w-full bg-[#2F2F2F] text-white py-6 md:py-12 lg:py-16 px-4 sm:px-5 md:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Mobile/Tablet Accordion (Vertical Stack) */}
          <div className="hidden space-y-4">
            {accordionData.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div key={item.id} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => setActiveAccordion(isOpen ? "" : item.id)}
                    className="w-full flex justify-between items-center text-left py-3 font-sans font-bold text-lg cursor-pointer text-white"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[#a27738]">{item.num}</span>
                      <span>{item.title}</span>
                    </span>
                    <span className={`text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                      <ArrowRight size={18} />
                    </span>
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-4">
                      <p className="text-[#a27738] font-sans font-medium text-xs tracking-wider uppercase">{item.sub}</p>
                      <div className="w-full h-[240px] rounded-2xl overflow-hidden relative border border-white/10">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-start gap-3 border-t border-white/5 pt-3">
                        <span className="text-white/40 font-sans text-sm">{item.num}</span>
                        <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Accordion (Horizontal Expand) */}
          <div className="flex h-[250px] md:h-[400px] lg:h-[500px] w-full max-w-[1200px] mx-auto" style={{ overflow: 'hidden' }}>
            {accordionData.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveAccordion(item.id)}
                  className={`relative h-full flex flex-col transition-all duration-700 ease-out cursor-pointer ${isOpen ? 'flex-[3]' : 'flex-1 hover:bg-white/5'
                    }`}
                >
                  {/* Vertical divider */}
                  <div className="absolute right-0 top-8 bottom-8 w-px bg-white/15 z-10" />

                  {/* Expanded Content */}
                  <div className={`flex flex-col h-full w-full transition-all duration-500 ${isOpen ? 'opacity-100 delay-200 relative' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
                    {/* Top: subtitle + title */}
                    <div className="px-1 sm:px-2 md:px-5 pt-1 sm:pt-2 md:pt-5 flex-shrink-0">
                      <p className="text-[#91682A] font-sans font-medium text-[7px] sm:text-[8px] md:text-[10px] lg:text-[14px] leading-none tracking-normal uppercase mb-1">
                        {item.sub}
                      </p>
                      <h2 className="font-sans font-bold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[40px] leading-none tracking-normal text-white uppercase mt-1">
                        {item.title.split(' & ').map((part, index, arr) => (
                          <React.Fragment key={index}>
                            {part}
                            {index < arr.length - 1 && <><br />& </>}
                          </React.Fragment>
                        ))}
                      </h2>
                    </div>

                    {/* Middle: image */}
                    <div className="px-1 sm:px-2 md:px-5 pt-1 md:pt-4 flex-1 overflow-hidden flex justify-center">
                      <div className="w-[80%] sm:w-[70%] md:w-[65%] h-full overflow-hidden shadow-xl">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Bottom: number + description */}
                    <div className="flex items-start gap-1 lg:gap-4 px-1 sm:px-2 lg:px-5 py-0.5 sm:py-1 md:py-2 lg:py-4 flex-shrink-0">
                      <span className="text-white font-sans font-light text-[10px] sm:text-[14px] md:text-[16px] lg:text-[40px] leading-none tracking-normal flex-shrink-0">{item.num}</span>
                      <p className="text-white font-inter font-bold text-[7px] sm:text-[7px] md:text-[8px] lg:text-[14px] leading-snug tracking-normal flex-1 line-clamp-3 md:line-clamp-2 lg:line-clamp-none overflow-hidden">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Collapsed Content */}
                  <div className={`absolute inset-0 flex flex-col items-center py-3 sm:py-5 transition-opacity duration-300 ${!isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {/* Number at top */}
                    <span
                      className="text-white font-sans font-thin text-[16px] sm:text-[22px] md:text-[30px] leading-none mb-2 sm:mb-3 flex-shrink-0"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {item.num}
                    </span>
                    {/* Title fills height — reads bottom-to-top */}
                    <div className="flex-1 flex items-center justify-center">
                      <span
                        className="text-white font-sans font-bold text-[14px] sm:text-[20px] md:text-[28px] tracking-wide uppercase leading-none"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slide-out Navigation Drawer */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
        />

        {/* Panel */}
        <div className={`absolute top-0 right-0 h-full w-[280px] sm:w-[350px] md:w-[400px] bg-[#0d0f12] text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold tracking-widest text-[#e6d5c3]">THE ARC</h4>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col space-y-5 pt-6 text-lg sm:text-xl font-serif">
              {['Home', 'Listings', 'Services', 'Philosophy', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between text-white/80 hover:text-white transition-colors py-2"
                >
                  <span>{item}</span>
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="space-y-3 text-xs text-white/40 border-t border-white/10 pt-6">
            <div className="flex items-center space-x-2">
              <Mail size={12} />
              <span>inquiries@thearc.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={12} />
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={12} />
              <span>Lake Tahoe, California</span>
            </div>
            <div className="pt-2 text-[10px]">
              &copy; {new Date().getFullYear()} THE ARC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <section className="w-full min-h-screen bg-[#f5f5f5] py-10  px-0">
        {/* Heading */}
        <div className="text-center px-3">
          <h1 className="text-[28px] md:text-5xl font-bold text-black font-serif">
            Property Showcase
          </h1>

          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {/* Buttons */}
            <div className="flex bg-[#D9D9D9] rounded-full p-1 shadow-md">
              <button className="bg-[#9b6b25] text-white px-5 md:px-6 py-2 rounded-full font-medium text-sm md:text-base">
                Buy
              </button>

              <button className="px-5 md:px-6 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition text-sm md:text-base">
                Rent
              </button>

              <button className="px-5 md:px-6 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition text-sm md:text-base">
                Sold
              </button>
            </div>

            {/* Search */}
            <div className="flex items-center bg-[#D9D9D9] rounded-full overflow-hidden shadow-md border border-black">
              <input
                type="text"
                placeholder="Enter City Or Zip Code"
                className="
                px-4
                md:px-5
                py-3
                outline-none
                bg-transparent
                text-sm
                md:text-base
                w-[170px]
                sm:w-[220px]
                md:w-[250px]
                lg:w-[320px]
              "
              />

              <button className="bg-[#9b6b25] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mr-1">
                <img
                  src={searchIcon}
                  alt="searchIcon"
                  className="w-3 md:w-4"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-3 
          gap-2
          md:gap-3
          mt-12 
          max-w-7xl 
          mx-auto
          md:px-0
        "
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="
              relative 
              rounded-[30px] 
              overflow-hidden 
              group 
              h-[240px]
              md:h-[280px]
              lg:h-[420px]
            "
            >
              {/* Image */}
              <img
                src={property.image}
                alt={property.city}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35"></div>

              {/* Content Box */}
              <div
                className="
                absolute 
                bottom-0 
                left-0
                bg-[#d9d0c7] 
                rounded-tr-[28px]

                px-2
                md:px-4
                lg:px-5

                py-2
                md:py-3
                lg:py-4

                w-[108px]
                sm:w-[130px]
                md:w-[160px]
                lg:w-[220px]

                shadow-xl
              "
              >
                <h2
                  className="
                  text-[10px]
                  sm:text-[11px]
                  md:text-[14px]
                  lg:text-xl
                  font-semibold
                  text-[#c6841a]
                "
                >
                  {property.city}
                </h2>

                <div
                  className="
                  flex 
                  items-center 
                  justify-between 
                  mt-1 
                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  lg:text-sm
                  text-gray-800
                "
                >
                  <div>
                    <p className="font-semibold">{property.sqft}</p>
                    <span>Sq. Ft</span>
                  </div>

                  <div className="border-l border-gray-500 h-6 lg:h-10"></div>

                  <div>
                    <p className="font-semibold">{property.beds}</p>
                    <span>Beds</span>
                  </div>

                  <div className="border-l border-gray-500 h-6 lg:h-10"></div>

                  <div>
                    <p className="font-semibold">{property.baths}</p>
                    <span>Baths</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
