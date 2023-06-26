import {
	Header,
	Highlight,
	PostCard,
	SidePanel,
} from '../../shared/components';
import { layer } from '../../shared/constants/assets';
import { MdEmail } from 'react-icons/md';
import { recipes, recentItems, promotedItem } from '../../shared/utils/data';
import './Home.css';
import { useInAppNavigation } from '../../shared/custom-hooks';

export const Home = () => {
	const { handlePostView } = useInAppNavigation();
	return (
		<>
			<header>
				<Header />
			</header>

			<main className="max-w-container">
				<section>
					<div className="mt-32 mb-12 md:mb-20 flex items-center">
						<h1 className="section-title">Most Recent</h1>
					</div>

					<div className="most-recent-section">
						{recentItems.slice(0, 1).map((item) => (
							<div key={item.title} className="col-span-2">
								<Highlight
									title={item.title}
									description={item.description}
									img={item.img}
									onClick={() => handlePostView(item)}
								/>
							</div>
						))}

						<div className="flex flex-col space-y-7 lg:space-y-5">
							{recentItems.slice(1).map((item, index) => (
								<div key={index}>
									<SidePanel
										title={item.title}
										image={item.img}
										description={item.description}
										onClick={() => handlePostView(item)}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="promoted-container">
						<div className="promoted-card">
							<div className="space-y-10">
								<h1 className="text-2xl md:text-4xl font-bold md:max-w-sm">
									How to Create Eye-Catching Email with Sendlane, S Email
									Builder
								</h1>

								<button
									onClick={() => handlePostView(promotedItem)}
									className="orange-btn w-fit"
								>
									Read More
								</button>
							</div>
						</div>

						<img
							src={layer}
							alt=""
							className="promoted-image align-float-vertical"
						/>
					</div>
				</section>

				<section className="mb-32">
					<div className="mb-20 flex items-center">
						<h1 className="section-title">Winter Recipes</h1>
					</div>

					<div className="recipes-section">
						{recipes.map((item, index) => (
							<div key={index}>
								<PostCard
									image={item.img}
									title={item.title}
									description={item.description}
									date={item.date}
									author={item.author}
									onClick={() => handlePostView(item)}
								/>
							</div>
						))}
					</div>
				</section>

				<section>
					<div className="subscribe-container">
						<h1 className="max-w-sm text-4xl text-white font-bold">
							Don't Miss Anything. Subscribe to our newsletter.
						</h1>

						<div className="space-y-3">
							<span className="relative">
								<input
									type="text"
									placeholder="Email Address"
									className="subscribe-input"
								/>

								<MdEmail className="align-float-vertical w-7 h-7 left-5" />

								<button className="subscribe-btn hidden md:block">
									SUBSCRIBE
								</button>
							</span>

							<div>
								<button className="subscribe-btn md:hidden w-full">
									SUBSCRIBE
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
