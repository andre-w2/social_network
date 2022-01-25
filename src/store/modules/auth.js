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
    registerFailure: '[auth] registerFailure',

    loginStart: '[auth] loginStart',
    loginSuccess: '[auth] loginSuccess',
    loginFailure: '[auth] loginFailure'
}

export const actionsTypes = {
    register: '[auth] register',
    login: '[auth] login'
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
    },

    [mutationsTypes.loginStart](state) {
        state.isSubmutting = true
        state.validationErrors = null
    },
    [mutationsTypes.loginSuccess](state, payload) {
        state.isSubmutting = false
        state.currentUser = payload
    },
    [mutationsTypes.loginFailure](state, payload) {
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
                })
        })
    },

    [actionsTypes.login](context, credentials) {
        context.commit(mutationsTypes.loginStart)
        return new Promise(resolve => {
            authApi.login(credentials)
                .then(response => {
                    if (response.data.success === 1) {
                        context.commit(mutationsTypes.loginSuccess, response.data.message)
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
                    context.commit(mutationsTypes.loginFailure, e)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}