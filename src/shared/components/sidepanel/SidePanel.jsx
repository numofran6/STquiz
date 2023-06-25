import { useContainerHover } from '../../custom-hooks';

export const SidePanel = ({ title, description, image }) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className="flex items-center space-x-6  hover:cursor-pointer"
		>
			<img
				src={image}
				ref={imageRef}
				alt=""
				className={`w-[11.5rem] h-[9.5rem] object-cover rounded-[2rem] bg-[#f7f8fb] ${
					isHovered ? 'shadow-2xl' : ''
				} hover-transition`}
			/>

			<div className="space-y-5">
				<h1 className="text-[#FF5A5A] text-[1.35rem] font-bold">{title}</h1>
				<h4 className="font-semibold">{description}</h4>
			</div>
		</div>
	);
};
