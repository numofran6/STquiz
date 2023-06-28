import { useContainerHover } from '../../custom-hooks';

export const SidePanel = ({
	title,
	description,
	image,
	onClick = () => {},
}) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={onClick}
			className="flex items-center space-x-4 md:space-x-6 hover:cursor-pointer"
		>
			<img
				src={image}
				ref={imageRef}
				loading="lazy"
				alt=""
				className={`w-[8.5rem] h-[7.5rem] md:w-[11.5rem] md:h-[9.5rem] object-cover rounded-[2rem] bg-[#EFEFEF] ${
					isHovered ? 'shadow-2xl' : ''
				} hover-transition`}
			/>

			<div className="space-y-5">
				<h1 className="text-[#FF5A5A] md:text-[1.35rem] font-bold">{title}</h1>
				<h4 className="text-sm md:text-[16px] font-semibold">{description}</h4>
			</div>
		</div>
	);
};
