import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    console.log(user);

    // Define fetchSession outside useEffect for reuse
    const fetchSession = async () => {
        try {
            const response = await fetch(`/api/session`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const sessionData = await response.json();
                setUser(sessionData);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Error fetching session:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSession(); // Fetch session on initial load
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, setLoading, fetchSession, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
