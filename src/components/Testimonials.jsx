import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';

const videos = [
  "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007966/WhatsApp_Video_2026-03-19_at_17.20.53_nmnka5.mp4",
  "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007943/WhatsApp_Video_2026-03-19_at_17.16.41_ip1cvy.mp4",
  "https://res.cloudinary.com/ducb7wymk/video/upload/v1774007931/WhatsApp_Video_2026-03-19_at_17.16.40_iq3f6v.mp4",
  "https://res.cloudinary.com/ducb7wymk/video/upload/v1774434705/DC1D4A21-C930-4CDF-B5AA-FFFCB86FCEB2_u88bl6.mp4"
];

const photos = [
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007901/WhatsApp_Image_2026-03-19_at_17.16.41_3_gil2nt.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007901/WhatsApp_Image_2026-03-19_at_17.16.41_4_bbagec.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007901/WhatsApp_Image_2026-03-19_at_17.16.41_1_lsxxpy.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007902/WhatsApp_Image_2026-03-19_at_17.16.41_2_wmjpds.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007902/WhatsApp_Image_2026-03-19_at_17.16.41_5_qlbpus.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007902/WhatsApp_Image_2026-03-19_at_17.16.41_7_lch9ef.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007902/WhatsApp_Image_2026-03-19_at_17.16.41_8_mkuw6i.jpg",
  "https://res.cloudinary.com/ducb7wymk/image/upload/v1774007904/WhatsApp_Image_2026-03-19_at_17.16.41_6_hjrhnl.jpg"
];

const VideoCard = React.memo(({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    let hasLoaded = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!hasLoaded && videoRef.current) {
            videoRef.current.load();
            hasLoaded = true;
          }
          videoRef.current?.play().catch(e => console.log(e));
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      });
    }, { threshold: 0.5 });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        borderRadius: 'var(--radius-lg, 16px)',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        backgroundColor: '#000',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}
      className="video-card-container"
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector('.play-pause-overlay');
        if (overlay) overlay.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector('.play-pause-overlay');
        if (overlay) overlay.style.opacity = '0';
      }}
    >
      <video
        ref={videoRef}
        src={src}
        preload="none"
        poster="https://res.cloudinary.com/ducb7wymk/image/upload/v1774007901/WhatsApp_Image_2026-03-19_at_17.16.41_3_gil2nt.jpg"
        loop
        muted={isMuted}
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          color: 'white',
          backdropFilter: 'blur(4px)'
        }}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <div
        className="play-pause-overlay"
        onClick={togglePlay}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.2)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)'
        }}>
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent-dark, #000)"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
          ) : (
            <Play size={30} fill="var(--color-accent-dark, #000)" color="var(--color-accent-dark, #000)" style={{ marginLeft: '4px' }} />
          )}
        </div>
      </div>
    </div>
  );
});

const PhotoCard = ({ src }) => {
  return (
    <div
      style={{
        width: '300px',
        height: '400px',
        borderRadius: 'var(--radius-lg, 16px)',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}
    >
      <img
        src={src}
        alt="Client Photo"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        loading="lazy"
      />
    </div>
  );
};

const InfiniteSlider = ({ items, renderCard, gap = 20, itemWidth }) => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  // Duplicate items heavily to avoid any scroll wrap-around issues 
  // Simple CSS scroll-behavior approach gives natural smooth experience
  const extendedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items];

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    // A hack to make native infinite loop seamless on Desktop and Mobile
    // 3 copies of item sets in each direction ensures robust left/right navigation
    const cycleWidth = items.length * (itemWidth + gap);

    if (container.scrollLeft <= cycleWidth) {
      container.style.scrollBehavior = 'auto'; // Disable smooth scroll momentarily
      container.scrollLeft += cycleWidth * 4; // Jump forward without transition
      // Re-enable in next frame
      requestAnimationFrame(() => {
        if (container) container.style.scrollBehavior = 'smooth';
      });
    } else if (container.scrollLeft >= cycleWidth * 6) {
      container.style.scrollBehavior = 'auto'; // Disable smooth scroll momentarily
      container.scrollLeft -= cycleWidth * 4; // Jump back
      // Re-enable in next frame
      requestAnimationFrame(() => {
        if (container) container.style.scrollBehavior = 'smooth';
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      // Start near the middle safely without smooth scrolling initially
      const container = scrollRef.current;
      const cycleWidth = items.length * (itemWidth + gap);
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = cycleWidth * 3 - (containerRef.current.clientWidth - itemWidth) / 2;

      // Apply smooth scrolling class after initializing position
      setTimeout(() => {
        if (container) container.style.scrollBehavior = 'smooth';
      }, 50);
    }
  }, [items.length, itemWidth, gap]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: (itemWidth + gap), behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', margin: '0 auto', maxWidth: '1200px' }}>
      <button
        onClick={scrollLeftBtn}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'white',
          border: 'none',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}
        aria-label="Previous"
      >
        <ChevronLeft size={24} color="var(--color-accent-dark, #000)" />
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: gap + 'px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '20px calc(50% - 150px)', // Centers the middle card beautifully
        }}
      >
        {extendedItems.map((item, idx) => (
          <div key={idx} style={{ scrollSnapAlign: 'center', flexShrink: 0 }}>
            {renderCard(item)}
          </div>
        ))}
      </div>

      <button
        onClick={scrollRightBtn}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'white',
          border: 'none',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}
        aria-label="Next"
      >
        <ChevronRight size={24} color="var(--color-accent-dark, #000)" />
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }} />
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--color-bg)', overflow: 'hidden', padding: '100px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>
          Client <span style={{ fontStyle: 'italic', color: 'var(--color-accent-dark)' }}>Love</span>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <InfiniteSlider
          items={videos}
          renderCard={(src) => <VideoCard src={src} />}
          itemWidth={300}
        />

        <InfiniteSlider
          items={photos}
          renderCard={(src) => <PhotoCard src={src} />}
          itemWidth={300}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          #testimonials {
            padding: 60px 0 !important;
          }
          #testimonials h2 {
            font-size: 2.5rem !important;
          }
        }
      ` }} />
    </section>
  );
}
