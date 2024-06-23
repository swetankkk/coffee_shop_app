import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from '@/pages/Home.tsx';
import Cafe from '@/pages/Cafe.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/cafe',
		element: <Cafe />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
