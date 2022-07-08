import CardsBlocks from '@components/CardsBlocks';
import HighlightsList from '@components/HighlightsList';
const Home = (): JSX.Element => {
  return (
    <div className="home container">
      <HighlightsList />
      <CardsBlocks />
    </div>
  );
};
export default Home;
