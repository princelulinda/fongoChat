import { useState, useEffect } from 'react';

const useAuthentification = (user) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);

    return isAuthenticated;
};

export default useAuthentification;
