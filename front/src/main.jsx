import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './layouts/components/pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <App />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
