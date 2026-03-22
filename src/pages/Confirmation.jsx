import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "917416605187"; // Replace with real WhatsApp number

const Confirmation = () => {
  const { state } = useLocation();
  const transactionId = state?.transactionId || '';

  const textMessage = `Hello Stylecues by Anugna! 🎉

I have enrolled for the *Coloring Styling Service*.

Transaction ID: ${transactionId}
Amount Paid: ₹12,000

Please find the attached payment screenshot for your reference.

Kindly confirm my booking. Thank you!`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`;

  return (
    <div className="page-container" style={{ padding: '160px 5% 60px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card" 
        style={{ maxWidth: '600px', width: '100%', textAlign: 'center', padding: '50px 40px' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <CheckCircle size={80} color="#25D366" style={{ margin: '0 auto 20px' }} />
        </motion.div>
        
        <h2 className="premium-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Payment Submitted Successfully! 🎉</h2>
        <p className="premium-text" style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.8 }}>
          Thank you for booking the Coloring Service with Stylecues by Anugna
        </p>

        <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '15px', padding: '30px', textAlign: 'left', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
            <span style={{ opacity: 0.7 }}>Service</span>
            <span style={{ fontWeight: 600 }}>Coloring Service</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
            <span style={{ opacity: 0.7 }}>Amount Paid</span>
            <span style={{ fontWeight: 600 }}>₹12,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
            <span style={{ opacity: 0.7 }}>Transaction ID</span>
            <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{transactionId}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ opacity: 0.7 }}>Status</span>
            <span style={{ fontWeight: 600, color: '#d97706' }}>Pending Verification ⏳</span>
          </div>
        </div>

        <div style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '20px', textAlign: 'left', marginBottom: '30px' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d97706', marginBottom: '10px', fontSize: '1.1rem', fontWeight: 700 }}>
            Action Required ⚠️
          </h4>
          <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.5, margin: 0, color: 'var(--color-text)' }}>
            Your payment is under verification. To confirm your booking please send us your payment screenshot on WhatsApp. We will verify and confirm your appointment within 24 hours.
          </p>
        </div>

        <a 
          href={whatsappUrl} 
          className="premium-button" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px', 
            width: '100%', 
            padding: '18px', 
            fontSize: '1.1rem', 
            background: '#25D366', 
            color: 'white', 
            border: 'none', 
            marginBottom: '10px',
            textDecoration: 'none',
            borderRadius: '30px',
            fontWeight: 600
          }}
        >
          📲 Send Screenshot on WhatsApp
        </a>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '30px' }}>
          Please attach your payment screenshot when the WhatsApp chat opens
        </p>

        <Link to="/" className="premium-button button-primary" style={{ display: 'inline-block', padding: '15px 40px', background: 'transparent', color: 'var(--color-text)', border: '1px solid rgba(0,0,0,0.1)' }}>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Confirmation;
