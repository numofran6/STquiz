import { useContainerHover } from '../../custom-hooks';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import './PostCard.css';

export const AdvancedPostCard = ({
	image,
	title,
	description,
	author,
	date,
	onClick = () => {},
	item,
}) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();
	const { dispatch } = useContext(PostContext);

	const handleDelete = (item) => {
		dispatch({ type: 'REMOVE_POST', payload: item });
	};

	return (
		<>
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className="space-y-8"
			>
				<div className="relative max-w-full">
					<img
						src={image}
						ref={imageRef}
						onClick={onClick}
						alt=""
						className={`postcard-img ${
							isHovered ? 'shadow-2xl' : ''
						} hover-transition`}
					/>

					<div className="config-btns-container">
						<button className="config-btns">
							<AiOutlineEdit className="w-5 h-5" /> <span>Edit</span>
						</button>

						<button onClick={() => handleDelete(item)} className="config-btns">
							<MdDeleteOutline className="w-5 h-5" /> <span>Delete</span>
						</button>
					</div>
				</div>

				<div className="space-y-5" onClick={onClick}>
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
