import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Client Transformations', 'Bridal Styling', 'Event Styling'];

  const projects = [
    { id: 1, category: 'Client Transformations', image: 'style_transformation_portrait_1773512948495.png' },
    { id: 2, category: 'Bridal Styling', image: 'bridal_styling_session_1773512915106.png' },
    { id: 3, category: 'Event Styling', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=600' },
    { id: 4, category: 'Client Transformations', image: 'https://images.unsplash.com/photo-1550614000-4b95d466f202?auto=format&fit=crop&q=80&w=600' },
    { id: 5, category: 'Bridal Styling', image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Event Styling', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600' },
    { id: 7, category: 'Client Transformations', image: 'color_analysis_palette_1773512930582.png' },
    { id: 8, category: 'Bridal Styling', image: 'https://images.unsplash.com/photo-1595152230535-000c021c78b1?auto=format&fit=crop&q=80&w=600' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <section style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <span className="premium-subtitle">PORTFOLIO</span>
        <h1 className="premium-title">Style Gallery</h1>
        <p className="premium-text" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
          Explore our recent styling projects, client transformations, and editorial work.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'premium-button button-primary' : 'premium-button button-secondary'}
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="full-gallery-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                style={{ 
                  borderRadius: '15px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  background: '#f5f5f5',
                  height: '100%',
                  minHeight: '300px'
                }}
                className="gallery-item group"
              >
                <img 
                  src={project.image} 
                  alt={project.category} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '30px',
                  zIndex: 2
                }} className="overlay">
                  <div>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <style>{`
        .full-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 300px;
          gap: 20px;
        }
        
        /* Creates masonry-like span effect for visually interesting grid */
        .full-gallery-grid > div:nth-child(4n + 1) { grid-column: span 2; grid-row: span 2; }
        .full-gallery-grid > div:nth-child(4n + 2) { grid-column: span 2; }
        
        .gallery-item:hover img { transform: scale(1.08) !important; }
        .gallery-item:hover .overlay { opacity: 1 !important; }
        
        @media (max-width: 1200px) {
          .full-gallery-grid { grid-template-columns: repeat(3, 1fr); }
          .full-gallery-grid > div:nth-child(4n + 1) { grid-column: span 2; grid-row: span 1; }
          .full-gallery-grid > div:nth-child(4n + 2) { grid-column: span 1; }
        }
        
        @media (max-width: 768px) {
          .full-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .full-gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        
        @media (max-width: 480px) {
          .full-gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
