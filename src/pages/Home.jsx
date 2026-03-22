import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--color-accent-dark)',
          transformOrigin: '0%',
          zIndex: 2000,
          scaleX
        }}
      />
      
      <main>
        <Hero />
        <Stats />
        
        {/* Services Highlight */}
        <section style={{ padding: '120px 0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '70px', flexWrap: 'wrap', gap: '30px' }}>
              <div>
                <span className="premium-subtitle">EXPLORE</span>
                <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>What We <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Offer</span></h2>
                <p className="premium-text" style={{ color: '#666', fontSize: '1.1rem' }}>Tailored styling solutions for every facet of your life.</p>
              </div>
              <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--color-accent-dark)', fontWeight: 700, fontSize: '1.1rem' }}>
                View Services & Programs <ArrowRight size={22} />
              </Link>
            </div>
          </div>
          <Services />
        </section>

        <Process />

        {/* Gallery Highlight */}
        <section style={{ padding: '120px 5%', background: '#fdf6f3' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '70px', flexWrap: 'wrap', gap: '30px' }}>
              <div>
                <span className="premium-subtitle">PORTFOLIO</span>
                <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Client <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Transformations</span></h2>
                <p className="premium-text" style={{ color: '#666', fontSize: '1.1rem' }}>See how styling and color analysis transformed our clients.</p>
              </div>
              <Link to="/gallery" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--color-accent-dark)', fontWeight: 700, fontSize: '1.1rem' }}>
                View Full Gallery <ArrowRight size={22} />
              </Link>
            </div>
            <Gallery />
          </div>
        </section>

        <Testimonials />

        {/* Call to Action */}
        <section style={{ padding: '100px 5%', textAlign: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '800px',maxHeight: '550px', margin: '0 auto', padding: '100px 30px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.05)' }}>
            <span className="premium-subtitle">READY TO START?</span>
            <h2 className="premium-title" style={{ fontSize: '4rem', margin: '20px 0', fontFamily: 'var(--font-heading)' }}>Redefine Your <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Personal</span> Brand</h2>
            <p className="premium-text" style={{ fontSize: '1.3rem', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px auto', color: '#555', lineHeight: '1.8' }}>
              Join 500+ confident clients. Book your 1-on-1 consultation today and start your journey.
            </p>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="premium-button button-primary" style={{ padding: '20px 50px', fontSize: '1.1rem' }}>Book Session</Link>
            </div>
          </div>
        </section>

        <FAQ/>

        <Contact/>
      </main>

      <motion.a
        href="https://wa.me/917416605187"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
          zIndex: 1000,
          textDecoration: 'none'
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={35} fill="currentColor" />
      </motion.a>
    </>
  );
}
