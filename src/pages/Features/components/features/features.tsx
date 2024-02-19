import { Carousel } from 'antd';
import { Feature } from '../feature';
import { useFeaturesQuery } from '../../../../hooks/useFeatures';

export const FeaturesComponent = () => {
  const { data: featuresData, isLoading } = useFeaturesQuery();
  return (
    <div className="features-carousel">
      <Carousel autoplay>
        {featuresData?.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
        {isLoading && <Feature isLoading />}
      </Carousel>
    </div>
  );
};
