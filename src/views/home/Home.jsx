import { Link } from 'react-router-dom';
import { Header, Highlight, SidePanel } from '../../shared/components';
import { featureI } from '../../shared/constants/assets';
import { MdEmail } from 'react-icons/md';

export const Home = () => {
	return (
		<>
			<Header />

			<section className="max-w-container">
				<div className="min-h-[15rem] flex items-center">
					<h1 className="text-5xl font-medium">Most Recent</h1>
				</div>

				<div className="flex items-start space-x-10">
					<div>
						<Highlight />
					</div>

					<div>
						<SidePanel />
					</div>
				</div>

				<div className="min-h-[25rem] flex items-center rounded-3xl bg-[#f7f8fb] my-40 px-32">
					<div className="max-w-sm space-y-10">
						<h1 className="text-4xl font-bold">
							How to Create Eye-Catching Email with Sendlane, S Email Builder
						</h1>

						<Link to={'/read-more'} className="orange-btn w-fit">
							Read More
						</Link>
					</div>
				</div>
			</section>

			<section className="max-w-container mb-32">
				<div className="mb-20 flex items-center">
					<h1 className="text-5xl font-medium">Winter Recipes</h1>
				</div>

				<div className="grid grid-cols-3 gap-3">
					<div className="space-y-8">
						<img
							src={featureI}
							alt=""
							className="h-[25rem] object-cover rounded-[3rem] bg-[#f7f8fb]"
						/>

						<div className="space-y-5">
							<h1 className="text-2xl font-bold">
								How to Create Eye-Catching Email with Sendlane,s Email Builder{' '}
							</h1>

							<h2 className="text-sm">
								How to Cook Spaghetti SquashI get so many questions about how to
								cook spaghetti squash, so I thought I’d share my go-to method
								for roasting it, a f ...
							</h2>

							<div className="text-xs">
								<h4 className="font-bold">Lura Blaim</h4>
								<h4>November 9, 2021</h4>
							</div>
						</div>
					</div>
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
