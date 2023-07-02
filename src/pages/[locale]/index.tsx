import { PageWrapper } from '../../shared';
import Features from '../../widgets/home-page/Features';
import SpecialFeatures from '../../widgets/home-page/SpecialFeatures';
import Title from '../../widgets/home-page/Title';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Features />
      <SpecialFeatures />
    </PageWrapper>
  );
}
