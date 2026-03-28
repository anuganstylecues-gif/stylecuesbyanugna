// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Gallery = () => {
//   const [filter, setFilter] = useState('All');

//   const categories = ['All', 'Client Transformations', 'Bridal Styling', 'Event Styling'];

//   const projects = [
//     { id: 1, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8505_l1ynz7.jpg' },
//     { id: 2, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8513_yvhiwd.jpg' },
//     { id: 3, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8507_g8jgjr.jpg' },
//     { id: 4, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434884/IMG_8506_cnsysm.jpg' },
//     { id: 5, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434879/IMG_8504_lnpmgs.jpg' },
//     { id: 6, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434877/IMG_8274_iuo6zv.jpg' },
//     { id: 7, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434878/IMG_8341_ebtkmd.jpg' },
//     { id: 8, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774435245/copy_of_img_8261_qko1i2_6932d6.png' },
//     { id: 9, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774435605/IMG_8511_aygc1n.jpg' },
//     { id: 10, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774435602/IMG_8510_xtn8mv.jpg' },
//   ];

//   const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

//   return (
//     <div className="page-container" style={{ padding: '120px 5% 60px' }}>
//       <section style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
//         <span className="premium-subtitle">PORTFOLIO</span>
//         <h1 className="premium-title">Style Gallery</h1>
//         <p className="premium-text" style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
//           Explore our recent styling projects, client transformations, and editorial work.
//         </p>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '60px' }}>
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setFilter(cat)}
//               className={filter === cat ? 'premium-button button-primary' : 'premium-button button-secondary'}
//               style={{ padding: '10px 20px', fontSize: '0.85rem' }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           layout
//           className="full-gallery-grid"
//         >
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4 }}
//                 key={project.id}
//                 style={{
//                   borderRadius: '15px',
//                   overflow: 'hidden',
//                   position: 'relative',
//                   cursor: 'pointer',
//                   background: 'transparent',
//                   // height: '100%',
//                   // minHeight: '300px',
//                   // display: 'inline-block'
//                 }}
//                 className="gallery-item group"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.category}
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     objectFit: 'contain',
//                     transition: 'transform 0.5s ease',
//                     // position: 'absolute',
//                     display: 'block',
//                     top: 0,
//                     left: 0
//                   }}
//                 />
//                 <div style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
//                   opacity: 0,
//                   transition: 'opacity 0.3s ease',
//                   display: 'flex',
//                   alignItems: 'flex-end',
//                   padding: '30px',
//                   zIndex: 2
//                 }} className="overlay">
//                   <div>
//                     <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
//                       {project.category}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>

//       <style>{`
//         .full-gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-auto-rows: 300px;
//           gap: 20px;
//         }

//         /* Creates masonry-like span effect for visually interesting grid */
//         .full-gallery-grid > div:nth-child(4n + 1) { grid-column: span 2; grid-row: span 2; }
//         .full-gallery-grid > div:nth-child(4n + 2) { grid-column: span 2; }

//         .gallery-item:hover img { transform: scale(1.08) !important; }
//         .gallery-item:hover .overlay { opacity: 1 !important; }

//         @media (max-width: 1200px) {
//           .full-gallery-grid { grid-template-columns: repeat(3, 1fr); }
//           .full-gallery-grid > div:nth-child(4n + 1) { grid-column: span 2; grid-row: span 1; }
//           .full-gallery-grid > div:nth-child(4n + 2) { grid-column: span 1; }
//         }

//         @media (max-width: 768px) {
//           .full-gallery-grid { grid-template-columns: repeat(2, 1fr); }
//           .full-gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
//         }

//         @media (max-width: 480px) {
//           .full-gallery-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Gallery;



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  // const categories = ['All', 'Bridal Styling', 'Event Styling'];

  const projects = [
    { id: 1, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8505_l1ynz7.jpg' },
    { id: 2, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8513_yvhiwd.jpg' },
    { id: 3, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434885/IMG_8507_g8jgjr.jpg' },
    { id: 4, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434444/IMG_2601_i0nnmv.jpg' },
    { id: 5, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434884/IMG_8506_cnsysm.jpg' },
    { id: 6, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434879/IMG_8504_lnpmgs.jpg' },
    { id: 7, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434877/IMG_8274_iuo6zv.jpg' },
    { id: 8, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434878/IMG_8341_ebtkmd.jpg' },
    { id: 9, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774435245/copy_of_img_8261_qko1i2_6932d6.png' },
    { id: 9, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774438480/WhatsApp_Image_2026-03-25_at_17.04.04_1_hsjlrr.jpg' },
    { id: 10, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774438480/WhatsApp_Image_2026-03-25_at_17.04.04_hxstyk.jpg' },
    { id: 11, category: 'Client Transformations', image: 'https://res.cloudinary.com/ducb7wymk/image/upload/v1774434434/IMG_1273_mysr5z.jpg' },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ padding: '120px 5% 60px' }}>
      <section style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '10px' }}>Style Gallery</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
          Explore our recent styling projects and client transformations.
        </p>

        {/* FILTER BUTTONS */}
        {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                background: filter === cat ? '#000' : '#eee',
                color: filter === cat ? '#fff' : '#000'
              }}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* GRID */}
        <motion.div layout className="grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card"
              >
                <img src={project.image} alt={project.category} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
.card {
   width:   'auto';
          height: 'auto';
  background: #f5f5f5;
  border-radius: 15px;
  // aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: pointer;
}

.card img {
//  max-width: 320px;        /* max width control */
//           max-height: 260px;       /* max height control */
          width: auto;
          height: auto;
  object-fit: contain;           
  object-position: top center; 
  transition: transform 0.4s ease;
}

        .card:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;