import authApi from '@/api/auth.js'

const state = {
	isSubmutting: false,
}

const mutations = {
	registerStart(state) {
		state.isSubmutting = true
	} 
}

const actions = {
	register(context, credentials) {
		return new Promise(() => {
			authApi.register(credentials)
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error)
				})
		})
	}
}

export default {
	state,
	mutations,
	actions
}