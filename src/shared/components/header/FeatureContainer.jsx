export const FeatureContainer = ({ date, description, image }) => {
	return (
		<div
			className="featured-container"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="featured-info">
				<h4 className="text-xs">{date}</h4>
				<h4 className="font-semibold text-lg">{description}</h4>
			</div>
		</div>
	);
};
