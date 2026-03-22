import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '25px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          border: '1px solid rgba(0,0,0,0.05)',
          cursor: 'pointer',
          background: 'white',
          borderRadius: isOpen ? '25px 25px 0 0' : '25px',
          transition: 'all 0.3s ease',
          boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={24} color="var(--color-accent-dark)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ 
              padding: '0 30px 25px 30px', 
              background: 'white', 
              borderRadius: '0 0 25px 25px',
              border: '1px solid rgba(0,0,0,0.05)',
              borderTop: 'none',
              boxShadow: '0 20px 30px rgba(0,0,0,0.05)',
            }}>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What exactly is Color Analysis?",
      answer: "Color analysis is the process of determining which colors best harmonize with your natural coloring (skin, eyes, and hair). We use professional 'seasonal' typing to find your best shades, which helps you look more vibrant and minimizes the appearance of shadows or discoloration."
    },
    {
      question: "Do I need to be in Bangalore/Hyderabad for a session?",
      answer: "Not necessarily! While Anugna is based in India, she offers high-precision virtual consultations globally. We use specific lighting instructions and high-resolution tools to ensure your virtual analysis is just as accurate as an in-person session."
    },
    {
      question: "How long does a typical makeover take?",
      answer: "A standard Color Analysis takes about 45-60 minutes. The full Style Makeover, including a wardrobe audit, usually takes 2-3 hours spread over two sessions to ensure you have time to digest the information and ask questions."
    },
    {
      question: "Will I get a list of where to shop?",
      answer: "Yes! Every consultation includes a curated list of recommendations based on your budget, style personality, and location. For clients in India, we provide specific brand recommendations available locally."
    },
    {
      question: "Can I book a session for a group?",
      answer: "Absolutely! We offer 'Style parties' for groups of 3-5. This is a popular choice for bridal parties or friendship goals. Please contact us via social media for group booking rates."
    }
  ];

  return (
    <section id="faq" style={{ background: 'var(--color-bg)', padding: '120px 5%' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="premium-subtitle">FAQ</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '15px' }}>Common <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Questions</span></h2>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
