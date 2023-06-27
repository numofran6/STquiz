import { useContainerHover } from '../../custom-hooks';

export const Highlight = ({ img, title, description, onClick = () => {} }) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className="flex flex-col space-y-10 hover:cursor-pointer"
			onClick={onClick}
		>
			<img
				src={img}
				ref={imageRef}
				alt=""
				loading="lazy"
				className={`w-full h-[20rem] md:h-[30rem] object-cover rounded-[3rem] bg-[#f2f4f5c5] hover-transition ${
					isHovered ? 'shadow-2xl' : ''
				}`}
			/>

			<div className="space-y-5 px-5">
				<h1 className="text-[#FF5A5A] text-xl font-semibold">{title} </h1>
				<h4 className="font-bold text-lg md:text-3xl">{description}</h4>
			</div>
		</div>
	);
};
