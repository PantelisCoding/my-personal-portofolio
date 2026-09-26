import React, { useEffect, useRef } from 'react';

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Entry observed:", entry); // Debugging
          if (entry.isIntersecting) {
            console.log("Element is visible:", entry.target); // Debugging
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (ref.current) {
      console.log("Observing element:", ref.current); // Debugging
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;