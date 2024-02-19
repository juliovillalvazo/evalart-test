import { useBenefitsQuery } from '../../../../hooks/useBenefits';
import './styles.scss';

export const Benefits: React.FC = () => {
  const { data: benefits } = useBenefitsQuery();
  return (
    <section className="benefits">
      <div className="benefits-title">
        <h2>Benefits</h2>
      </div>
      {benefits?.map((benefit) => {
        return (
          <div className="benefits-item" key={benefit.title}>
            <h2 className="benefits-item-title">{benefit.title}</h2>
            <p className="benefits-item-description">{benefit.description}</p>
          </div>
        );
      })}
    </section>
  );
};
