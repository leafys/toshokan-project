import NavBar from '../../components/NavBar';
import { IHeader } from './Header.props';

const Index: React.FC<IHeader> = ({ routeItems, ...className }) => {
  return (
    <header {...className}>
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <a href="/">
          <img
            className="w-main-logo"
            src="images/logo.png"
            alt="header-logo"
          />
        </a>

        <NavBar className="flex items-center" routeItems={routeItems} />
      </div>
    </header>
  );
};

export default Index;
