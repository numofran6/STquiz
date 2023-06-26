import { useContainerHover } from '../../custom-hooks';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import './PostCard.css';

export const AdvancedPostCard = ({
	image,
	title,
	description,
	author,
	date,
	onClick = () => {},
}) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();

	return (
		<>
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={onClick}
				className="space-y-8"
			>
				<div className="relative max-w-full">
					<img
						src={image}
						ref={imageRef}
						alt=""
						className={`postcard-img ${
							isHovered ? 'shadow-2xl' : ''
						} hover-transition`}
					/>

					<div className="config-btns-container">
						<button className="config-btns">
							<AiOutlineEdit className="w-5 h-5" /> <span>Edit</span>
						</button>

						<button className="config-btns">
							<MdDeleteOutline className="w-5 h-5" /> <span>Delete</span>
						</button>
					</div>
				</div>

				<div className="space-y-5">
					<h1 className="text-xl font-bold cursor-pointer">{title}</h1>

					<h2 className="text-sm text-gray-500">{description}</h2>

					<div className="text-xs">
						<h4 className="font-bold">{author} </h4>
						<h4>{date} </h4>
					</div>
				</div>
			</div>
		</>
	);
};
