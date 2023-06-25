import { featureI } from '../../constants/assets';

export const Highlight = () => {
	return (
		<div className="flex flex-col space-y-10">
			<img
				src={featureI}
				alt=""
				className="w-full h-[30rem] object-cover rounded-[2rem] bg-[#f7f8fb]"
			/>

			<div className="space-y-5 px-5">
				<h1 className="text-[#FF5A5A] text-xl font-semibold">Vegan World</h1>
				<h4 className="font-bold text-3xl">
					To my mind, the life of a lamb is no less precious than that of a
					human being.
				</h4>
			</div>
		</div>
	);
};
