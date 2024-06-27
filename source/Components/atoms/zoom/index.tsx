import { useEffect, useState, ReactNode } from 'react';

interface ZoomInSectionProps {
    children: ReactNode;
}

const ZoomInSection: React.FC<ZoomInSectionProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Ajuste o delay conforme necessário

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`transform transition-transform duration-1000 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            {children}
        </div>
    );
};

export default ZoomInSection;
