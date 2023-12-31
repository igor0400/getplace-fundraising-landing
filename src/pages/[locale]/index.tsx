import { PageWrapper } from '../../shared';
import Features from '../../widgets/home-page/Features';
import Packages from '../../widgets/home-page/Packages';
import Roadmap from '../../widgets/home-page/Roadmap';
import Screens from '../../widgets/home-page/Screens';
import Title from '../../widgets/home-page/Title';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Features />
      <Screens />
      <Roadmap />
      <Packages />
    </PageWrapper>
  );
}
