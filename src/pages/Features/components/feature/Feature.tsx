import { SearchOutlined } from '@ant-design/icons';
import { Card } from 'antd';

type FeatureProps = {
  title?: string;
  description?: string;
  isLoading?: boolean;
};

/**
 * Represents a feature component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @param {boolean} props.isLoading - Indicates whether the feature is loading.
 * @returns {JSX.Element} The rendered feature component.
 */
export const Feature = ({
  title = '',
  description = '',
  isLoading,
}: FeatureProps) => {
  return (
    <div
      className="features-card-container"
      onClick={() => {
        console.log('navigate to feature: ', title);
      }}
    >
      <Card
        className="features-card"
        cover={<FeatureCover />}
        loading={isLoading}
        title={title}
      >
        {description}
      </Card>
    </div>
  );
};

// TODO dynamically change the icon based on the feature
const FeatureCover = () => {
  return (
    <div className="custom-icon">
      <SearchOutlined
        color="#01478f"
        style={{
          position: 'relative',
          zIndex: 100,
          color: 'white',
          fontSize: '4em',
        }}
      />
    </div>
  );
};
