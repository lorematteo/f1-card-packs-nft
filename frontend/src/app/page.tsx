import CollectionInfo from '@/features/collection-info';
import CreatorInfo from '@/features/creator-info';
import Header from '@/features/header';
import Sponsors from '@/features/sponsors';

const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <CollectionInfo />
      <CreatorInfo />
    </>
  );
};

export default Home;
