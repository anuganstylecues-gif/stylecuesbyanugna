import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, User, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = React.memo(({ icon: Icon, title, description, program, index }) => {
  return (
    <motion.div
      className="glass-card animated-element"
      style={{
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        border: '1px solid rgba(192, 132, 122, 0.2)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0, ease: 'easeOut' }}
    >
      <div className="card-inner" style={{ padding: '40px 40px 30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="card-heading-container" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div className="icon-box" style={{
            width: '60px',
            height: '60px',
            borderRadius: '15px',
            background: 'var(--color-accent-light)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--color-accent-dark)',
            flexShrink: 0
          }}>
            <Icon size={30} className="service-icon" />
          </div>
          <h3 className="card-title" style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'var(--font-heading)', wordBreak: 'break-word' }}>{title}</h3>
        </div>
        <p className="card-desc" style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1, overflow: 'hidden' }}>{description}</p>

        <div className="program-box" style={{
          background: 'var(--color-bg)',
          padding: '20px',
          borderRadius: '15px',
          border: '1px solid rgba(0,0,0,0.05)',
          marginTop: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <p className="program-label" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#777', marginBottom: '10px', fontWeight: '600' }}>Available Program</p>
          <h4 className="program-title" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-dark)', marginBottom: '5px' }}>{program.name}</h4>
          <p className="program-details" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>{program.details}</p>
          {program.price && <div className="program-price" style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '20px' }}>{program.price}</div>}

          <Link
            to={program.route}
            state={{ program: program.name, price: program.price }}
            className="premium-button button-primary program-btn"
            style={{ width: '100%', textAlign: 'center', padding: '12px 20px', marginTop: program.price ? 'auto' : '20px', display: 'block' }}
          >
            {program.buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

export default function Services() {
  const mergedServices = [
    {
      icon: Palette,
      title: "Color Analysis",
      description: "Discover your ideal color palette and learn which shades enhance your natural features based on your skin, hair, and eyes.",
      program: {
        name: "Online Color Analysis Session",
        details: "45 min virtual session + 50-page digital style lookbook.",
        price: "₹12,000",
        buttonText: "Book Now",
        route: "/booking"
      }
    },
    {
      icon: User,
      title: "Personal Styling",
      description: "A tailored approach to your wardrobe that aligns with your personality, lifestyle, and body type. Includes a comprehensive wardrobe audit and strategic shopping advice.",
      program: {
        name: "Complete Style Makeover",
        details: "3-4 hour comprehensive session (virtual or in-person).",
        price: null,
        buttonText: "Get Quote",
        route: "/brochure?service=personal-styling"
      }
    },
    {
      icon: Heart,
      title: "Bridal Styling",
      description: "Expert luxury guidance for your special day. From selecting the perfect bridal gown and jewelry to coordinating the entire bridal party's looks seamlessly.",
      program: {
        name: "Bridal Styling Consultation",
        details: "Full day curation, mapping, and personal shopping companion.",
        price: null,
        buttonText: "Get Quote",
        route: "/brochure?service=bridal-styling"
      }
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    if (children.length === 0) return;
    // Card width + gap
    const cardWidth = children[0].offsetWidth + 30;
    // Find closest index matching scroll distance
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const { children } = scrollRef.current;
    if (children.length === 0) return;
    const cardWidth = children[0].offsetWidth + 30; // Matches gap logic

    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <div style={{ background: 'transparent', padding: '20px 0', position: 'relative' }}>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          overflowY: 'visible',
          gap: '30px',
          padding: '20px max(5%, calc((100% - 1400px) / 2)) 40px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none',  // For IE and Edge
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          scrollBehavior: 'smooth'
        }}
        className="horizontal-scroll-container"
      >
        {mergedServices.map((service, index) => (
          <div key={index} className="service-card-wrapper">
            <ServiceCard {...service} index={index} />
          </div>
        ))}
      </div>

      {/* Slider Buttons (Left/Right) for mobile/tablet */}
      {isMobile && (
        <>
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            className="slider-button"
            style={{ left: '15px' }}
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={24} color={activeIndex === 0 ? '#ccc' : 'var(--color-accent-dark)'} />
          </button>

          <button
            onClick={() => scrollTo(Math.min(mergedServices.length - 1, activeIndex + 1))}
            className="slider-button"
            style={{ right: '15px' }}
            disabled={activeIndex >= mergedServices.length - (window.innerWidth <= 768 ? 1 : 2)}
          >
            <ChevronRight size={24} color={activeIndex >= mergedServices.length - (window.innerWidth <= 768 ? 1 : 2) ? '#ccc' : 'var(--color-accent-dark)'} />
          </button>
        </>
      )}

      {/* Dots */}
      {isMobile && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          {mergedServices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              style={{
                width: activeIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeIndex === idx ? 'var(--color-accent-dark)' : 'rgba(0,0,0,0.15)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <style>{`
        .horizontal-scroll-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        .service-card-wrapper {
            min-width: 320px;
            max-width: 380px;
            flex: 0 0 auto;
        }
        .slider-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(192, 132, 122, 0.3);
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
        }
        .slider-button:hover:not(:disabled) {
            background: white;
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            transform: translateY(-50%) scale(1.05);
        }
        .slider-button:disabled {
            cursor: default;
            box-shadow: none;
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        @media (max-width: 1024px) {
           .service-card-wrapper {
              scroll-snap-align: center;
              min-width: calc(50% - 15px) !important; /* Two cards on tablet exactly */
              max-width: none !important;
           }
        }
        @media (max-width: 768px) {
           .slider-button {
              width: 35px;
              height: 35px;
           }
           .horizontal-scroll-container {
              padding-left: 7.5vw !important; /* Forces perfect 85% width centered layout */
              padding-right: 7.5vw !important;
              gap: 15px !important;
           }
           .service-card-wrapper {
              min-width: 85vw !important; 
              max-width: 85vw !important; 
              height: 420px !important; 
              padding: 0 !important;
              box-sizing: border-box;
           }
           /* Optimize internal card density to fit within 420px strictly */
           .glass-card .card-inner {
              padding: 24px 20px 20px !important;
           }
           .glass-card .card-heading-container {
              gap: 8px !important;
              margin-bottom: 12px !important;
           }
           .glass-card .icon-box {
              width: 36px !important;
              height: 36px !important;
              margin-bottom: 0 !important;
              border-radius: 10px !important;
           }
           .glass-card .icon-box svg {
              width: 22px !important;
              height: 22px !important;
           }
           .glass-card .card-title {
              font-size: 1.3rem !important;
              margin: 0 !important;
              line-height: 1.25 !important;
           }
           .glass-card .card-desc {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
              margin-bottom: 15px !important;
           }
           .glass-card .program-box {
              padding: 15px !important;
           }
           .glass-card .program-label {
              font-size: 0.75rem !important;
              margin-bottom: 5px !important;
           }
           .glass-card .program-title {
              font-size: 1.1rem !important;
              margin-bottom: 5px !important;
           }
           .glass-card .program-details {
              font-size: 0.8rem !important;
              margin-bottom: 10px !important;
           }
           .glass-card .program-price {
              font-size: 1.2rem !important;
              margin-bottom: 12px !important;
           }
           .glass-card .program-btn {
              padding: 10px 15px !important;
              font-size: 0.9rem !important;
           }
        }
      `}</style>
    </div>
  );
}
