import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PostContextProvider } from './shared/context/PostContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<PostContextProvider>
				<App />
			</PostContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
