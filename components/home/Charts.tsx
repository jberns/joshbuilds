import { ChartBarIcon } from '@heroicons/react/solid';
import { BigText, Caption, IconContainer } from '../utils';
import { gradients } from '../utils/gradients';

export const Charts = () => {
  return (
    <section id="charts">
      <div className="px-4 mb-10 sm:px-6 md:px-8 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.orange[0]} mb-8`}>
          <ChartBarIcon className="w-8 h-8 text-orange-100" />
        </IconContainer>
        <Caption as="h2" className="mb-3 text-orange-600">
          Chart Anything
        </Caption>
        <BigText className="mb-8">Visualize and Distribute data</BigText>
      </div>
    </section>
  );
};
