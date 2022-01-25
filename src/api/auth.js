import axios from '@/api/axios'

const register = credentials => {
	return axios.post('/register', credentials)
}

const login = credentials => {
	return axios.post('/auth', credentials)
}

export default {
	register,
	login
}