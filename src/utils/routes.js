import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NewPopupView from '@/views/Popups/NewPopupView.vue'
import ScheduleView from '@/views/Popups/ScheduleView.vue'
import PopupDistributionView from '@/views/Popups/PopupDistributionView.vue'

export default [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/login',
        component: LoginView,
    },
    {
        path: '/new-popup',
        component: NewPopupView,
    },
    {
        path: '/popup-schedule',
        component: ScheduleView,
    },
    {
        path: '/popup-distribution',
        component: PopupDistributionView,
    },
    {
        path: '/execution-audit',
        component: HomeView,
    },
    {
        path: '/popup-history',
        component: HomeView,
    },
    {
        path: '/new-shortcut',
        component: HomeView,
    },
    {
        path: '/shortcut-status',
        component: HomeView,
    },
    {
        path: '/processes-report',
        component: HomeView,
    },
    {
        path: '/servers-report',
        component: HomeView,
    },
    {
        path: '/audit-results',
        component: HomeView,
    },
    {
        path: '/survey-results',
        component: HomeView,
    },
    {
        path: '/block-station',
        component: HomeView,
    },
    {
        path: '/block-status',
        component: HomeView,
    },
    {
        path: '/unlock-station',
        component: HomeView,
    },
    {
        path: '/employee-password',
        component: HomeView,
    },
    {
        path: '/new-employee-password',
        component: HomeView,
    },
    {
        path: '/password-history',
        component: HomeView,
    },
    {
        path: '/user-add',
        component: HomeView,
    },
    {
        path: '/admin-add',
        component: HomeView,
    },
    {
        path: '/user-inventory',
        component: HomeView,
    },
    {
        path: '/password-reset',
        component: HomeView,
    },
    {
        path: '/account-management',
        component: HomeView,
    },
    {
        path: '/role-management',
        component: HomeView,
    },
    {
        path: '/profile',
        component: HomeView,
    },
    {
        path: '/sign-out',
        component: HomeView,
    },
    {
        path: '/ai-chat',
        component: HomeView,
    }
]