import React from 'react';
import { Home } from './views';
import { Footer, NavBar } from './shared/components';

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
