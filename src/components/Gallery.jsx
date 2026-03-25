import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8505_l1ynz7.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8513_yvhiwd.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8507_g8jgjr.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434884/IMG_8506_cnsysm.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434879/IMG_8504_lnpmgs.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434877/IMG_8274_iuo6zv.jpg",
    "https://res.cloudinary.com/ducb7wymk/image/upload/v1774434878/IMG_8341_ebtkmd.jpg"
  ]
  // Duplicate the array for a seamless infinite scroll effect
  const marqueeImages = [...images, ...images];

  return (
    <div style={{ width: '100%', overflow: 'hidden', padding: '20px 0' }}>
      <div className="marquee-content">
        {marqueeImages.map((src, index) => (
          <div key={index} className="marquee-item">
            <img src={src} alt={`Client Transformation ${index + 1}`} />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-content {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }

        .marquee-content:hover {
          /* Pause animation when user hovers over the gallery strip */
          animation-play-state: paused;
        }

        .marquee-item {
          width: auto;
          height: auto;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          background: #f0f0f0;
          cursor: pointer;
        }

        .marquee-item img {
          max-width: 320px;        /* max width control */
          max-height: 260px;       /* max height control */
          width: auto;
          height: auto;
          object-fit: contain;     /* full image visible */
          object-position: center;
          display: block;
          transition: transform 0.6s ease;
        }

        .marquee-item:hover img {
          /* Zoom effect on hover */
          transform: scale(1.05);
        }

        /* 
          100% translation would mean moving the entire doubled array. 
          To loop seamlessly, we translate exactly half the width.
          Wait, calculating half depends on gap. 
          If there are N original images, half the width is exactly 50% of the entire flex container, 
          plus we need to factor the exact gap bridging the two halves.
          Using exactly 50% works if we include the gap correctly or use half the items.
          Since the array is exactly doubled, 50% translates exactly one original array's width!
        */
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 15px)); }
        }

        @media (max-width: 992px) {
          .marquee-item {
            // width: 280px;
            // height: 240px;
               width: auto;
          height: auto;
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            // width: 250px;
            // height: 220px;
               width: auto;
          height: auto;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-item {
            // width: 220px;
            // height: 200px;
               width: auto;
          height: auto;
          }
          .marquee-content {
            gap: 20px;
          }
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 10px)); }
          }
        }
      `}</style>
    </div>
  );
}
