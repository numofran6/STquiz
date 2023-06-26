import { logo } from '../../shared/constants/assets';
import { NavLink } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { useState } from 'react';
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import { useInAppNavigation } from '../../shared/custom-hooks';
import './NavBar.css';

export const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { gotoHome } = useInAppNavigation();

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return { backgroundColor: 'white' };
		}
	};

	return (
		<>
			<div className="bg-[#f2f4f5]">
				<div className="navbar-container max-w-container">
					<div
						onClick={gotoHome}
						className="cursor-pointer flex space-x-2 md:space-x-3 items-center"
					>
						<img src={logo} alt="Hot Cake Logo" className="w-14 md:w-16 h-20" />
						<h1 className="nav-title">HOT CAKE</h1>
					</div>

					<div className="hidden xl:flex space-x-5 items-center">
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

					<div className="flex items-center space-x-3">
						<div className="hidden md:flex">
							<span className="relative ">
								<input
									type="text"
									placeholder="Search..."
									className="search-input"
								/>

								<VscSearch className="input-icon" />
							</span>
						</div>

						<div className="xl:hidden">
							<TfiMenu onClick={handleShowMenu} className="w-7 h-7" />
						</div>
					</div>
				</div>
			</div>

			{showMenu && (
				<div className="fixed inset-0 bg-[#f2f4f5] text-black max-h-[100vh] z-50 ">
					<div className="flex flex-col h-full justify-center space-y-5 items-center">
						<NavLink
							to={'/'}
							onClick={handleShowMenu}
							style={navLinkStyle}
							className="nav-link-mobile"
						>
							Home
						</NavLink>
						<NavLink
							to={'/create-post'}
							onClick={handleShowMenu}
							style={navLinkStyle}
							className="nav-link-mobile"
						>
							Create Post
						</NavLink>
						<NavLink
							to={'/manage-posts'}
							onClick={handleShowMenu}
							style={navLinkStyle}
							className="nav-link-mobile"
						>
							My Posts
						</NavLink>
					</div>

					<div className="absolute top-10 left-1/2 -translate-x-1/2">
						<TfiClose onClick={handleShowMenu} className="w-10 h-10" />
					</div>
				</div>
			)}
		</>
	);
};
