import React from 'react';
import { logo } from '../../constants/assets';
import { Link } from 'react-router-dom';
import { LuMailOpen } from 'react-icons/lu';
import { BsPhone } from 'react-icons/bs';
import './Footer.css';

export const Footer = () => {
	return (
		<>
			<div className="max-w-container mb-28">
				<div className="grid grid-cols-5 gap-5">
					<div className="space-y-10 col-span-2">
						<div className="flex space-x-3 items-center">
							<img src={logo} alt="Hot Cake Logo" className="w-16 h-20" />
							<h1 className="nav-title">HOT CAKE</h1>
						</div>
						<p className="text-gray-500 text-sm">
							© 2023 Hot Cake Blog. All rights reserved.
						</p>
					</div>

					<div>
						<h1 className="footer-title">Hot Cake</h1>

						<div className="footer-menu">
							<Link to={''} className="footer-link">
								Home
							</Link>
							<Link to={''} className="footer-link">
								Add Story
							</Link>
							<Link to={''} className="footer-link">
								My Stories
							</Link>
							<Link to={''} className="footer-link">
								Contact
							</Link>
						</div>
					</div>

					<div>
						<h1 className="footer-title">Socials</h1>

						<ul className="footer-menu">
							<a href="" className="footer-link">
								Facebook
							</a>
							<a href="" className="footer-link">
								Twitter
							</a>
							<a href="" className="footer-link">
								Instagram
							</a>
							<a href="" className="footer-link">
								Snapchat
							</a>
						</ul>
					</div>

					<div>
						<h1 className="footer-title">Contact Us</h1>

						<ul className="footer-menu">
							<li className="footer-icon-group">
								<BsPhone className="w-5 h-5" />
								<span>+233 89 823 2342</span>
							</li>
							<li className="footer-icon-group">
								<LuMailOpen className="w-5 h-5" />
								<span>Info@hotcake.com</span>
							</li>
							<li>12379043 Ashaiman, Lebanon Zone 2 building 47 office 230</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
