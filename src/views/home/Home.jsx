import { Link } from 'react-router-dom';
import {
	Header,
	Highlight,
	PostCard,
	SidePanel,
} from '../../shared/components';
import { layer } from '../../shared/constants/assets';
import { MdEmail } from 'react-icons/md';
import { promoted, recentItems } from '../../shared/utils/data';

export const Home = () => {
	return (
		<>
			<Header />

			<section className="max-w-container">
				<div className="mt-32 mb-20 flex items-center">
					<h1 className="text-5xl font-medium">Most Recent</h1>
				</div>

				<div className="grid grid-cols-3 gap-10">
					{recentItems.slice(0, 1).map((item) => (
						<div className="col-span-2" key={item.title}>
							<Highlight
								title={item.title}
								description={item.description}
								img={item.img}
							/>
						</div>
					))}

					<div className="flex flex-col space-y-5">
						{recentItems.slice(1).map((item, index) => (
							<div key={index}>
								<SidePanel
									title={item.title}
									image={item.img}
									description={item.description}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="relative py-20 my-36">
					<div className="promoted-card">
						<div className="max-w-sm space-y-10">
							<h1 className="text-4xl font-bold">
								How to Create Eye-Catching Email with Sendlane, S Email Builder
							</h1>

							<Link to={'/read-more'} className="orange-btn w-fit">
								Read More
							</Link>
						</div>
					</div>

					<img
						src={layer}
						alt=""
						className="align-float-vertical w-[37rem] right-5"
					/>
				</div>
			</section>

			<section className="max-w-container mb-32">
				<div className="mb-20 flex items-center">
					<h1 className="text-5xl font-medium">Winter Recipes</h1>
				</div>

				<div className="grid grid-cols-3 gap-10">
					{promoted.map((item, index) => (
						<div key={index}>
							<PostCard
								image={item.img}
								title={item.title}
								description={item.description}
								date={item.date}
								author={item.author}
							/>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-container">
				<div className="subscribe-container">
					<h1 className="max-w-sm text-4xl font-bold">
						Don't Miss Anything. Subscribe to our newsletter.
					</h1>

					<span className="relative">
						<input
							type="text"
							placeholder="Email Address"
							className="subscribe-input"
						/>

						<MdEmail className="align-float-vertical w-7 h-7 left-5" />

						<button className="subscribe-btn">SUBSCRIBE</button>
					</span>
				</div>
			</section>
		</>
	);
};
