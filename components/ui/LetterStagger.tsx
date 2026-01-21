
import React, { useState, useEffect, useRef } from 'react';

interface LetterStaggerProps {
  text: string;
  className?: string;
  delayBase?: number;
  staggerTime?: number;
  align?: 'left' | 'center' | 'right';
}

export const LetterStagger: React.FC<LetterStaggerProps> = ({ 
  text, 
  className = "",
  delayBase = 0,
  staggerTime = 30,
  align = 'center'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const alignmentClass = align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const words = text.split(" ");
  let charCount = 0;

  return (
    <span ref={elementRef} className={`inline-flex flex-wrap ${alignmentClass} gap-[0.25em] ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const currentDelay = delayBase + (charCount * staggerTime);
            charCount++;
            return (
              <span
                key={charIndex}
                className={`inline-block reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                style={{ 
                  transitionDelay: `${currentDelay}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};
