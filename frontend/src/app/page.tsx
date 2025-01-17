import CollectionInfo from '@/features/collection-info';
import CreatorInfo from '@/features/creator-info';
import CTA from '@/features/cta';
import Header from '@/features/header';
import Sponsors from '@/features/sponsors';

const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <CollectionInfo />
      <CreatorInfo />
      <CTA />
    </>
  );
};

export default Home;
