<template>
	<Navbar v-if="isAuthenticated" />
	<Footer v-if="isAuthenticated" />
	<HeroImage />
	<RouterView v-slot="{ Component }">
		<Transition name="fade" mode="out-in">
			<Component :is="Component" />
		</Transition>
	</RouterView>
</template>

<script>
import { useAuthenticationStore } from '@/stores/AuthenticationStore'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import HeroImage from '@/components/HeroImage.vue';
export default {
	name: 'App',
	components: {
		Navbar,
		Footer,
		HeroImage
	},
	created() {
		const { login, isAuthenticated } = useAuthenticationStore();

		if (login === null || isAuthenticated) {
			this.$router.push('/login')
		}
	},
	computed: {
		isAuthenticated() {
			return useAuthenticationStore().isAuthenticated
		}
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap');

html,
body {
	margin: 0;
	/* background: #d7d7d7; */
}

#app {
	font-family: 'poppins', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .3s ease-out;
}
</style>
