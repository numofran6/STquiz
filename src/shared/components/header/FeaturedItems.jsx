import { featureItems } from '../../utils/data';
import { FeatureContainer } from './FeatureContainer';

export const FeaturedItems = () => {
	return (
		<div className="flex space-x-6 px-3">
			{featureItems.map((item, index) => (
				<div key={index}>
					<FeatureContainer
						image={item.img}
						description={item.description}
						date={item.date}
					/>
				</div>
			))}
		</div>
	);
};
