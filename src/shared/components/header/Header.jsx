import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FeaturedItems } from './FeaturedItems';
import './Header.css';

export const Header = () => {
	return (
		<div className="header-image">
			<div className="header-container max-w-container">
				<div className="space-y-5">
					<h1 className="text-3xl md:text-5xl font-bold">The Blog</h1>
					<h4 className="text-2xl md:text-4xl font-semibold text-[#464C53]">
						Fashion, News & Food Recipe
					</h4>
				</div>

				<div>
					<Link to={'/create-post'} className="blue-btn w-fit shadow-sm">
						Add Post
						<span>
							<BsArrowRight className="ml-2" />{' '}
						</span>
					</Link>
				</div>
			</div>

			<div className="flex overflow-x-auto xl:justify-center py-7 xl:pb-0">
				<FeaturedItems />
			</div>
		</div>
	);
};
