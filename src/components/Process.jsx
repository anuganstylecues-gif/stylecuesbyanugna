// import { motion } from 'framer-motion';

// const ProcessStep = ({ step, title, description, index }) => {
//   return (
//     <motion.div
//       style={{
//         flex: '1',
//         minWidth: '250px',
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '0 20px',
//       }}
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div style={{
//         width: '70px',
//         height: '70px',
//         borderRadius: '50%',
//         background: 'var(--color-accent-dark)',
//         color: 'white',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: '1.4rem',
//         fontWeight: '700',
//         marginBottom: '25px',
//         boxShadow: '0 12px 25px rgba(192, 132, 122, 0.4)',
//         zIndex: 2,
//         fontFamily: 'var(--font-heading)',
//       }}>
//         {step}
//       </div>
      
//       {/* Connector Line */}
//       {index < 4 && (
//         <div className="connector-line" style={{
//           position: 'absolute',
//           top: '35px',
//           left: 'calc(50% + 35px)',
//           width: 'calc(100% - 70px)',
//           height: '2px',
//           background: 'var(--color-accent-light)',
//           zIndex: 1,
//         }} />
//       )}

//       <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>{title}</h3>
//       <p style={{ color: '#666', fontSize: '1rem', textAlign: 'center', lineHeight: '1.6' }}>{description}</p>
//     </motion.div>
//   );
// };

// export default function Process() {
//   const steps = [
//     { step: "01", title: "Virtual Discovery", description: "Start with an in-depth style questionnaire to define your goals and preferences." },
//     { step: "02", title: "Consultation", description: "A private 1-on-1 session to discuss your lifestyle, challenges, and vision." },
//     { step: "03", title: "Color & Body Analysis", description: "Scientific analysis to determine your best shades and flattering silhouettes." },
//     { step: "04", title: "Bespoke Style Guide", description: "Recieve your comprehensive 50+ page digital roadmap for styling success." },
//     { step: "05", title: "Ongoing Support", description: "Continued guidance and shopping assistance to maintain your new signature style." },
//   ];

//   return (
//     <section id="process" style={{ background: '#fff', overflowX: 'hidden', padding: '100px 5%' }}>
//       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//         <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//           <span className="premium-subtitle">OUR METHOD</span>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             style={{ fontSize: '3.5rem', marginTop: '15px' }}
//           >
//             The <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Style Cues</span> Experience
//           </motion.h2>
//           <p style={{ color: '#777', marginTop: '15px', fontSize: '1.1rem' }}>Your transformational journey in five intentional steps.</p>
//         </div>

//         <div style={{ 
//           display: 'flex', 
//           flexWrap: 'wrap', 
//           justifyContent: 'space-between', 
//           gap: '50px 0',
//           position: 'relative'
//         }}>
//           {steps.map((step, index) => (
//             <ProcessStep key={index} {...step} index={index} />
//           ))}
//         </div>
//       </div>
//       <style>{`
//         @media (max-width: 992px) {
//           .connector-line { display: none !important; }
//         }
//       `}</style>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = React.memo(({ step, title, description, index }) => {
  return (
    <motion.div
      className="animated-element"
      style={{
        flex: '1',
        minWidth: '250px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div style={{
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        background: 'var(--color-accent-dark)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.4rem',
        fontWeight: '700',
        marginBottom: '25px',
        boxShadow: '0 12px 25px rgba(192, 132, 122, 0.4)',
        zIndex: 2,
        fontFamily: 'var(--font-heading)',
      }}>
        {step}
      </div>

      {/* Connector Line - Desktop only */}
      {index < 4 && (
        <div className="connector-line" style={{
          position: 'absolute',
          top: '35px',
          left: 'calc(50% + 35px)',
          width: 'calc(100% - 70px)',
          height: '2px',
          background: 'var(--color-accent-light)',
          zIndex: 1,
        }} />
      )}

      {/* Connector Line - Mobile vertical */}
      {index < 4 && (
        <div className="connector-line-mobile" style={{
          width: '2px',
          height: '40px',
          background: 'var(--color-accent-light)',
          margin: '0 auto 0 auto',
        }} />
      )}

      <h3 style={{ 
        fontSize: '1.3rem', 
        marginBottom: '15px', 
        textAlign: 'center', 
        fontFamily: 'var(--font-heading)' 
      }}>
        {title}
      </h3>
      <p style={{ 
        color: '#666', 
        fontSize: '1rem', 
        textAlign: 'center', 
        lineHeight: '1.6' 
      }}>
        {description}
      </p>
    </motion.div>
  );
});

export default function Process() {
  const steps = [
    { step: "01", title: "Virtual Discovery", description: "Start with an in-depth style questionnaire to define your goals and preferences." },
    { step: "02", title: "Consultation", description: "A private 1-on-1 session to discuss your lifestyle, challenges, and vision." },
    { step: "03", title: "Color & Body Analysis", description: "Scientific analysis to determine your best shades and flattering silhouettes." },
    { step: "04", title: "Bespoke Style Guide", description: "Recieve your comprehensive 50+ page digital roadmap for styling success." },
    { step: "05", title: "Ongoing Support", description: "Continued guidance and shopping assistance to maintain your new signature style." },
  ];

  return (
    <section id="process" style={{ 
      background: '#fff', 
      overflowX: 'hidden', 
      padding: '100px 5%' 
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="premium-subtitle">OUR METHOD</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginTop: '15px' }}
          >
            The <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Style Cues</span> Experience
          </motion.h2>
          <p style={{ color: '#777', marginTop: '15px', fontSize: '1.1rem' }}>
            Your transformational journey in five intentional steps.
          </p>
        </div>

        <div className="process-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '50px 0',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>

      <style>{`

        /* ── MOBILE CONNECTOR ── */
        .connector-line-mobile {
          display: none;
        }

        /* ── TABLET ── */
        @media (max-width: 992px) {
          .connector-line {
            display: none !important;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {

          /* Section padding */
          #process {
            padding: 40px 5% !important;
          }

          /* Heading */
          #process h2 {
            font-size: 2rem !important;
          }

          #process > div > div:first-child {
            margin-bottom: 40px !important;
          }

          /* Stack cards vertically */
          .process-grid {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
          }

          /* Each step card full width */
          .process-grid > div {
            width: 100% !important;
            min-width: unset !important;
            padding: 0 10px !important;
            margin-bottom: 10px !important;
          }

          /* Hide horizontal connector */
          .connector-line {
            display: none !important;
          }

          /* Show vertical connector */
          .connector-line-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}