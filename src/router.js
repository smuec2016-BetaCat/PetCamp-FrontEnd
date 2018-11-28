import Vue from 'vue'
import Router from 'vue-router'
import Access from './components/Access/Access'
import FrontPage from './views/FrontPage'
import AccessDetails from './components/Access/AccessDetails'
import AccessRecording from './components/Access/AccessRecording'
import FrontPageNav from "./components/FrontPage/FrontPageNav"
import Admin from "./views/Admin"
import AdminHome from "./views/AdminPages/AdminHome"
import PurchasePage from './views/PurchasePage'


Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        name: 'FrontPage',
        component: FrontPage
    },
	{
		path: '/PurchasePage',
		name: 'PurchasePage',
		component: PurchasePage
	},
    {
        path: "/FrontPageNav",
        name: "FrontPageNav",
        component: FrontPageNav
    },
    {
        path:'/Access',
        name:Access,
        component:Access,
        children:[{
            path:'AccessDetails',
            component: AccessDetails,
            name:AccessDetails
        },
        {
            path:'AccessRecording',
            component: AccessRecording,
            name:AccessRecording
        }
        ]
    },
    {
        path: '/admin',
        name: 'AdminPages',
        component: Admin,
        children: [{
            path: "",
            name: "Home",
            component: AdminHome
        }]
    }

    ]
})
