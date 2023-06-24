import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FeaturedItems } from './FeaturedItems';
import './Header.css';

export const Header = () => {
	return (
		<div className="header-image">
			<div className="header-container">
				<div className="space-y-5">
					<h1 className="text-5xl font-bold">The Blog</h1>
					<h4 className="text-4xl font-semibold text-[#464C53]">
						Vegetarian, & Food Recipe
					</h4>
				</div>

				<div>
					<Link to={'/create-post'} className="blue-btn">
						Add Post
						<span>
							<BsArrowRight className="ml-2" />{' '}
						</span>
					</Link>
				</div>
			</div>

			<FeaturedItems />
		</div>
	);
};