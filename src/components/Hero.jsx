import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '120px',
      background: 'radial-gradient(circle at 70% 30%, #EAD7D1 0%, #FDF6F3 60%)',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gridTemplateAreas: `
        "header image"
        "body image"
      `,
      gap: '10px 50px',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      zIndex: 2,
      padding: '0 5%',
      alignItems: 'center',
    },
    title: {
      fontSize: '4.5rem',
      lineHeight: '1.1',
      marginBottom: '20px',
      color: 'var(--color-text)',
      fontFamily: 'var(--font-heading)',
    },
    subtext: {
      fontSize: '1.2rem',
      color: '#555',
      maxWidth: '550px',
      marginBottom: '40px',
      lineHeight: '1.6',
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    imageContainer: {
      position: 'relative',
      gridArea: 'image',
    },
    imageWrapper: {
      width: '100%',
      height: '550px',
      borderRadius: '40px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
      border: '10px solid white',
      objectFit: 'cover',
    },
    floatingCard: {
      position: 'absolute',
      padding: '20px',
      width: '180px',
      zIndex: 3,
    }
  };

  return (
    <section id="hero" style={styles.section}>
      {/* Background elements */}
      <motion.div
        style={{
          position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px',
          background: 'rgba(217, 167, 160, 0.2)', borderRadius: '50%', filter: 'blur(100px)',
          y: y1
        }}
      />

      <div style={styles.container} className="hero-grid-container">

        {/* HEADER SECTION */}
        <motion.div
          className="hero-header-section"
          style={{ gridArea: 'header', alignSelf: 'end' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="premium-subtitle" style={{ display: 'block', marginBottom: '15px' }}>Style Cues by Anugna Reddy</span>
          <motion.h1 style={styles.title} className="hero-title">
            Discover Your <span style={{ color: 'var(--color-accent-dark)', fontStyle: 'italic' }}>Signature</span> Colors & Style
          </motion.h1>
        </motion.div>

        {/* BODY SECTION */}
        <motion.div
          className="hero-body-section"
          style={{ gridArea: 'body', alignSelf: 'start' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="subtext" style={styles.subtext}>
            Elevate your personal brand with expert Color Analysis and Image Consulting. Based in India, serving clients globally.
          </p>
          <div className="buttonGroup" style={styles.buttonGroup}>
            <motion.div
              style={{ width: 'max-content' }}
              className="btn-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/booking" className="premium-button button-primary" style={{ padding: '15px 40px', fontSize: '1rem', display: 'block', width: '100%' }}>
                Book Consultation
              </Link>
            </motion.div>
            <motion.div
              style={{ width: 'max-content' }}
              className="btn-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/gallery" className="premium-button button-secondary" style={{ padding: '15px 40px', fontSize: '1rem', display: 'block', width: '100%' }}>
                View Transformations
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          style={styles.imageContainer}
          className="hero-image-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={styles.imageWrapper} className="imageWrapper">
            <img
              src="https://res.cloudinary.com/ducb7wymk/image/upload/v1774439013/copy_of_def967f5-76a9-4db2-b9d8-00dbfd36eed3_1_105_c_ooyqhw_09b06c.jpg"
              alt="Personal Stylist"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <motion.div
            className="glass-card floating-card"
            style={{ ...styles.floatingCard, bottom: '15%', right: '-10%' }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Confidence Level</div>
            <div style={{ height: '6px', background: '#eee', borderRadius: '3px', marginTop: '10px' }}>
              <motion.div
                style={{ height: '100%', background: 'var(--color-accent-dark)', borderRadius: '3px' }}
                initial={{ width: 0 }}
                animate={{ width: '95%' }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #hero .hero-grid-container {
            grid-template-columns: 1fr !important;
            grid-template-areas: 
              "header"
              "image"
              "body" !important;
            text-align: center;
            gap: 40px !important;
          }
          #hero .hero-header-section, #hero .hero-body-section {
            align-self: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 768px) {
          #hero {
             padding-top: 100px !important;
          }
          /* Reset container to single column flex */
          #hero .hero-grid-container {
             display: flex !important;
             flex-direction: column !important;
             align-items: center !important;
             gap: 20px !important;
             text-align: center;
          }
          
          /* Element Specific Sizing & Margin */
          #hero .hero-header-section {
             order: 1;
             width: 100%;
             align-items: flex-start !important; /* Force left alignment of flex items */
          }
          #hero .hero-image-content {
             order: 2;
             width: 100%;
             max-width: 280px !important; /* Proper max width */
             margin: 10px auto; 
          }
          #hero .hero-body-section {
             order: 3;
             width: 100%;
          }
          
          /* Floating elements adjustments for mobile */
          #hero .floating-card {
             transform: scale(0.85); /* Slightly smaller on mobile */
             padding: 15px !important;
             height: auto !important;
             min-height: 0 !important;
          }
          
          /* Target specific floating cards to position them correctly on the smaller mobile image */
          #hero .floating-card { /* Confidence Level */
             bottom: 10% !important;
             right: -20px !important;
             width: max-content !important;
             max-width: 170px !important;
          }
          
          /* Typography Resizing for mobile */
          #hero .hero-title { 
            font-size: 30px !important; 
            line-height: 1.2 !important;
            margin-bottom: 0 !important;
            text-align: left !important;
            order: 2; /* Tagline is 1, Title is 2 inside header-section */
          }
          #hero .premium-subtitle {
            font-size: 12px !important;
            margin-bottom: 8px !important;
            text-align: left !important;
            align-self: flex-start !important;
            order: 1; /* Tagline first */
          }
          #hero .subtext { 
            font-size: 16px !important;
            line-height: 1.5 !important;
            margin: 0 auto 20px auto !important; 
            padding: 0;
            color: #555;
            max-width: 100%;
            text-align: center !important;
            order: 1; /* Inside body section */
          }
          
          /* Keep buttons horizontal (in one line) */
          #hero .buttonGroup { 
            order: 2; /* Inside body section, after text */
            width: 100%; 
            display: flex !important; 
            flex-direction: row !important; 
            align-items: center !important;
            justify-content: center !important;
            flex-wrap: nowrap !important;
            gap: 12px !important; 
          }
          #hero .btn-wrapper { 
            width: auto !important; 
            max-width: none !important; 
          }
          #hero .buttonGroup a {
            width: auto !important;
            padding: 12px 16px !important; 
            font-size: 14px !important;
            text-align: center !important;
            white-space: nowrap;
          }
          
          /* Improve inner wrapper aspect ratio natively */
          #hero .imageWrapper { 
            height: auto !important; 
            width: 100% !important;
            border-width: 4px !important; 
            aspect-ratio: 4/5;
            object-fit: cover;
          }
        }
        @media (max-width: 480px) {
          #hero .hero-title { font-size: 24px !important; }
          #hero .subtext { font-size: 14px !important; }
          #hero .buttonGroup a { padding: 10px 12px !important; font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
