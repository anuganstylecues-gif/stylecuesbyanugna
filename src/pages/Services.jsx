import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const mergedServices = [
    {
      title: 'Color Analysis',
      desc: 'Discover the palette that illuminates your natural features. Identify your undertones and build a harmonious color vocabulary.',
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
              <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="premium-subtitle" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{service.title}</h3>
                <p className="premium-text" style={{ fontSize: '1rem', marginBottom: '30px', color: '#555', lineHeight: '1.6', flexGrow: 1 }}>{service.desc}</p>
                
                <div style={{ 
                  background: 'var(--color-bg)', 
                  padding: '25px', 
                  borderRadius: '15px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  marginTop: 'auto'
                }}>
                  <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#777', marginBottom: '10px', fontWeight: '600' }}>Available Program</p>
                  <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-dark)', marginBottom: '5px' }}>{service.program.name}</h4>
                  {service.program.price && <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '25px' }}>{service.program.price}</div>}
                  
                  <Link 
                    to={service.program.route} 
                    state={{ program: service.program.name, price: service.program.price }}
                    className="premium-button button-primary" 
                    style={{ width: '100%', textAlign: 'center', display: 'block', marginTop: service.program.price ? '0' : '25px' }}
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
        }
      `}</style>
    </div>
  );
};

export default Services;
