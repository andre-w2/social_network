import axios from '@/api/axios'

const register = credentials => {
	return axios.post('/register', credentials)
}

export default {
	register
}