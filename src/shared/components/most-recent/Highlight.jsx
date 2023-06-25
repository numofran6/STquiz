import { useContainerHover } from '../../custom-hooks';

export const Highlight = ({ img, title, description }) => {
	const { imageRef, handleMouseOut, handleMouseOver, isHovered } =
		useContainerHover();

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className="flex flex-col space-y-10 hover:cursor-pointer"
		>
			<img
				src={img}
				ref={imageRef}
				alt=""
				className={`w-full h-[30rem] object-cover rounded-[3rem] bg-[#f7f8fb] hover-transition ${
					isHovered ? 'shadow-2xl' : ''
				}`}
			/>

			<div className="space-y-5 px-5">
				<h1 className="text-[#FF5A5A] text-xl font-semibold">{title} </h1>
				<h4 className="font-bold text-3xl">{description}</h4>
			</div>
		</div>
	);
};
