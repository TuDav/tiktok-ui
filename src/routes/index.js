import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly 
    },
    {
        path: '/following',
        component: Following
    }
]
const priviateRoutes = [

]

export {priviateRoutes, publicRoutes}