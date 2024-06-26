import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import Cafe from '@/pages/Cafe.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},

	{
		path: '/cafe/:id',
		element: <Cafe />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
