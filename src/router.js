import Vue from 'vue'
import Router from 'vue-router'
import Access from './components/Access/Access'
import FrontPage from './views/FrontPage'
import AccessDetails from './components/Access/AccessDetails'
import AccessRecording from './components/Access/AccessRecording'

Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        name: 'FrontPage',
        component: FrontPage
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
