import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from './views/FrontPage'
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
import RegisterStep3a from "./components/Login/RegisterStep3-1"
import RegisterStep3b from "./components/Login/RegisterStep3-2"
import RegisterStep4 from "./components/Login/RegisterStep4"
import CommodityBrowsingList1 from "@/components/Common/CommodityBrowsingList1"
import CommodityBrowsingList2 from "@/components/Common/CommodityBrowsingList2"
import CommodityBrowsingList3 from "@/components/Common/CommodityBrowsingList3"
import Admin from "./views/Admin"
import AdminHome from "./views/AdminPages/AdminHome"
import PurchasePage from './views/PurchasePage'
import AdminTrustOrder from "./views/AdminPages/AdminTrustOrder"
import ShoppingList from "./views/ShoppingList";
import Order from "./views/Order";
import FosterPage from "./views/FoseterPage";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        },
        {
            path: '/FosterPage',
            name: 'FosterPage',
            component: FosterPage
        },
        {
            path: '/ShoppingList',
            name: 'ShoppingList',
            component: ShoppingList
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order,
        },
        {
            path: '/CommodityBrowsing',
            name: 'CommodityBrowsing',
            component: CommodityBrowsing,
            children: [
                {
                    path: 'CommodityBrowsingList1',
                    name: 'CommodityBrowsingList1',
                    component: CommodityBrowsingList1
                },
                {
                    path: 'CommodityBrowsingList2',
                    name: 'CommodityBrowsingList2',
                    component: CommodityBrowsingList2
                },
                {
                    path: 'CommodityBrowsingList3',
                    name: 'CommodityBrowsingList3',
                    component: CommodityBrowsingList3
                }
            ]
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
            children: [{
                path: 'RegisterStep1',
                component: RegisterStep1,
                name: RegisterStep1,
            },
                {
                    path: 'RegisterStep2',
                    component: RegisterStep2,
                    name: RegisterStep2,
                },
                {
                    path: 'RegisterStep3a',
                    component: RegisterStep3a,
                    name: RegisterStep3a,
                },
				{
                    path: 'RegisterStep3b',
                    component: RegisterStep3b,
                    name: RegisterStep3b,
				},
                {
                    path: 'RegisterStep4',
                    component: RegisterStep4,
                    name: RegisterStep4,
                }
            ]
        },
        {
            path: '/PurchasePage',
            name: 'PurchasePage',
            component: PurchasePage,
            children: [{
                path: 'ProductDescriptionDetails',
                component: ProductDescriptionDetails,
                name: ProductDescriptionDetails,
            },
                {
                    path: 'ProductComments',
                    component: ProductComments,
                    name: ProductComments,
                }
            ]
        },
        {
            path: '/Access',
            name: Access,
            component: Access,
            children: [{
                path: 'AccessDetails',
                component: AccessDetails,
                name: AccessDetails
            },
                {
                    path: 'AccessRecording',
                    component: AccessRecording,
                    name: AccessRecording
                }
            ]
        },
        {
            path: '/admin',
            name: 'AdminPages',
            component: Admin,
            children: [{
                path: "",
                name: "home",
                component: AdminHome
            },
                {
                    path: "trusteeship-order",
                    name: "trusteeship-order",
                    component: AdminTrustOrder
                }]
        }

    ]
})
