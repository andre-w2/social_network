import authApi from '@/api/auth.js'
import {setItem} from '@/helpers/localStorage'

const state = {
    isSubmutting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

const mutations = {
    registerStart(state) {
        state.isSubmutting = true
        state.validationErrors = null
    },
    registerSuccess(state, payload) {
        state.isSubmutting = false
        state.currentUser = payload
    },
    registerFailure(state, payload) {
        state.isSubmutting = false
        state.validationErrors = payload
    }
}

const actions = {
    register(context, credentials) {
        context.commit('registerStart')
        return new Promise(resolve => {
            authApi.register(credentials)
                .then(response => {
                    if (response.data.success === 1) {
                        context.commit('registerSuccess', response.data.message)
                        setItem('Token', response.data.message.token)
                        resolve()
                    } else {
                        if (response.data.message) {
                            throw new Error(response.data.message)
                        }
                    }
                })
                .catch(error => {
                    const e = error.toString().replace(/Error: /g, '')
                    context.commit('registerFailure', e)
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