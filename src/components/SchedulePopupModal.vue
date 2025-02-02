<template>
	<section class="wrapper">
		<div class="modal">
			<div class="content">
				<n-tooltip trigger="hover" placement="left">
					<template #trigger>
						<label> Data uruchomienia komunikatu (?)</label>
					</template>
					Wybierz datę i godzinę uruchomienia komunikatu. Można wybrać kilka dat.
				</n-tooltip>
				<VueDatePicker v-model="selectedDates" multi-dates @cleared="handleClear" format="d.MM.yyyy HH:mm"
					:disabled-week-days="[6, 0]" locale="pl" select-text="Wybierz" cancel-text="Anuluj" />
				<label>Wybrane daty</label>
				<span v-for="(date, index) in orderedDates" :key="date">
					<b>{{ index + 1 }}:</b> {{ date }}
				</span>
				<label>Wybierz komunikat</label>
				<vSelect :options="popups.data" v-model="selectedPopup">
					<template #no-options>
						Brak komunikatów
					</template>
				</vSelect>
				<n-switch v-model:value="recurring" :rail-style="recurringStyle">
					<template #checked>
						Komunikat cykliczny
					</template>
					<template #unchecked>
						Komunikat pojedynczy
					</template>
				</n-switch>
				<template v-if="recurring">
					<n-alert title="Uwaga" type="warning" closable>
						Wybierając komunikat cykliczny, ustawiona zostanie jedna data uruchomienia. Wybierz poniżej interwał
						oraz przedział czasu aby komunikat był uruchamiany wg. Twoich preferencji np. co 2 tygodnie od daty
						uruchomienia komunikatu.
					</n-alert>
					<label>Interwał</label>
					<n-input-number v-model:value="interval" placeholder="Wprowadź liczbę" clearable size="medium" />
					<label>Wybierz przedział czasu</label>
					<vSelect :options="timePeriods.data" v-model="selectedTimePeriodName">
						<template #no-options>
							Błąd aplikacji, odśwież stronę
						</template>
					</vSelect>
					<label>Wybierz datę końcową komunikatu (nie później niż 3 miesiące od daty startowej)</label>
					<VueDatePicker v-model="endDate" format="d.MM.yyyy HH:mm" :disabled-week-days="[6, 0]" locale="pl"
						:min-date="minEndingDate" :max-date="maxEndingDate" select-text="Wybierz" cancel-text="Anuluj" />
				</template>
				<label>Lista komputerów</label>
				<n-input v-model:value="destinationSns" type="textarea" size="large"
					placeholder="Lista nr seryjnych rozdzielona nową linią lub średnikiem" :autosize="{
						minRows: 2
					}" minlength="1" clearable />
				<div class="modal-buttons">
					<n-button size="medium" :color="colors.primary.brightPurple" @click="handleNewSchedule">
						Potwierdź
					</n-button>
					<n-button size="medium" ghost :color="colors.primary.brightPurple" @click="$emit('modalClosed')">
						Anuluj
					</n-button>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { ref, computed, onUpdated } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { NSwitch, NButton, NInputNumber, NAlert, NTooltip, NInput } from 'naive-ui'
import colors from '@/utils/colorPallete'
import { useAxios, useAxiosAsync } from '@/utils/useAxios';
import { useRouter } from 'vue-router';
import moment from 'moment';

const props = defineProps({
	enterDate: {
		type: Date,
		required: true
	},
})

const router = useRouter()
const selectedDates = ref([])
const selectedPopup = ref(null)
const { data: popups } = useAxios([], 'popup/get-popup-list', 'get', null, () => router.push('/'))
const recurring = ref(false)
const endDate = ref(null)
const { data: timePeriods } = useAxios([], 'popup/get-time-period-list', 'get', null, () => router.push('/'))
const interval = ref(0)
const selectedTimePeriodName = ref(null)
const destinationSns = ref(null)
const emit = defineEmits(['modalClosed'])

const chosenDate = props.enterDate
chosenDate.setHours(10)
chosenDate.setMinutes(0)
chosenDate.setSeconds(0)
chosenDate.setMilliseconds(0);
selectedDates.value.push(chosenDate)

onUpdated(() => {
	if (recurring.value && selectedDates.value.length > 1) {
		selectedDates.value = [orderedDates.value[0]]
	}
})

const handleClear = () => {
	selectedDates.value = []
}

const orderedDates = computed(() => {
	return selectedDates.value?.sort((a, b) => (a - b))
		.map(date => date?.toLocaleString('pl-PL'))
})

const minEndingDate = computed(() => {
	return selectedDates.value?.sort((a, b) => (a - b)).at(-1) || null
})

const maxEndingDate = computed(() => {
	return moment(minEndingDate).add(3, 'M').format()
})

const recurringStyle = () => (
	{ backgroundColor: recurring.value ? colors.accent.darkTeal : colors.custom.red }
)

const handleNewSchedule = async () => {
	const newScheduleObject = {
		startingDates: selectedDates.value,
		eventId: selectedPopup.value.eventId,
		recurring: recurring.value,
		interval: interval.value,
		timePeriodName: selectedTimePeriodName.value?.label,
		endingDate: endDate.value,
		destinationSns: destinationSns.value
	}

	console.log(newScheduleObject)

	const { data, error } = await useAxiosAsync(null, 'popup/create-new-schedule', 'post', newScheduleObject,
		() => router.push('/'))

	if (data.value.status === 201) {
		//NotificationStore - add message about succesfull new schedule
	}
	else {
		//NotificationStore - add message about succesfull new schedule
	}

	emit('modalClosed')
}

</script>
<style scoped>
.wrapper {
	position: absolute;
	overflow-x: hidden;
	top: 0;
	right: 0;
	height: 100%;
	padding-left: 50px;
	text-align: left;
	z-index: 10;
}

.modal {
	position: relative;
	min-height: 100%;
	width: 400px;
	background-color: #FFF;
	padding: 30px;
	box-sizing: border-box;
	-webkit-box-shadow: 0px 0px 46px 2px #949494;
	-moz-box-shadow: 0px 0px 46px 2px #949494;
	box-shadow: 0px 0px 46px 2px #949494;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.modal-buttons {
	margin-top: 20px;
	display: flex;
	justify-content: space-around;
}
</style>