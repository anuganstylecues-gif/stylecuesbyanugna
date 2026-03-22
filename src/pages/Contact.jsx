import { motion } from 'framer-motion';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const cards = [
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      description: 'Chat directly for quick responses',
      buttonText: 'Message Now',
      link: 'https://wa.me/917416605187',
      color: '#25D366'
    },
    {
      icon: <Instagram size={32} />,
      title: 'Instagram',
      description: 'Follow for styling tips & inspiration',
      buttonText: 'Follow Us',
      link: 'https://instagram.com/stylecuesbyanugna',
      color: '#E1306C'
    },
    {
      icon: <Mail size={32} />,
      title: 'Email',
      description: 'For business & consultation inquiries',
      buttonText: 'Email Us',
      link: 'mailto:stylecuesbyanugna@gmail.com',
      color: 'var(--color-accent-dark)'
    }
  ];

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="premium-subtitle">GET IN TOUCH</span>
          <h1 className="premium-title">Contact Us</h1>
          <p className="premium-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Have questions about our programs or want to book a custom session? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-cards-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '20px',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                background: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: card.color,
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
              }}>
                {card.icon}
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', minHeight: '45px' }}>
                  {card.description}
                </p>
              </div>

              <motion.a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="premium-button"
                style={{
                  background: 'white',
                  color: 'var(--color-text)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  marginTop: 'auto',
                  display: 'inline-block',
                  width: '100%'
                }}
              >
                {card.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>
      
      <style>{`
        .contact-cards-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 40px; 
        }
        @media (max-width: 900px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .contact-cards-grid { grid-template-columns: 1fr; gap: 30px; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
