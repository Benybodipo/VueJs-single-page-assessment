import axios from 'axios';
import {createStore} from 'vuex'
import router from '../router'

const url = "http://localhost:3000/accounts";

export default createStore({
    state: {
        allAccounts: null,
        currentAccount: null,
    },
    mutations: {
        setAllAccounts (state, payload) {
            state.allAccounts = payload
        },
        setCurrentAccount(state, payload) {
            state.currentAccount = payload
        }
    },
    actions: {
        setAllAccounts ({commit}) {
            axios(url).then((response)=> {
                commit('setAllAccounts', response.data)
            })
        },
        setCurrentAccount ({commit}, account_id) {
            axios(url + "/" + account_id).then((response)=> {
                commit('setCurrentAccount', response.data)
            })
        }
    },
    modules: {},
    getters: {
        getAllAccounts: (state) => {
            return state.allAccounts
        },
        getCurrentAccount: (state) => {
            return state.currentAccount
        }
    
    }

})