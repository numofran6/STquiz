import { Link } from 'react-router-dom';

export const PageNotFound = () => {
	return (
		<>
			<div className="no-created-post-container landing-background">
				<h1 className="text-xl">Page Not Found</h1>
				<Link to={'/'} className="blue-btn-inverse">
					Home
				</Link>
			</div>
		</>
	);
};
