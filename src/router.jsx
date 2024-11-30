import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";

import VouncherDetail from "./pages/VouncherDetail";
import Sale from "./pages/Sale";
import ProductCreate from "./pages/ProductCreate";
import Vouncher from "./pages/Vouncher";
import ProductEdit from "./pages/ProductEdit";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:"/product",
                element:<Product/>
            },
            {
                path:"/product/productCreate",
                element:<ProductCreate/>
            },
            {
                path:"/product/:id",
                element:<ProductEdit/>
            },
             {
                path:"/sale",
                element:<Sale/>
            },
            {
                path:"/vouncher",
                element:<Vouncher/>
            },
            {
                path:"/vouncherDetail",
                element:<VouncherDetail/>
            }
        ]
    }
])
export default router;