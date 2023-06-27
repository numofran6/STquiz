import React from 'react';
import {
	CreatePost,
	Footer,
	Home,
	ManagePosts,
	NavBar,
	ViewPost,
} from './views';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="create-post" element={<CreatePost />} />
				<Route path="manage-posts" element={<ManagePosts />} />
				<Route path="view-post" element={<ViewPost />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
