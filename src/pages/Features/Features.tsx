import './styles.scss';
import { Benefits } from './components/benefits';
import { FeaturesComponent } from './components/features/features';

export const Features: React.FC = () => {
  return (
    <>
      <div className="features">
        <h1>FEATURES</h1>
        <FeaturesComponent />
      </div>
      <Benefits />
    </>
  );
};
