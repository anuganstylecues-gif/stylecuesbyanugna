import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Personal Style Sessions', value: '1200+' },
    { label: 'Workshops', value: '50+' },
    { label: 'Years Experience', value: '8+' }
  ];

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <section className="about-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="premium-subtitle">MEET THE STYLIST</span>
          <h1 className="premium-title">Anugna Reddy</h1>
          <p className="premium-text" style={{ fontSize: '1.2rem', color: 'var(--color-accent-dark)', fontWeight: '500', marginBottom: '20px' }}>
            Bridal & Personal Stylist | Color Analysis Expert | Internationally Certified Image Consultant
          </p>
          {/* <p className="premium-text">
            Based in India, Anugna Reddy is a visionary in the world of personal styling and image consulting. With an eye for detail and a passion for color harmony, she helps individuals discover their most authentic selves through style.
          </p>
          <p className="premium-text">
            Her philosophy is simple: Style is a language, and everyone deserves to speak it fluently. Whether it's for the most important day of your life or your everyday wardrobe, Anugna brings a blend of luxury, elegance, and practical styling to every consultation.
          </p> */}

          <ul style={{
            listStyle: 'none',
            padding: 0,
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            {[
              "Based in India, Anugna Reddy is a visionary in personal styling and image consulting.",
              "Possesses a refined eye for detail and a passion for color harmony.",
              "Guides individuals to discover their most authentic selves through style.",
              "Believes style is a language that everyone deserves to speak fluently.",
              "Caters to both special occasions and everyday wardrobe styling.",
              "Delivers a perfect blend of luxury, elegance, and practicality in every consultation."
            ].map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '14px'
              }}>

                {/* ICON */}
                <span style={{
                  minWidth: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--color-accent, #000)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  ✓
                </span>

                {/* TEXT */}
                <span className="premium-text">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent-dark)', marginBottom: '5px' }}>{stat.value}</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img
              src="https://res.cloudinary.com/ducb7wymk/image/upload/v1774434434/IMG_0595_qsns2m.jpg"
              alt="Anugna Reddy Stylist"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '100px auto 0', textAlign: 'center' }}>
        <h2 className="premium-title" style={{ fontSize: '2.5rem' }}>Certifications & Expertise</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
          {['Certified Image Consultant', 'Color Analysis Specialist', 'Bridal Styling Expert', 'Wardrobe Management', 'Etiquette Training'].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              style={{
                padding: '15px 30px',
                background: 'white',
                borderRadius: '50px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                fontWeight: '500',
                border: '1px solid var(--color-accent-light)'
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-hero { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
