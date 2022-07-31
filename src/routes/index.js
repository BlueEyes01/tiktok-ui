import {HeaderOnly} from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';    
import Search from '~/pages/Search';

// Publlic Routes
const publicRoutes = [
    { path: '/tiktok-ui', component: Home },
    { path: '/tiktok-ui/Following', component: Following },
    { path: '/tiktok-ui/Profile', component: Profile },
    { path: '/tiktok-ui/Upload', component: Upload, layout: HeaderOnly },
    { path: '/tiktok-ui/Search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
