import { useEffect, useState, ReactNode } from 'react';

interface SlideInSectionProps {
    children: ReactNode;
}

const SlideInSection: React.FC<SlideInSectionProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Ajuste o delay conforme necessário

        return () => clearTimeout(timer);
    }, []);

    // Classe base para a transição
    const baseTransitionClass = 'transition-transform duration-1000 ease-in-out';

    return (
        <div className={`${baseTransitionClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            {children}
        </div>
    );
};

export default SlideInSection;
