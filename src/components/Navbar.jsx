import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Programs', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '15px 5%' : '25px 5%',
      background: scrolled ? 'rgba(253, 246, 243, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    logo: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.4rem',
      fontWeight: '700',
      color: 'var(--color-text)',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
    links: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'var(--color-text)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.85rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'all 0.3s ease',
      opacity: 0.8,
    },
    activeLink: {
      opacity: 1,
      color: 'var(--color-accent-dark)',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: '5%',
      right: '5%',
      background: 'rgba(253, 246, 243, 0.98)',
      backdropFilter: 'blur(15px)',
      borderRadius: '24px',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0,0,0,0.05)',
      marginTop: '10px'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          STYLE CUES <span style={{ fontWeight: 300, fontSize: '0.9rem' }}>BY ANUGNA</span>
        </Link>
        
        <div className="desktop-nav" style={styles.links}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                ...styles.link,
                ...(location.pathname === link.path ? styles.activeLink : {})
              }} 
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="premium-button button-primary" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>
            Book Session
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', zIndex: 1002 }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} color="var(--color-text)" /> : <Menu size={28} color="var(--color-text)" />}
        </button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; position: relative; }
        }
        .nav-link:hover { opacity: 1; color: var(--color-accent-dark); }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{ 
                  ...styles.link, 
                  fontSize: '1.1rem',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  ...(location.pathname === link.path ? styles.activeLink : {})
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              className="premium-button button-primary" 
              style={{ marginTop: '10px', textAlign: 'center', fontSize: '1rem', padding: '15px' }}
              onClick={() => setIsOpen(false)}
            >
              Book Session
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
