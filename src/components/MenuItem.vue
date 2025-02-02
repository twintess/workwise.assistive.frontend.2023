<template>
	<button ref="currentRef" @click="currentClick" :class="{ 'button-accent': isOpened }">
		{{ title }}
		<span class="icon-toggler" :class="{ 'icon-toggler-opened': isOpened }">></span>
	</button>
	<ul v-if="isOpened && items !== undefined" class="menu" :style="positionStyle">
		<li v-for="item in items" class="menu-item" :key="item.menuId">
			<font-awesome-icon v-bind:icon="item.icon" />
			<router-link :to="'/' + item.path">{{ item.menuTitle }}</router-link>
		</li>
	</ul>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const currentRef = ref(null)
const route = useRoute()

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
		required: false,
	},
})

const isOpened = ref(false)
const positionStyle = ref(null)

const currentClick = () => {
	isOpened.value = !isOpened.value
	const rect = currentRef.value.getBoundingClientRect()

	positionStyle.value = {
		top: (rect.top + rect.height + 10) + 'px',
		left: rect.left + 'px',
	}
}

watch(route, () => {
	if (isOpened.value) {
		isOpened.value = false
	}
})

</script>
<style scoped>
a,
button {
	text-decoration: none;
	background: transparent;
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
	border: none;
	transition: .3s;
	cursor: pointer;
	font-weight: bold;
	color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-family: inherit;
}

button {
	border-radius: 0;
	z-index: 5;
	border-bottom: 2px solid transparent;
}

.button-accent {
	border-bottom: 2px solid #5f249f;
}

a:hover,
button:hover {
	color: #5f249f;
}

a:first-child {
	background-color: transparent;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: .3s;
}

.icon-toggler {
	margin-left: 15px;
	transform: rotate(-270deg);
	transition: transform .3s ease-out;
}

.icon-toggler-opened {
	transform: rotate(-90deg);
}

.menu {
	list-style-type: none;
	background-color: #FFF;
	margin: 0;
	padding: 0;
	border-radius: 5px;
	z-index: 10;
	position: absolute;
}

.menu-item {
	padding: 0 20px;
	cursor: pointer;
	transition: .3s;
	border-radius: 5px;
	display: flex;
	justify-content: start;
	display: flex;
	align-items: center;
}

.menu-item:hover {
	background-color: #5f249f;
}

.menu-item:hover>a {
	color: #FFF;
	transition: initial;
}

.menu-item:hover>svg {
	color: white;
}
</style>