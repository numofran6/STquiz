import React from 'react';
import { AddPost, Footer, Home, ManagePosts, NavBar } from './views';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="create-post" element={<AddPost />} />
				<Route path="manage-posts" element={<ManagePosts />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
