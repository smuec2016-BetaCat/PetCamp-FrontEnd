import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from './views/FrontPage'
import PurchasePage from './views/PurchasePage'
import Register from "./views/Register"
import Login from "./views/Login"
import CommodityBrowsing from './views/CommodityBrowsing'

import Access from './components/Access/Access'
import AccessDetails from './components/Access/AccessDetails'
import AccessRecording from './components/Access/AccessRecording'
import ProductDescriptionDetails from './components/Common/ProductDsecription/ProductDescriptionDetails'
import ProductComments from './components/Common/ProductDsecription/ProductComments'
import RegisterStep1 from "./components/Login/RegisterStep1"
import RegisterStep2 from "./components/Login/RegisterStep2"
import RegisterStep3 from "./components/Login/RegisterStep3"

Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        name: 'FrontPage',
        component: FrontPage
    },
	{
		path: '/Login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/CommodityBrowsing',
		name: 'CommodityBrowsing',
		component: CommodityBrowsing,
	},
	{
		path: '/Register',
		name: 'Register',
		component: Register,
		children:[{
			path:'RegisterStep1',
			component:RegisterStep1,
			name:RegisterStep1,
		},
		{
			path:'RegisterStep2',
			component:RegisterStep2,
			name:RegisterStep2,
		},
		{
			path:'RegisterStep3',
			component:RegisterStep3,
			name:RegisterStep3,
		}
		]
	},
	{
		path: '/PurchasePage',
		name: 'PurchasePage',
		component: PurchasePage,
        children:[{
            path:'ProductDescriptionDetails',
            component:ProductDescriptionDetails,
            name:ProductDescriptionDetails,
        },
        {
            path:'ProductComments',
            component:ProductComments,
            name:ProductComments,
        }
        ]
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
    }

    ]
})
