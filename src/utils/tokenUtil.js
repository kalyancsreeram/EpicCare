import { jwtDecode } from 'jwt-decode';

export const decodeToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        console.log(`Decoded token --> ${decoded}`);
        return decoded;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};
