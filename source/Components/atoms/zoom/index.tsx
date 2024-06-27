import { useEffect, useRef, useState, ReactNode } from 'react';

interface ZoomInSectionProps {
    children: ReactNode;
}

const ZoomInSection: React.FC<ZoomInSectionProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 } // 10% visível
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`transform transition-transform duration-1000 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            {children}
        </div>
    );
};

export default ZoomInSection;
