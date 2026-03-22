import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value.replace(/,/g, ''));
      const duration = 2;
      let timer = setInterval(() => {
        start += end / (duration * 60);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '4rem', 
        fontWeight: '700', 
        color: 'var(--color-accent-dark)',
        marginBottom: '10px'
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '1.1rem', 
        textTransform: 'uppercase', 
        letterSpacing: '3px',
        color: '#777',
        fontWeight: '600'
      }}>
        {label}
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { value: "500", label: "Clients Styled", suffix: "+" },
    { value: "22800", label: "Style Community", suffix: "+" },
    { value: "100", label: "Consultant Certified", suffix: "%" },
  ];

  return (
    <section id="stats" style={{ background: '#fff', padding: '120px 5%' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '60px' 
      }}>
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
