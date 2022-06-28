import NavBar from '@components/NavBar';
import { IDescHeader } from './DescHeader.props';

const DescHeader = ({ ...className }: IDescHeader): JSX.Element => {
  return (
    <header {...className}>
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <a href="/">
          <img className="w-main-logo" src="images/logo.png" alt="logo" />
        </a>

        <NavBar className="flex items-center" />
      </div>
    </header>
  );
};

export default DescHeader;
