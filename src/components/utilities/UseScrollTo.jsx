import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseScrollTo = (targetId) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === `#${targetId}`) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash, targetId]);
};

export default UseScrollTo;
