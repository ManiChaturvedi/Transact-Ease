// Base URL for API calls
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export const getApiUrl = (endpoint) => {
    // Make sure endpoint starts with a slash if it doesn't already
    const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${API_URL}${formattedEndpoint}`;
};

export default {
    API_URL,
    getApiUrl
}; 