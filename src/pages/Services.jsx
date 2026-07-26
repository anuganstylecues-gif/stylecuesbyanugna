import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const mergedServices = [
    // {
    //   tag: "UK Telugu Pageant",
    //   title: "Basic Package",
    //   desc: "Your foundation for a confident, polished pageant look",
    //   features: [
    //     "Color Analysis — 30 best colors curated to your skin tone",
    //     "Body type analysis with flattering silhouette guidance",
    //     "Face type analysis to enhance your natural features",
    //     "Basic style guidance tailored to your unique type"
    //   ],
    //   program: {
    //     name: "Basic Package — UK Telugu Pageant",
    //     price: "₹18,000",
    //     priceOriginal: "₹25,000",
    //     priceBadge: "Save ₹7,000 · Limited time offer",
    //     buttonText: "Book Now",
    //     route: "/booking"
    //   },
    //   image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600"
    // },
    // {
    //   tag: "UK Telugu Pageant",
    //   title: "Luxe Package",
    //   desc: "A complete style transformation built for the stage",
    //   features: [
    //     "Extended color analysis — 60+ best colors for every look and occasion",
    //     "Body type analysis with advanced styling strategies",
    //     "Face type analysis with makeup & accessory guidance",
    //     "Signature style development — defining your unique style identity",
    //     "Personalized shopping guidance — exactly what to buy and where"
    //   ],
    //   program: {
    //     name: "Luxe Package — UK Telugu Pageant",
    //     price: "₹35,000",
    //     priceOriginal: "₹45,000",
    //     priceBadge: "Save ₹10,000 · Limited time offer",
    //     buttonText: "Book Now",
    //     route: "/booking"
    //   },
    //   image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600"
    // },
    {
      title: 'Color Analysis',
      desc: 'Discover the palette that illuminates your natural features. Identify your undertones and build a harmonious color vocabulary.',
      features: [
        "Discover your 30 best colors suited to your skin tone",
        "Seasonal color palette analysis",
        "Colors to wear and avoid guide",
        "Personalized 50-page digital style lookbook"
      ],
      program: {
        name: 'Online Color Analysis Session',
        price: '₹12,000',
        buttonText: 'Book Now',
        route: '/booking'
      },
      image: 'https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Personal Styling',
      desc: 'Craft a signature style that aligns with your personality and goals. Transform your confidence and daily dressing experience.',
      features: [
        "Complete wardrobe audit session",
        "Body type analysis with flattering silhouette guidance",
        "Personalized style roadmap",
        "Strategic shopping guidance"
      ],
      program: {
        name: 'Complete Style Makeover',
        price: null,
        buttonText: 'Get Quote',
        route: '/brochure?service=personal-styling'
      },
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Bridal Styling',
      desc: 'The ultimate luxury experience for your dream wedding look. Expert guidance for you and coordination for the bridal party.',
      features: [
        "Bridal look curation from head to toe",
        "Jewelry and accessory guidance",
        "Bridal party coordination",
        "Full day personal styling companion"
      ],
      program: {
        name: 'Bridal Styling Consultation',
        price: null,
        buttonText: 'Get Quote',
        route: '/brochure?service=bridal-styling'
      },
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="page-container" style={{ padding: '120px 0 60px' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 5%' }}>
        <span className="premium-subtitle">OUR OFFERINGS</span>
        <h1 className="premium-title">Services & Programs</h1>
        <p className="premium-text" style={{ maxWidth: '700px', margin: '0 auto 60px' }}>
          Explore our professional styling services. Each service is paired with a comprehensive program tailored to elevate your personal image.
        </p>
      </section>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        overflowY: 'visible',
        gap: '30px',
        padding: '20px max(5%, calc((100% - 1200px) / 2)) 40px',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none',  // For IE and Edge
      }}
      className="horizontal-scroll-container page-services-grid"
      >
          {mergedServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card service-card"
              style={{ 
                minWidth: '350px',
                maxWidth: '400px',
                flex: '0 0 auto',
                textAlign: 'left', 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid rgba(192, 132, 122, 0.2)' 
              }}
            >
              <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="card-inner" style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="card-content-top" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {service.tag && (
                    <div className="card-tag" style={{
                      background: 'rgba(192, 132, 122, 0.15)',
                      color: 'var(--color-accent-dark)',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      width: 'fit-content',
                      marginBottom: '15px'
                    }}>
                      {service.tag}
                    </div>
                  )}
                  <h3 className="premium-subtitle" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{service.title}</h3>
                  <p className="premium-text" style={{ fontSize: '1rem', marginBottom: service.features ? '20px' : '30px', color: '#555', lineHeight: '1.6' }}>{service.desc}</p>
                  
                  {service.features && (
                    <ul style={{ listStyle: 'none', margin: '0 0 30px 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#444', lineHeight: '1.4' }}>
                          <span style={{ color: 'var(--color-accent-dark)', flexShrink: 0, fontSize: '0.9rem' }}>✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="card-program-box" style={{ 
                  background: 'var(--color-bg)', 
                  padding: '25px', 
                  borderRadius: '15px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  marginTop: 'auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#777', marginBottom: '10px', fontWeight: '600' }}>Available Program</p>
                  <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-dark)', marginBottom: '5px' }}>{service.program.name}</h4>
                  
                  {service.program.priceOriginal && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                      <span style={{ fontSize: '1.1rem', textDecoration: 'line-through', color: '#888' }}>{service.program.priceOriginal}</span>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text)' }}>{service.program.price}</span>
                    </div>
                  )}
                  {!service.program.priceOriginal && service.program.price && (
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '25px' }}>{service.program.price}</div>
                  )}
                  {service.program.priceBadge && (
                    <div style={{
                      background: 'rgba(192, 132, 122, 0.1)',
                      color: 'var(--color-accent-dark)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      width: 'fit-content'
                    }}>
                      {service.program.priceBadge}
                    </div>
                  )}
                  
                  <Link 
                    to={service.program.route} 
                    state={{ program: service.program.name, price: service.program.price }}
                    className="premium-button button-primary" 
                    style={{ width: '100%', textAlign: 'center', display: 'block', marginTop: (service.program.price || service.program.priceOriginal) ? '0' : '25px' }}
                  >
                    {service.program.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      <style>{`
        .horizontal-scroll-container::-webkit-scrollbar {
            display: none; /* For Chrome, Safari, and Opera */
        }
        @media (max-width: 1024px) {
           .page-services-grid {
              flex-wrap: wrap !important;
              justify-content: center !important;
              overflow-x: visible !important;
           }
           .service-card {
              flex: 1 1 calc(50% - 30px) !important;
              min-width: 0 !important;
              max-width: 450px !important;
           }
        }
        @media (max-width: 768px) {
           .page-services-grid {
              flex-direction: column !important;
              align-items: center !important;
              padding: 20px 5% 40px !important;
           }
           .service-card {
              flex: 1 1 auto !important;
              width: 100% !important;
              max-width: 450px !important;
              margin-bottom: 0px; 
           }
           .card-inner {
              justify-content: flex-start !important;
           }
           .card-program-box {
              margin-top: 20px !important;
           }
        }
      `}</style>
    </div>
  );
};

export default Services;
