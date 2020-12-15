import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('authToken');

	return axios.create({
		baseURL: 'localhost:5000',
		headers: {
			authorization: `token`,
		},
	});
};

export default axiosWithAuth;