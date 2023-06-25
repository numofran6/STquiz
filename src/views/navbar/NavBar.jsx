import { logo } from '../../shared/constants/assets';
import { NavLink } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import './NavBar.css';

export const NavBar = () => {
	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return { backgroundColor: 'white' };
		}
	};

	return (
		<div className="bg-[#f2f4f5]">
			<div className="navbar-container max-w-container">
				<div className="flex space-x-3 items-center">
					<img src={logo} alt="Hot Cake Logo" className="w-16 h-20" />
					<h1 className="nav-title">HOT CAKE</h1>
				</div>

				<div className="flex space-x-5 items-center">
					<NavLink to={'/'} style={navLinkStyle} className="nav-link">
						Home
					</NavLink>
					<NavLink
						to={'/create-post'}
						style={navLinkStyle}
						className="nav-link"
					>
						Create Post
					</NavLink>
					<NavLink
						to={'/manage-posts'}
						style={navLinkStyle}
						className="nav-link"
					>
						My Posts
					</NavLink>
				</div>

				<div>
					<span className="relative ">
						<input
							type="text"
							placeholder="Search..."
							className="search-input"
						/>

						<VscSearch className="input-icon" />
					</span>
				</div>
			</div>
		</div>
	);
};
