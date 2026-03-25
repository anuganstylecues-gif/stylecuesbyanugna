import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = React.memo(({ title, price, features, highlighted = false, index }) => {
  return (
    <motion.div
      className="glass-card animated-element"
      style={{
        padding: '50px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: highlighted ? 'white' : 'transparent',
        border: highlighted ? '2px solid var(--color-accent-dark)' : '1px solid rgba(0,0,0,0.05)',
        transform: highlighted ? 'scale(1.05)' : 'scale(1)',
        zIndex: highlighted ? 3 : 2,
        position: 'relative',
        height: '100%',
        boxShadow: highlighted ? '0 30px 60px rgba(0,0,0,0.1)' : 'none',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      {highlighted && (
        <div style={{ 
          position: 'absolute', top: '-15px', background: 'var(--color-accent-dark)', 
          color: 'white', padding: '5px 20px', borderRadius: '20px', fontSize: '0.8rem',
          fontWeight: '700', textTransform: 'uppercase'
        }}>
          Most Popular
        </div>
      )}
      
      <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{title}</h3>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <span style={{ fontSize: '1.2rem', verticalAlign: 'top', marginRight: '5px' }}>₹</span>
        <span style={{ fontSize: '3.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>{price}</span>
      </div>

      <ul style={{ listStyle: 'none', width: '100%', margin: '30px 0' }}>
        {features.map((feature, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontSize: '0.9rem', color: '#555' }}>
            <div style={{ background: 'var(--color-accent-light)', borderRadius: '50%', padding: '2px', color: 'var(--color-accent-dark)' }}>
              <Check size={14} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: '100%', marginTop: 'auto' }}
      >
        <Link 
          to="/booking" 
          state={{ program: title, price: `₹${price}` }}
          className={`premium-button ${highlighted ? 'button-primary' : 'button-secondary'}`}
          style={{ width: '100%', textAlign: 'center', display: 'block' }}
        >
          Choose Plan
        </Link>
      </motion.div>
    </motion.div>
  );
});

export default function Pricing() {
  const plans = [
    {
      title: "Color Analysis",
      price: "2,499",
      features: [
        "Digital Color Palette",
        "Jewelry & Makeup Guide",
        "Seasonal Sub-type Identification",
        "45-Minute Online Session"
      ]
    },
    {
      title: "Style Makeover",
      price: "14,999",
      highlighted: true,
      features: [
        "Full Color Analysis",
        "Body Type & Style Personality",
        "Custom Style Guideline Guide",
        "Wardrobe Audit (Virtual)",
        "30 Days Support"
      ]
    },
    {
      title: "Bridal Styling",
      price: "19,999+",
      features: [
        "Complete Bridal Look Curation",
        "Jewelry Coordination",
        "Outfit Mix & Match",
        "In-person Availability",
        "Trial Session"
      ]
    }
  ];

  return (
    <section id="programs" style={{ background: 'var(--color-bg)', padding: '100px 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="premium-subtitle">INVESTMENT</span>
          <h2 style={{ fontSize: '3rem' }}>Investment in <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>You</span></h2>
          <p style={{ color: '#777', marginTop: '10px' }}>Transparent pricing for your style transformation journey.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
