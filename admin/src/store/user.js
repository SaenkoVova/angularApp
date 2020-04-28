import Axios from "axios";
const path = require('../config/default');

export default {
    state: {
        user: {
            token: window.localStorage.getItem('ANGULAR_APP_AUTH_TOKEN') || null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.token = payload;
            window.localStorage.setItem('ANGULAR_APP_AUTH_TOKEN', payload);
        },
        UNSET_USER(state) {
            state.user.token = null;
            window.localStorage.removeItem('ANGULAR_APP_AUTH_TOKEN');
        }
    },
    actions: {
        SIGNIN({commit}, payload) {
            commit('CLEAN_ERROR');
            commit('SET_PROCESSING', true);
            Axios.post(`${path.default.state.url}/api/auth/signin`, payload)
            .then((data) => {
                commit('SET_USER', data.data.token);
                commit('SET_PROCESSING', false);
            })
            .catch((err) => {
                commit('SET_ERROR', err.response.data.message);
                commit('SET_PROCESSING', false);
            })
        }
    },
    getters: {
        getUserToken: (state) => state.user.token
    }
}