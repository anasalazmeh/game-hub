import { createBrowserRouter } from "react-router-dom";

import Navbar from "../components/Navbar";

import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import GameDetailPage from "../Pages/GameDetailPage";

const router=createBrowserRouter([
    {path:'', element:<Layout/>, children:[
        { path: '', element: <HomePage /> },
        { path: 'games/:id', element: <GameDetailPage /> },
    ]},
    
])
export default router