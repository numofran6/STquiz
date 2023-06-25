import { featureI } from '../../constants/assets';

export const SidePanel = () => {
	return (
		<div className="flex items-center space-x-6">
			<img
				src={featureI}
				alt=""
				className="w-[11.5rem] h-[9.5rem] object-cover rounded-[2rem] bg-[#f7f8fb]"
			/>

			<div className="space-y-5">
				<h1 className="text-[#FF5A5A] text-[1.35rem] font-bold">Recipes</h1>
				<h4 className="font-semibold">
					For as long as men massacre animals, they will kill each other.
					Indeed.
				</h4>
			</div>
		</div>
	);
};
