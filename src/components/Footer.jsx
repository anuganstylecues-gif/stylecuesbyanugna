import { Instagram, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#2F2F2F', color: 'white', padding: '80px 5% 40px 5%' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '60px' 
      }}>
        <div style={{ gridColumn: 'span 1.5' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px' }}>STYLE CUES.</h2>
          <p style={{ color: '#aaa', maxWidth: '300px', lineHeight: '1.8' }}>Empowering individuals to discover their unique beauty through the science of color and art of styling by Anugna Reddy.</p>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: '600' }}>Explore</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>About Anugna</Link></li>
            <li><Link to="/services" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Services & Programs</Link></li>
            <li><Link to="/gallery" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Gallery</Link></li>
          </ul>

        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: '600' }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#aaa', fontSize: '0.9rem' }}>
              <Mail size={16} /> <a href="mailto:stylecuesbyanugna@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>stylecuesbyanugna@gmail.com</a>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#aaa', fontSize: '0.9rem' }}>
              <Phone size={16} /> <a href="tel:+917416605187" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7416 605 187</a>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#aaa', fontSize: '0.9rem' }}>
              <Instagram size={16} /> <a href="https://instagram.com/stylecuesbyanugna" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@stylecuesbyanugna</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '80px auto 0 auto', 
        paddingTop: '30px', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        color: '#777',
        fontSize: '0.85rem'
      }}>
        <p>&copy; {currentYear} Style Cues by Anugna. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Made with <Heart size={14} fill="#C0847A" color="#C0847A" /> for style lovers.</p>
      </div>
      
      <style>{`
        footer a:hover { color: var(--color-accent) !important; }
      `}</style>
    </footer>
  );
}
