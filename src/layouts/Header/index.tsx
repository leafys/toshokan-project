import NavBar from '@components/NavBar';
import { IHeader } from './Header.props';

const Header = ({ routeItems, ...className }: IHeader): JSX.Element => {
  return (
    <header {...className}>
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <a href="/">
          <img className="w-main-logo" src="images/logo.png" alt="logo" />
        </a>

        <NavBar className="flex items-center" routeItems={routeItems} />
      </div>
    </header>
  );
};

export default Header;
