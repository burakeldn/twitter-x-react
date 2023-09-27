import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import MainLayout from '../layouts/main'
import Message from '../pages/message'
import List from '../pages/list'
import Bookmark from '../pages/bookmark'
import Profil from '../pages/profil'

const routes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: 'notifications',
                element: <Notifications/>
            },
            {
                path: 'message',
                element: <Message/>
            },
            {
                path: 'list',
                element: <List/>
            },
            {
                path: 'bookmark',
                element: <Bookmark/>
            },
            {
                path: 'profil',
                element: <Profil/>
            }
        ]
    }
])

export default routes