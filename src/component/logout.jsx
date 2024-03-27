import { useEffect } from "react";
import axios from "axios";
const axiosInstance = axios.create();

const Logout = () => {
    useEffect(() => {
        const logout = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const refresh_token = localStorage.getItem('refresh_token');
                const access_token = localStorage.getItem('access_token');

                if (!apiUrl || !refresh_token || !access_token) {
                    throw new Error('Missing required data for logout');
                }

                await axiosInstance.post(`${apiUrl}logout/`, {
                    refresh_token
                }, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                localStorage.clear();
                delete axiosInstance.defaults.headers.common['Authorization'];
                window.location.href = '/login';
            } catch (error) {
                // console.error('Logout failed:', error);
                localStorage.clear();
                delete axiosInstance.defaults.headers.common['Authorization'];
                window.location.href = '/login';
            }
        };

        logout();
    }, []);

    return null; // Since this component doesn't render anything, return null
};
export default Logout;