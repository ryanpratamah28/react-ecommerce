import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Error Page
import ErrorPage from '../components/Error Page/ErrorPage'

// User
import Home from '../views/User/Home/Home'
import Product_List from '../views/User/Product List/ProductList'

// Admin
import Sidebar_Admin from '../views/Admin/Sidebar Admin/SidebarAdmin'
import Dashboard_Admin from '../views/Admin/Dashboard Admin/DashboardAdmin'

// Route
const router = createBrowserRouter([
    // User

    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/product',
        element: <Product_List />,
    },

    // Admin

    {
        path: '/admin',
        element: <Sidebar_Admin />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard_Admin />,
            },
        ],
    },
])

function Router() {
    return <RouterProvider router={router} />
}

export default Router
