import Account from '@/features/account';
import CollectionInfo from '@/features/collection-info';
import CreatorInfo from '@/features/creator-info';
import CTA from '@/features/cta';
import Footer from '@/features/footer';
import Header from '@/features/header';
import Sponsors from '@/features/sponsors';

const Home = () => {
  return (
    <>
      <Account />
      <Header />
      <Sponsors />
      <CollectionInfo />
      <CreatorInfo />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
