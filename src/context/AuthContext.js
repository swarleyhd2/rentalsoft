import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter()
    
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                router.push('/signin')
            }
            setLoading(false);
  
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' ><CircularProgress size={80}/></Box> : children}
        </AuthContext.Provider>
    );
};