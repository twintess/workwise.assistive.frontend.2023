<template>
	<nav>
		<div class="wrapper">
			<router-link to="/">
				<img src="@/assets/logo.svg" alt="logo" />
			</router-link>
			<MenuItem title="Komunikaty" :items="menu.popups" />
			<MenuItem title="Skróty" :items="menu.shortcuts" />
			<MenuItem title="Raporty" :items="menu.reports" />
			<MenuItem title="Procesy" :items="menu.processes" />
			<MenuItem title="Serwery" :items="menu.servers" />
			<MenuItem title="Audyt grup" :items="menu.groupAudit" />
			<MenuItem title="Ankiety" :items="menu.surveys" />
			<MenuItem title="Stacje" :items="menu.stations" />
			<MenuItem title="Pracownicy" :items="menu.employees" />
			<MenuItem title="AI" :items="menu.ai" />
			<MenuItem title="Administrator" :items="menu.admin" />
		</div>
		<div class="user-info">
			<MenuItem title="Jan Niezbędny" :items="menu.profile" />
		</div>
	</nav>
</template>
<script setup>
import menu from '@/dummy/menu'
import MenuItem from './MenuItem.vue'
</script>
<style scoped>
nav {
	display: flex;
	justify-content: space-between;
	background-color: #FFF;
	border-bottom: 3px solid #eceef1;
}

.wrapper,
.user-info {
	display: flex;
	flex-wrap: wrap;
	font-weight: bold;
	justify-content: start;
}

.user-info {
	margin-right: 20px;
}

a {
	text-decoration: none;
	background-color: rgba(255, 255, 255, 0.4);
	padding: 10px 25px;
	border-radius: 5px;
	border: none;
	transition: .3s;
	cursor: pointer;
	font-weight: bold;
	color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: inherit;
	margin-right: 10px;
}

a:first-child {
	padding: 0;
}

img {
	height: 90px;
	margin-left: 20px;
}
</style>