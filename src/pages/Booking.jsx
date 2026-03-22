import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProgram = location.state?.program || 'Standard Consultation';
  const selectedPrice = location.state?.price || '₹12,000';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    mode: 'Online',
    workType: '',
    companyName: '',
    needs: [],
    challenge: '',
    goals: '',
    timing: 'Not urgent'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (need) => {
    const newNeeds = formData.needs.includes(need)
      ? formData.needs.filter(n => n !== need)
      : [...formData.needs, need];
    setFormData({ ...formData, needs: newNeeds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { ...formData, program: selectedProgram, price: selectedPrice } });
  };

  const needsOptions = [
    'Workwear', 'Casual everyday wear', 'Occasion outfits', 
    'Ethnic wear', 'Capsule wardrobe planning', 'Color coordination', 'All of the above'
  ];

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            background: 'var(--color-accent-light)', 
            padding: '20px 30px', 
            borderRadius: '15px', 
            marginBottom: '40px',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>Selected Program</span>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{selectedProgram}</h3>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>Price</span>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-accent-dark)' }}>{selectedPrice}</h3>
          </div>
        </motion.div>

        <h2 className="premium-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Client Questionnaire</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '25px' }}>
          <div className="form-group">
            <label style={labelStyle}>Full Name</label>
            <input type="text" name="fullName" required style={inputStyle} value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label style={labelStyle}>Phone Number</label>
              <input type="tel" name="phone" required style={inputStyle} value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label style={labelStyle}>Email Address</label>
              <input type="email" name="email" required style={inputStyle} value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
            </div>
          </div>

          <div className="form-group">
            <label style={labelStyle}>City & Country</label>
            <input type="text" name="city" required style={inputStyle} value={formData.city} onChange={handleInputChange} placeholder="e.g. Bangalore, India" />
          </div>

          <div className="form-group">
            <label style={labelStyle}>Preferred Mode of Analysis</label>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="radio" name="mode" value="Online" checked={formData.mode === 'Online'} onChange={handleInputChange} /> Online (Video Call)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="radio" name="mode" value="Offline" checked={formData.mode === 'Offline'} onChange={handleInputChange} /> Offline (In-person)
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label style={labelStyle}>Work Type</label>
              <input type="text" name="workType" style={inputStyle} value={formData.workType} onChange={handleInputChange} placeholder="e.g. Entrepreneur, Student" />
            </div>
            <div className="form-group">
              <label style={labelStyle}>Company Name</label>
              <input type="text" name="companyName" style={inputStyle} value={formData.companyName} onChange={handleInputChange} placeholder="Optional" />
            </div>
          </div>

          <div className="form-group">
            <label style={labelStyle}>Main Wardrobe Needs</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '10px' }}>
              {needsOptions.map((need, idx) => (
                <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input type="checkbox" checked={formData.needs.includes(need)} onChange={() => handleCheckboxChange(need)} /> {need}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label style={labelStyle}>Biggest Dressing Challenge</label>
            <textarea name="challenge" style={inputStyle} rows="3" value={formData.challenge} onChange={handleInputChange} placeholder="What do you struggle with the most?"></textarea>
          </div>

          <div className="form-group">
            <label style={labelStyle}>Goals from this session</label>
            <textarea name="goals" style={inputStyle} rows="3" value={formData.goals} onChange={handleInputChange} placeholder="What do you hope to achieve?"></textarea>
          </div>

          <div className="form-group">
            <label style={labelStyle}>When do you plan to take the session?</label>
            <select name="timing" style={inputStyle} value={formData.timing} onChange={handleInputChange}>
              <option value="Immediate">Immediate</option>
              <option value="Not urgent">Not urgent</option>
            </select>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="premium-button button-primary" 
            style={{ width: '100%', padding: '20px', marginTop: '20px', fontSize: '1.1rem' }}
          >
            Proceed to Payment
          </motion.button>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '0.9rem',
  fontWeight: '600',
  marginBottom: '8px',
  color: 'var(--color-text)'
};

const inputStyle = {
  width: '100%',
  padding: '12px 20px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  fontSize: '1rem',
  background: 'white',
  outline: 'none',
  fontFamily: 'var(--font-body)'
};

export default Booking;
