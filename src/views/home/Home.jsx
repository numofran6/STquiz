import { Header } from '../../shared/components';

export const Home = () => {
	return (
		<>
			<Header />

			<section className="max-w-[75rem] mx-auto">
				<div className="min-h-[15rem] flex items-center">
					<h1 className="text-6xl font-medium">Most Recent</h1>
				</div>
			</section>
		</>
	);
};
