import authApi from '@/api/auth.js'
import {setItem} from '@/helpers/localStorage'

const state = {
    isSubmutting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const mutationsTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure'
}

export const actionsTypes = {
    register: '[auth] register'
}

const mutations = {
    [mutationsTypes.registerStart](state) {
        state.isSubmutting = true
        state.validationErrors = null
    },
    [mutationsTypes.registerSuccess](state, payload) {
        state.isSubmutting = false
        state.currentUser = payload
    },
    [mutationsTypes.registerFailure](state, payload) {
        state.isSubmutting = false
        state.validationErrors = payload
    }
}

const actions = {
    [actionsTypes.register](context, credentials) {
        context.commit(mutationsTypes.registerStart)
        return new Promise(resolve => {
            authApi.register(credentials)
                .then(response => {
                    if (response.data.success === 1) {
                        context.commit(mutationsTypes.registerSuccess, response.data.message)
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
                    context.commit(mutationsTypes.registerFailure, e)
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