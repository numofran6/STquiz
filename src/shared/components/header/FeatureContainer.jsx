import { featureI } from '../../constants/assets';

export const FeatureContainer = () => {
	return (
		<div
			className="featured-container"
			style={{ backgroundImage: `url(${featureI})` }}
		>
			<div className="featured-info">
				<h4 className="text-xs">June 8, 2023</h4>
				<h4 className="font-semibold text-lg">
					If slaughterhouses had glass walls, everyone
				</h4>
			</div>
		</div>
	);
};
