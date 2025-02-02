import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', {
	state: () => {
		return {
			login: null,
			isAuthenticated: false,
			roles: []
		}
	},
	actions: {
		setAuthentication(login, isAuthenticated, roles) {
			this.login = login
			this.isAuthenticated = isAuthenticated
			this.roles = roles
		},
	},
	getters: {
	}
})