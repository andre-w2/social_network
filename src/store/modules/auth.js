import authApi from '@/api/auth.js'

const state = {
    isSubmutting: false,
}

const mutations = {
    registerStart(state) {
        state.isSubmutting = true
    },
    registerSuccess(state) {
        state.isSubmutting = false
    },
    registerFailure(state) {
        state.isSubmutting = false
    }
}

const actions = {
    register(context, credentials) {
        context.commit('registerStart')
        return new Promise(resolve => {
            authApi.register(credentials)
                .then(response => {
                    context.commit('registerSuccess', response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    context.commit('registerFailure', error.response.data)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}