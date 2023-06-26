import { featureItems } from '../../utils/data';
import { FeatureContainer } from './FeatureContainer';
import { useInAppNavigation } from '../../custom-hooks';

export const FeaturedItems = () => {
	const { handlePostView } = useInAppNavigation();

	return (
		<div className="flex space-x-6 px-3">
			{featureItems.map((item, index) => (
				<div key={index} onClick={() => handlePostView(item)}>
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
