import { useContainerHover } from '../../custom-hooks';
import './PostCard.css';

export const PostCard = ({
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
				<img
					src={image}
					ref={imageRef}
					alt=""
					className={`postcard-img ${
						isHovered ? 'shadow-2xl' : ''
					} hover-transition`}
				/>

				<div className="space-y-5">
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
		</>
	);
};
