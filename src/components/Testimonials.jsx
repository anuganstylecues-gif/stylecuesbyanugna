import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  // 1 - Text
  {
    type: 'text',
    name: "Client 1",
    role: "Color Analysis Session",
    text: "I highly recommend Anugna's color analysis and styling session! Before this, I struggled to know which colors worked for me, but now I have complete clarity. The personalized PDF guide she provided is incredibly helpful and has made shopping so much easier. I finally know my palette and feel confident that I'm looking my best.",
    rating: 5,
    image: ""
  },

  // 2 - Video
  {
    type: 'video',
    name: "Client 2",
    role: "Personal Styling Session",
    rating: 5,
    videoUrl: "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007966/WhatsApp_Video_2026-03-19_at_17.20.53_nmnka5.mp4",
    videoType: "mp4"
  },

  // 3 - Text
  {
    type: 'text',
    name: "Client 3",
    role: "Style Transformation Session",
    text: "The style transformation was truly impressive. The changes were thoughtfully done, enhanced my confidence, and still kept my personality intact. As a brown-skin girlie who wanted to discover my true colors, this experience helped me do exactly that. I now feel more confident, aware, and comfortable choosing colors that truly suit me. It was truly a wonderful and empowering experience.",
    rating: 5,
    image: ""
  },

  // 4 - Video
  {
    type: 'video',
    name: "Client 4",
    role: "Color Analysis Session",
    rating: 5,
    videoUrl: "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007943/WhatsApp_Video_2026-03-19_at_17.16.41_ip1cvy.mp4",
    videoType: "mp4"
  },

  // 5 - Text
  {
    type: 'text',
    name: "Client 5",
    role: "Personal Styling Session",
    text: "Just wanted to say how grateful I am for your time and all the amazing insights you shared. Your knowledge is incredible, but what really stood out to me is how intentional you are with everything - from proportions to layering to those little details that make such a difference. It honestly feels like an art and a science at the same time! Thank you for making it such a thoughtful and inspiring experience.",
    rating: 5,
    image: ""
  },

  // 6 - Video
  {
    type: 'video',
    name: "Client 6",
    role: "Styling Session",
    rating: 5,
    videoUrl: "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007931/WhatsApp_Video_2026-03-19_at_17.16.40_iq3f6v.mp4",
    videoType: "mp4"
  },

  // 7 - Text
  {
    type: 'text',
    name: "Client 7",
    role: "Styling Session",
    text: "The session was so good and it went well. You're so friendly and homely person. As I said I was so excited and it all worth and each every penny worth and you did it with a lot of patience... Found my perfect colours and style so that I can purchase according to that and will sure connect with you in future for marriages and all. Thank you!",
    rating: 5,
    image: ""
  },

  // 8 - Text
  {
    type: 'text',
    name: "Client 8",
    role: "Color Analysis & Body Type Session",
    text: "It was fantastic working with you on my color analysis and learning about my body type. I loved discovering my do's and don'ts, and I'm excited to use them in my daily style. Once I put together some looks, I'll share the pictures with you!",
    rating: 5,
    image: ""
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    })
  };

  return (
    <section id="testimonials" style={{ background: 'var(--color-bg)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem' }}>Client <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Love</span></h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px', position: 'relative' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: current.type === 'video' ? '360px' : '600px',
                padding: current.type === 'video' ? '20px' : '40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              {current.type === 'text' ? (
                 <>
                   {/* <div style={{ position: 'relative', width: '90px', height: '90px', marginBottom: '10px' }}>
                     <img 
                       src={current.image} 
                       alt={current.name}
                       style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                     />
                     <div style={{ position: 'absolute', bottom: -5, right: -5, background: 'var(--color-accent-dark)', color: 'white', borderRadius: '50%', padding: '5px' }}>
                       <Star size={14} fill="currentColor" />
                     </div>
                   </div> */}

                   <div style={{ display: 'flex', gap: '5px', color: 'var(--color-accent)' }}>
                     {[...Array(current.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                   </div>

                   <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#444', lineHeight: '1.6', fontFamily: 'var(--font-heading)' }}>
                     "{current.text}"
                   </p>

                   {/* <div style={{ marginTop: '10px' }}>
                     <h4 style={{ fontSize: '1.2rem', margin: '0 0 5px 0' }}>{current.name}</h4>
                     <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{current.role}</p>
                   </div> */}
                 </>
              ) : (
                 <>
                   <div style={{ width: '100%', maxWidth: '320px', aspectRatio: '9/16', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#000', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                     {current.videoType === 'youtube' ? (
                       <iframe 
                         src={current.videoUrl} 
                         width="100%" 
                         height="100%" 
                         frameBorder="0" 
                         allow="autoplay; encrypted-media" 
                         allowFullScreen
                         style={{ border: 'none' }}
                       />
                     ) : current.videoType === 'vimeo' ? (
                       <iframe 
                         src={current.videoUrl} 
                         width="100%" 
                         height="100%" 
                         frameBorder="0" 
                         allow="autoplay; fullscreen; picture-in-picture" 
                         allowFullScreen
                         style={{ border: 'none' }}
                       />
                     ) : (
                       <video 
                         src={current.videoUrl}
                         autoPlay
                         muted
                         loop
                         playsInline
                         controls
                         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                       />
                     )}
                   </div>
                   
                   <div style={{ display: 'flex', gap: '5px', color: 'var(--color-accent)', marginTop: '10px' }}>
                     {[...Array(current.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                   </div>
                   {/* <div>
                     <h4 style={{ fontSize: '1.2rem', margin: '10px 0 5px 0' }}>{current.name}</h4>
                     <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{current.role}</p>
                   </div> */}
                 </>
              )}
            </motion.div>
          </AnimatePresence>

          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            right: 0, 
            display: 'flex', 
            justifyContent: 'space-between', 
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 10
          }}>
            <button className="nav-btn" onClick={prev} style={{ pointerEvents: 'auto', background: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', cursor: 'pointer' }}><ChevronLeft /></button>
            <button className="nav-btn" onClick={next} style={{ pointerEvents: 'auto', background: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', cursor: 'pointer' }}><ChevronRight /></button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              style={{ 
                width: i === index ? '30px' : '10px', 
                height: '10px', 
                borderRadius: '5px', 
                background: i === index ? 'var(--color-accent-dark)' : 'var(--color-accent-light)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #testimonials .glass-card { 
            padding: 30px 15px !important; 
            min-height: 500px;
          }
          #testimonials p { fontSize: 1.1rem !important; }
          .nav-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
