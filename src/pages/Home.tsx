import HighlightsList from '@components/HighlightsList';
import TopBlock from '@components/TopBlock';

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <HighlightsList />
      <TopBlock />
      
    </div>
  );
};
export default Home;
