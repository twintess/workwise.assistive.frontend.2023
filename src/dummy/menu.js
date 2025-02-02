import { POPUP_OPERATOR, POPUP_READER } from '@/utils/roles'
export default {
	popups: [
		{
			menuId: 1,
			menuTitle: 'Nowy komunikat',
			path: 'new-popup',
			role: POPUP_OPERATOR,
			icon: 'fa-solid fa-window-maximize'
		},
		{
			menuId: 2,
			menuTitle: 'Harmonogram',
			path: 'popup-schedule',
			role: POPUP_READER,
			icon: 'fa-solid fa-calendar-days'
		},
		{
			menuId: 2,
			menuTitle: 'Dystrybucja',
			path: 'popup-distribution',
			role: POPUP_OPERATOR,
			icon: 'fa-solid fa-calendar-plus'
		},
		{
			menuId: 4,
			menuTitle: 'Audyt wyświetleń',
			path: 'execution-audit',
			role: POPUP_READER,
			icon: 'fa-solid fa-display'
		},
		{
			menuId: 5,
			menuTitle: 'Historia',
			path: 'popup-history',
			role: POPUP_READER,
			icon: 'fa-solid fa-timeline'
		},
	],
	shortcuts: [
		{
			menuId: 1,
			menuTitle: 'Nowy skrót',
			path: 'new-shortcut',
			role: '',
			icon: 'fa-solid fa-file-circle-plus'
		},
		{
			menuId: 2,
			menuTitle: 'Status skrótów',
			path: 'shortcut-status',
			role: '',
			icon: 'fa-solid fa-file-lines'
		},
	],
	reports: [
		{
			menuId: 1,
			menuTitle: 'Raport użycia procesów',
			path: 'processes-report',
			role: '',
			icon: 'fa-solid fa-code'
		},
		{
			menuId: 2,
			menuTitle: 'Raport dostępności serwerów',
			path: 'servers-report',
			role: '',
			icon: 'fa-solid fa-server'
		},
	],
	groupAudit: [
		{
			menuId: 1,
			menuTitle: 'Wyniki audytu grup',
			path: 'audit-results',
			role: '',
			icon: 'fa-solid fa-chart-simple'
		},
	],
	surveys: [
		{
			menuId: 1,
			menuTitle: 'Wyniki ankiet',
			path: 'survey-results',
			role: '',
			icon: 'fa-solid fa-chart-simple'
		},
	],
	stations: [
		{
			menuId: 1,
			menuTitle: 'Blokada stacji',
			path: 'block-station',
			role: '',
			icon: 'fa-solid fa-laptop',
		},
		{
			menuId: 2,
			menuTitle: 'Status blokady',
			path: 'block-status',
			role: '',
			icon: 'fa-solid fa-chart-simple',
		},
		{
			menuId: 3,
			menuTitle: 'Odblokuj',
			path: 'unlock-station',
			role: '',
			icon: 'fa-solid fa-unlock-keyhole',
		},
	],
	employees: [
		{
			menuId: 1,
			menuTitle: 'Pracownik zewnętrzny',
			path: 'external-employee',
			role: '',
			icon: 'fa-solid fa-briefcase',
		},
		{
			menuId: 2,
			menuTitle: 'Pracownik umysłowy',
			path: 'white-collar',
			role: '',
			icon: 'fa-solid fa-user-tie',
		},
		{
			menuId: 2,
			menuTitle: 'Historia kont pracowników',
			path: 'white-collar',
			role: '',
			icon: 'fa-solid fa-rectangle-list',
		},
		{
			menuId: 3,
			menuTitle: 'Zmień hasło pracownika',
			path: 'employee-password',
			role: '',
			icon: 'fa-solid fa-unlock-keyhole',
		},
		{
			menuId: 4,
			menuTitle: 'Zmień hasło nowego pracownika',
			path: 'new-employee-password',
			role: '',
			icon: 'fa-solid fa-unlock-keyhole',
		},
		{
			menuId: 5,
			menuTitle: 'Historia haseł',
			path: 'password-history',
			role: '',
			icon: 'fa-solid fa-list-check',
		},
	],
	ai: [
		{
			menuId: 1,
			menuTitle: 'Rozmowa z BOT\'em',
			path: 'ai-chat',
			role: '',
			icon: 'fa-solid fa-brain',
		},
	],
	admin: [
		{
			menuId: 1,
			menuTitle: 'Dodaj użytkownika',
			path: 'user-add',
			role: '',
			icon: 'fa-solid fa-user-plus',
		},
		{
			menuId: 1,
			menuTitle: 'Dodaj administratora',
			path: 'admin-add',
			role: '',
			icon: 'fa-solid fa-user-plus',
		},
		{
			menuId: 2,
			menuTitle: 'Inwentaryzacja użytkowników',
			path: 'user-inventory',
			role: '',
			icon: 'fa-solid fa-list-check',
		},
		{
			menuId: 3,
			menuTitle: 'Reset hasła',
			path: 'password-reset',
			role: '',
			icon: 'fa-solid fa-key',
		},
		{
			menuId: 4,
			menuTitle: 'Zarządzanie kontami',
			path: 'account-management',
			role: '',
			icon: 'fa-solid fa-people-roof',
		},
		{
			menuId: 4,
			menuTitle: 'Zarządzanie rolami',
			path: 'role-management',
			role: '',
			icon: 'fa-solid fa-shield',
		},
		{
			menuId: 5,
			menuTitle: 'Tickety Qualys',
			path: 'role-management',
			role: '',
			icon: 'fa-solid fa-ticket',
		},
	],
	profile: [
		{
			menuId: 1,
			menuTitle: 'Profil',
			path: 'profile',
			role: '',
			icon: 'fa-solid fa-user'
		},
		{
			menuId: 2,
			menuTitle: 'Wyloguj',
			path: 'sign-out',
			role: '',
			icon: 'fa-solid fa-right-from-bracket'
		},
	],
}