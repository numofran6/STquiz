import { useContainerHover, useInAppNavigation } from '../../custom-hooks';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import './PostCard.css';
import { Button } from '@mui/material';

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
	const [showDeletePanel, setShowDeletePanel] = useState(false);
	const { handleEditPost } = useInAppNavigation();

	const handleDelete = () => {
		dispatch({ type: 'REMOVE_POST', payload: item });
		setShowDeletePanel(false);
	};

	return (
		<>
			<div
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className="space-y-8"
			>
				<div className="relative">
					<img
						src={image}
						ref={imageRef}
						onClick={onClick}
						alt=""
						className={`postcard-img ${
							isHovered ? 'shadow-2xl' : ''
						} hover-transition w-full`}
					/>

					<div className="config-btns-container">
						<button
							onClick={() => handleEditPost(item)}
							className="config-btns"
						>
							<AiOutlineEdit className="w-5 h-5" /> <span>Edit</span>
						</button>

						<button
							onClick={() => setShowDeletePanel(true)}
							className="config-btns"
						>
							<MdDeleteOutline className="w-5 h-5" /> <span>Delete</span>
						</button>
					</div>
				</div>

				<div className="space-y-5 overflow-hidden" onClick={onClick}>
					<h1 className="text-lg md:text-xl font-bold cursor-pointer">
						{title}
					</h1>

					<h2 className="text-sm text-gray-500">{description}</h2>

					<div className="text-xs">
						<h4 className="font-bold">{author} </h4>
						<h4>{date} </h4>
					</div>
				</div>
			</div>

			{showDeletePanel && (
				<div className="fixed inset-0 bg-white bg-opacity-90 z-50">
					<div className="flex flex-col h-full justify-center max-w-md mx-auto px-7">
						<div className="bg-gray-100 space-y-5 p-7 rounded-lg">
							<h4 className="font-semibold text-gray-900">
								This action is irreversible. Do you still want to continue?
							</h4>
							<div className="flex items-center justify-end space-x-5">
								<Button
									variant="outlined"
									onClick={() => setShowDeletePanel(false)}
								>
									Cancel
								</Button>
								<Button
									variant="contained"
									color="error"
									onClick={handleDelete}
									disableElevation
								>
									Delete
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
