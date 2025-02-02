<template>
	<section>
		<div class="form-box">
			<form autocomplete="off">
				<h1>WorkWise Assistive</h1>
				<div class="inputbox">
					<font-awesome-icon icon="fa-solid fa-envelope" />
					<input type="text" name="username" v-model="auth.login" autofocus required />
					<label for="username">Login</label>
				</div>
				<div class="inputbox">
					<font-awesome-icon icon="fa-solid fa-lock" />
					<input type="password" name="password" v-model="auth.password" required />
					<label for="password">Hasło</label>
				</div>
				<button @click.prevent="handleLogin">Zaloguj</button>
			</form>
			<label class="error-label">{{ errorMessage }}</label>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '@/stores/AuthenticationStore'
import { useAxiosPublic } from '@/utils/useAxios'

const router = useRouter()
const store = useAuthenticationStore()

const auth = ref({
	login: '',
	password: ''
})
const errorMessage = ref(null)


const handleLogin = async () => {
	const { data, error } = await useAxiosPublic(null, 'auth/login', 'post', {
		username: auth.value.login,
		password: auth.value.password
	}, () => router.push('/login'))

	if (data.value?.status === 200) {
		store.setAuthentication(data.value.data.username, true, data.value.data.roles)
		router.push('/')
	}
	else if (error.value !== null) {
		store.setAuthentication(null, false, [])

		switch (error.value?.response.status) {
			case 401:
				errorMessage.value = "Login lub hasło jest nieprawidłowe"
				break;
			default:
				errorMessage.value = "Błąd logowania. Prosimy o kontakt z administratorem"
				break;
		}
	}
	else {
		store.setAuthentication(null, false, [])
	}

	//debug
	// store.setAuthentication('test', true, [])
	// router.push('/')
}
</script>
<style scoped>
section {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	background: url('../assets/login_background.jpeg') no-repeat;
	background-position: center;
	background-size: cover;
}

h1 {
	font-size: 4em;
	color: #fff;
	text-align: center;
	text-shadow: #0e2f3b 1px 1px 1px;
	margin: 0;
}

.form-box {
	position: relative;
	width: 400px;
	padding: 80px 60px;
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.5);
	border-radius: 20px;
	backdrop-filter: blur(15px);
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
	-moz-box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
	box-shadow: 0px 0px 64px -13px rgba(66, 68, 90, 1);
}

.inputbox {
	position: relative;
	margin: 30px 0;
	border-bottom: 2px solid #fff;
}

.inputbox label {
	position: absolute;
	top: 50%;
	left: 5px;
	transform: translateY(-50%);
	color: #fff;
	font-size: 1em;
	pointer-events: none;
	transition: .3s;
}

input:focus~label,
input:valid~label {
	top: -5px;
}

.inputbox input {
	width: 100%;
	height: 50px;
	background: transparent;
	border: none;
	outline: none;
	font-size: 1em;
	padding: 0 35px 0 5px;
	color: #fff;
}

::-ms-reveal {
	display: none;
}

.inputbox svg {
	position: absolute;
	left: 0;
	color: #fff;
	font-size: 1.2em;
	top: 15px;
	transform: translateX(-150%);
}

button {
	width: 250px;
	height: 40px;
	border-radius: 40px;
	background: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 1em;
	font-weight: 600;
	transition: background-color .3s, color .3s;
}

button:hover,
button:focus {
	background-color: #5f249f;
	color: white;
}

.error-label {
	position: absolute;
	bottom: 0;
	width: 100%;
	margin-bottom: 20px;
	padding: 5px;
	font-weight: bold;
	font-size: 1.2rem;
	color: #FFF;
}
</style>
