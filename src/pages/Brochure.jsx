import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Placeholder variables for links
const CANVA_BROCHURE_URL = 'https://www.canva.com/design/DAGX4H8Z8O4/v9aM4N0tZV8S7c8Gj3X4Qw/view?embed';
const WHATSAPP_NUMBER = "917416605187";

export default function Brochure() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceQuery = searchParams.get('service');
  
  const service = location.state?.service || 'Personal Styling';

  const getWhatsAppLink = () => {
    if (service === 'Bridal Styling') {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Stylecues%20by%20Anugna!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20*Bridal%20Styling%20Service*.%0A%0ACould%20you%20please%20share%20the%20quote%20and%20more%20details%20about%20the%20package%3F%0A%0AThank%20you!`;
    }
    return `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Stylecues%20by%20Anugna!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20*Personal%20Styling%20Service*.%0A%0ACould%20you%20please%20share%20the%20quote%20and%20more%20details%20about%20the%20service%3F%0A%0AThank%20you!`;
  };

  let title = "Service Details";
  if (serviceQuery === 'personal-styling') title = "Personal Styling Brochure";
  else if (serviceQuery === 'bridal-styling') title = "Bridal Styling Brochure";

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <section style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="premium-subtitle">GET YOUR QUOTE</span>
          <h1 className="premium-title" style={{ marginBottom: '30px' }}>{title}</h1>
          <p className="premium-text" style={{ maxWidth: '700px', margin: '0 auto 50px', color: '#555' }}>
            Review our complete service details and pricing packages below. Once you are ready, schedule a consultation meeting with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card"
          style={{ 
            padding: '20px', 
            borderRadius: '20px', 
            marginBottom: '50px',
            background: 'rgba(255, 255, 255, 0.6)' 
          }}
        >
          {/* Canva Embed Container */}
          <div style={{
            position: 'relative', 
            width: '100%', 
            height: '0', 
            paddingTop: '141.4286%',
            paddingBottom: '0', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            willChange: 'transform'
          }}>
            <iframe 
              loading="lazy" 
              style={{
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                top: '0', 
                left: '0', 
                border: 'none', 
                padding: '0', 
                margin: '0'
              }}
              src={CANVA_BROCHURE_URL} 
              allowFullScreen="allowfullscreen" 
              allow="fullscreen"
            >
            </iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="premium-subtitle" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Ready to transform?</h3>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button button-primary"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 40px', 
              fontSize: '1.1rem', 
              textDecoration: 'none',
              background: '#25D366',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 600
            }}
          >
            Get a Quote on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
