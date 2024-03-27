import { useState } from 'react';
import axios from 'axios';

// Create a separate Axios instance without interceptors
const axiosInstance = axios.create();

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous errors
  
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
  
    try {

      const response = await axiosInstance.post(`${apiUrl}register/`, userData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
  
      if (response.status === 201) {
        handleSuccessResponse(response);
      } else {
        // console.log('Unexpected status code:', response.status);
        setError('An unexpected error occurred. Please try again later.');
        setLoading(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        handleErrorResponse(error.response);
      } else {
        // console.log('An unexpected error occurred:', error.message);
        setError('An unexpected error occurred. Please try again later.');
        setLoading(false);
      }
    }
  };
  
  const handleSuccessResponse = (response) => {
    localStorage.clear(); // Optional: Clear any previous storage
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
    window.location.href = '/'; // Redirect to desired location
  };

  const handleErrorResponse = (response) => {
    const { data } = response;
    let errorMessage = '';

    // Extract specific error messages from response data (if provided)
    if (data.username) {
      errorMessage += data.username[0] + ' ';
    }
    if (data.email) {
      errorMessage += data.phone[0] + ': email';
    }

    setError(errorMessage || 'Registration failed');
    setLoading(false);
  };

  return (
    <div className="Auth-form-container mx-auto max-w-md pt-4">
      <form className="Auth-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h3 className="Auth-form-title text-lg font-medium mb-4">Register</h3>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="form-input mt-1 px-3 py-2 block w-full rounded-md border border-gray-300"
            placeholder="Enter Username"
            name="username"
            type="text"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            className="form-input mt-1 px-3 py-2 block w-full rounded-md border border-gray-300"
            placeholder="yourname@mail.com"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            required
           
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            name="password"
            type="password"
            className="form-input mt-1 px-3 py-2 block w-full rounded-md border border-gray-300"
            placeholder="Enter password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="form-input mt-1 px-3 py-2 block w-full rounded-md border border-gray-300"
            placeholder="Confirm password"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="form-group">
        
                            <button
                                type="submit"
                                className="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                disabled={loading}
                            >
                                {loading && (
                                    <svg
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="mr-2 animate-spin"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
                                    </svg>
                                )}
                                <span>{loading ? "Verifying..." : "Register"}</span>
                            </button>
                        
        </div>
      </form>
    </div>
  );
};

export default Register;
