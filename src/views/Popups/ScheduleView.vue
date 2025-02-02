<template>
	<div>
		<div class="content-wrapper">
			<PageTitle title="Harmonogram" />
			<div class="help">
				<n-tooltip trigger="hover" placement="bottom-start">
					<template #trigger>
						<n-button>Pomoc (?)</n-button>
					</template>
					Kliknięcie dwa razy na dany termin pozwoli przejść do bardziej szczegółowego widoku np. z miesiąca na
					tydzień. W widoku dzień, kliknięcie dwa razy w termin, otworzy formularz zakładania nowego harmonogramu
					dla komunikatu.
				</n-tooltip>
			</div>
			<VueCal hide-weekends :time=false :events="events" events-on-month-view="short"
				:disable-views="['years', 'year']" :editable-events="{ create: true }" @cell-dblclick="onScheduleNewPopup"
				locale="pl" v-model:active-view="activeView" @view-change="fetchSchedule" @ready="fetchSchedule">
				<template #event="{ event }">
					<div class="vuecal__event-title" v-html="event.title" />
				</template>
			</VueCal>
		</div>
		<Transition>
			<SchedulePopupModal v-if="isModalOpened" :enterDate="selectedDate" @modal-closed="onModalClosed" />
		</Transition>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import SchedulePopupModal from '@/components/SchedulePopupModal.vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from 'moment';
import { NTooltip, NButton } from 'naive-ui'
import { useAxiosAsync } from '@/utils/useAxios';
import PageTitle from '@/components/PageTitle.vue';

const router = useRouter()
const events = ref([])
const isModalOpened = ref(false)
const activeView = ref('week')
const selectedDate = ref(null)


const onScheduleNewPopup = date => {
	if (activeView.value === 'day') {
		isModalOpened.value = true
		selectedDate.value = date
	}
}

const onModalClosed = () => {
	isModalOpened.value = false
}

const fetchSchedule = async ({ startDate, endDate }) => {
	const startString = moment(startDate).format("YYYY-MM-DD HH:mm:ss.SSS")
	const endString = moment(endDate).format("YYYY-MM-DD HH:mm:ss.SSS")
	const { data: schedule } = await useAxiosAsync([], `popup/get-schedule?from=${startString}&to=${endString}`, 'get', null,
		() => router.push('/')
	)

	events.value = schedule.value.data
}
</script>
<style scoped>
.content-wrapper {
	position: relative;
}

.help {
	position: absolute;
	right: 0;
	top: 0;
}

.vuecal__event-title {
	text-align: center;
	padding: 5px;
}

.v-enter-active,
.v-leave-active {
	transition: transform .6s ease;
}

.v-enter-from,
.v-leave-to {
	transform: translateX(110%);
}
</style>