import HighlightsList from '@components/HighlightsList';
import SeasonsNowTitlesBlock from '@components/SeasonsNowTitlesBlock';
import TopBlock from '@components/TopCardsBlock';

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <HighlightsList />
      <TopBlock />
      <SeasonsNowTitlesBlock />
    </div>
  );
};
export default Home;
