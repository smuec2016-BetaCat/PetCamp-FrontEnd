import Vue from 'vue'
import Router from 'vue-router'
import Access from './components/Access/Access'
import FrontPage from './views/FrontPage'
import AccessDetails from './components/Access/AccessDetails'
import AccessRecording from './components/Access/AccessRecording'
import PurchasePage from './views/PurchasePage'
import ProductDescriptionDetails from './components/Common/ProductDsecription/ProductDescriptionDetails'
import ProductComments from './components/Common/ProductDsecription/ProductComments'

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
