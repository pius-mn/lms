import axios from "axios";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const refreshToken = localStorage.getItem('refresh_token');
      try {
        const response = await axios.post('http://localhost:8000/api/refresh-token/', {
          refresh: refreshToken
        }, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        const { access } = response.data; // Only retrieve access token
        axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        localStorage.setItem('access_token', access);
        // Retry the original request with the new token
        return axios(error.config);
      } catch (e) {
        // Handle any errors that might occur during the token refresh
        console.error('Error refreshing token:', e);
        return Promise.reject(error); // Reject the original error
      } finally {
        refresh = true;
      }
    }
    // If the error is not 401 or refresh is already in progress, pass the error through
    return Promise.reject(error);
  }
);
