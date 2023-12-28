import { useEffect, useRef } from 'react';

export function HeroMetrics() {
  const ref1 = useRef<HTMLParagraphElement | null>(null);
  const ref2 = useRef<HTMLParagraphElement | null>(null);
  const ref3 = useRef<HTMLParagraphElement | null>(null);
  const ref4 = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node1 = ref1.current;
    const node2 = ref2.current;
    const node3 = ref3.current;
    const node4 = ref4.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;
          const delay = index * 0.1;
          if (entry.isIntersecting) {
            target.style.transition = `opacity 0.5s ${delay}s, transform 0.3s ${delay}s`;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0px)';
          } else {
            target.style.transition = `opacity 0.5s ${delay}s, transform 0.3s ${delay}s`;
            target.style.opacity = '0';
            target.style.transform = 'translateY(30px)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (node1) observer.observe(node1);
    if (node2) observer.observe(node2);
    if (node3) observer.observe(node3);
    if (node4) observer.observe(node4);

    return () => {
      if (node1) observer.unobserve(node1);
      if (node2) observer.unobserve(node2);
      if (node3) observer.unobserve(node3);
      if (node4) observer.unobserve(node4);
    };
  }, []);

  return (
    <div className="hero__metrics">
      <div className="hero__metrics--card">
        <div ref={ref1}><p>2,000+</p></div>
        <p>attendees</p>
      </div>
      <div className="hero__metrics--card">
        <div ref={ref2}><p>100+</p></div>
        <p>speakers</p>
      </div>
      <div className="hero__metrics--card">
        <div ref={ref3}><p>85+</p></div>
        <p>sessions</p>
      </div>
      <div className="hero__metrics--card">
        <div ref={ref4}><p>20+</p></div>
        <p>hours of content</p>
      </div>
    </div>
  )
}