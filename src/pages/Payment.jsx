import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Copy, CheckCircle, Lock } from 'lucide-react';

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwzanF3SyWjCUHnn5Ad1RXws8qNAey8wWPwokK0i-8tWaKiTTB2iifonutwCTXrDf8jTw/exec";
const UPI_ID = "stylecuesanugna@upi";
const UPI_NAME = "Stylecues+by+Anugna";
const AMOUNT = "12000";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formData = state || {};
  const selectedProgram = formData.program || "Coloring Service";
  const selectedPrice = formData.price || "₹12,000";

  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const saveToSheets = async (transactionId) => {
    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      mode: formData.mode,
      workType: formData.workType,
      companyName: formData.companyName,
      needs: formData.needs.join(", "),
      challenge: formData.challenge,
      goals: formData.goals,
      timing: formData.timing,
      program: selectedProgram,
      price: selectedPrice,
      transactionId: transactionId,
      paymentStatus: "Pending Verification",
      dateTime: new Date().toLocaleString("en-IN")
    };

    // Use URL params instead of POST body
    // This fixes CORS on localhost
    const url = new URL(SHEET_URL);
    url.searchParams.append('data', JSON.stringify(payload));

    try {
      await fetch(url.toString(), {
        method: "GET",
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Sheet save failed:", error);
    }
  };

  const validateTransactionId = (id) => {
    if (!id || id.length < 10) return false;
    if (!/^[a-zA-Z0-9]+$/.test(id)) return false;
    if (/^0+$/.test(id)) return false;
    if (/^[a-zA-Z]+$/.test(id)) return false;
    if (/^(.)\1+$/.test(id)) return false;

    const lowerId = id.toLowerCase();
    const commonFakes = ["123456789", "0123456789", "1234567890", "test", "paid", "done", "random", "abcdefghij", "12345678910"];
    if (commonFakes.some(fake => lowerId.includes(fake))) return false;

    const isSequential = (str) => {
      let fwdCount = 0;
      let revCount = 0;
      for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1) fwdCount++; else fwdCount = 0;
        if (str.charCodeAt(i + 1) === str.charCodeAt(i) - 1) revCount++; else revCount = 0;
        if (fwdCount >= 4 || revCount >= 4) return true;
      }
      return false;
    };
    if (isSequential(lowerId)) return false;

    return true;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = async () => {
    if (validateTransactionId(transactionId)) {
      setError(false);
      await saveToSheets(transactionId);
      navigate('/confirmation', { state: { transactionId } });
    } else {
      setError(true);
    }
  };

  return (
    <div className="page-container" style={{ padding: '120px 5% 60px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="premium-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>Complete Your Payment</h2>
          <p className="premium-text" style={{ fontSize: '1.1rem', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Lock size={16} /> Secure Payment
          </p>
        </div>

        <div className="glass-card" style={{ padding: '40px' }}>
          <div style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '12px', padding: '20px', marginBottom: '25px', textAlign: 'center' }}>
            <span style={{ display: 'block', opacity: 0.7, marginBottom: '5px' }}>Coloring Service</span>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent-dark)' }}>₹{AMOUNT.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <p style={{ marginTop: '5px', fontSize: '0.9rem', opacity: 0.8 }}>Pay using any UPI app</p>
          </div>
{/* 
          <a
            href={`upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&am=${AMOUNT}&cu=INR`}
            className="premium-button button-primary"
            style={{ width: '100%', padding: '15px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '15px', textDecoration: 'none' }}
          >
            Pay Now
          </a> */}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
            <div
              onClick={handleCopy}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(255,255,255,0.5)', border: '1px dashed rgba(0,0,0,0.2)', borderRadius: '8px', cursor: 'pointer', position: 'relative' }}
            >
              <span style={{ fontWeight: 500, fontFamily: 'monospace', fontSize: '1.1rem' }}>{UPI_ID}</span>
              {copied ? <CheckCircle size={18} color="green" /> : <Copy size={18} opacity={0.6} />}
              {copied && (
                <span style={{ position: 'absolute', top: '-30px', background: '#333', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>Copied!</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center', opacity: 0.7, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>Google Pay</div>
              <div style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>PhonePe</div>
              <div style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>Paytm</div>
              <div style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>Any UPI App</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '25px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px' }}>Enter Transaction ID / UTR Number <span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              placeholder="e.g. 316XXXXXXXXX"
              value={transactionId}
              onChange={(e) => {
                setTransactionId(e.target.value);
                if (error) setError(false);
              }}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '8px',
                border: `1px solid ${error ? 'red' : 'rgba(0,0,0,0.1)'}`,
                background: 'rgba(255,255,255,0.8)',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '1rem',
                marginBottom: '5px'
              }}
            />
            {error ? (
              <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '5px', display: 'flex', gap: '5px', alignItems: 'flex-start' }}>
                <span style={{ marginTop: '2px' }}>⚠️</span> Invalid Transaction ID. Please check your UPI app payment history and enter the correct UTR / Transaction ID.
              </p>
            ) : (
              <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '5px' }}>Find your Transaction ID in your UPI app under payment history</p>
            )}
          </div>

          <motion.button
            whileHover={transactionId.length >= 10 ? { scale: 1.02 } : {}}
            whileTap={transactionId.length >= 10 ? { scale: 0.98 } : {}}
            onClick={handlePayment}
            className="premium-button button-primary"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.1rem',
              marginTop: '30px',
              opacity: transactionId.length < 10 ? 0.6 : 1,
              cursor: transactionId.length < 10 ? 'not-allowed' : 'pointer'
            }}
          >
            Confirm Payment
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
