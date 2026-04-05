import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Copy, CheckCircle, Lock } from 'lucide-react';

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwzanF3SyWjCUHnn5Ad1RXws8qNAey8wWPwokK0i-8tWaKiTTB2iifonutwCTXrDf8jTw/exec";
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const fullName = state?.fullName;
    
    // If user lands directly on payment page without form
    if (!fullName) {
      navigate('/booking', { replace: true });
    }
  }, [state, navigate]);

  const formData = state || {};
  const selectedProgram = formData.program || "Coloring Service";
  const selectedPrice = formData.price || "₹12,000";

  const [paymentError, setPaymentError] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const saveToSheets = async (transactionId, paymentStatus) => {
    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      mode: formData.mode,
      workType: formData.workType,
      companyName: formData.companyName,
      needs: formData.needs?.join(", ") || "",
      challenge: formData.challenge,
      goals: formData.goals,
      timing: formData.timing,
      program: selectedProgram,
      price: selectedPrice,
      transactionId: transactionId,
      paymentStatus: paymentStatus, // "Success" or "Failed" or "Cancelled"
      dateTime: new Date().toLocaleString("en-IN")
    };

    try {
      const url = new URL(SHEET_URL);
      url.searchParams.append('data', JSON.stringify(payload));
      await fetch(url.toString(), {
        method: "GET",
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Sheet save failed:", error);
    }
  };

  const handlePayment = () => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 1200000, // ₹12,000 in paise
      currency: "INR",
      name: "Stylecues by Anugna",
      description: "Coloring Styling Session",
      image: "/favicon.svg",
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        program: selectedProgram,
        city: formData.city
      },
      theme: {
        color: "#C0847A" // website accent color
      },
      handler: async function(response) {
        // Show overlay IMMEDIATELY
        setShowOverlay(true);
        
        const transactionId = response.razorpay_payment_id;
        
        // Save to sheets in background
        await saveToSheets(transactionId, "Success");
        
        // Then navigate to success
        navigate('/success', {
          state: {
            ...formData,
            transactionId: transactionId,
            program: selectedProgram,
            price: selectedPrice,
            paymentStatus: "Success"
          }
        });
      },
      modal: {
        ondismiss: function() {
          setPaymentError("Payment cancelled. Please try again.");
          saveToSheets("CANCELLED", "Cancelled");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', async function(response) {
      const errorDesc = response.error.description;
      await saveToSheets(response.error.metadata.payment_id || "FAILED", "Failed");
      setPaymentError(`Payment failed: ${errorDesc}. Please try again.`);
    });

    rzp.open();
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
          <div style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
              <span style={{ opacity: 0.7 }}>Service</span>
              <span style={{ fontWeight: 600 }}>{selectedProgram}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
              <span style={{ opacity: 0.7 }}>Amount</span>
              <span style={{ fontWeight: 600 }}>{selectedPrice}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ opacity: 0.7 }}>Mode</span>
              <span style={{ fontWeight: 600 }}>{formData.mode || "Online"}</span>
            </div>
          </div>

          {paymentError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ 
                background: 'rgba(211, 47, 47, 0.05)', 
                border: '1px solid rgba(211, 47, 47, 0.2)', 
                borderRadius: '8px', 
                padding: '15px', 
                marginBottom: '25px',
                color: '#d32f2f',
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 500 }}>
                <span>❌</span> {paymentError}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handlePayment}
                  style={{ 
                    background: '#d32f2f', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 16px', 
                    borderRadius: '6px', 
                    fontSize: '0.85rem', 
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Try Again
                </button>
                <a 
                  href={`https://wa.me/917416605187?text=${encodeURIComponent("Hello, I am facing a payment issue for " + selectedProgram + ". My details: " + formData.fullName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#d32f2f', 
                    fontSize: '0.85rem', 
                    textDecoration: 'underline',
                    alignSelf: 'center',
                    fontWeight: 500
                  }}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePayment}
            className="premium-button button-primary"
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '1.2rem',
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            Pay {selectedPrice} →
          </motion.button>
          
          <div style={{ marginTop: '20px', textAlign: 'center', opacity: 0.6, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Lock size={14} /> 100% Secure Transaction via Razorpay
          </div>
        </div>
      {/* Payment Success Overlay */}
      {showOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.97)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          gap: '20px',
          padding: '20px',
          textAlign: 'center'
        }}>
          {/* Spinner */}
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid var(--color-accent-dark)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <h2 style={{ 
            color: 'var(--color-accent-dark)',
            fontSize: '1.8rem',
            margin: 0
          }}>
            Payment Confirmed! ✅
          </h2>
          <div style={{ color: '#666', fontSize: '1.1rem' }}>
            <p style={{ margin: '0 0 5px' }}>Please do not press back button</p>
            <p style={{ margin: 0 }}>Redirecting you to confirmation page...</p>
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default Payment;
