import { IObjectInterface } from '../../components/NavBar/NavBar.props';
import NavBar from '../../components/NavBar';

const Index: React.FC<{ className: string }> = ({ ...className }) => {
  const linkItems: IObjectInterface[] = [
    { title: 'Home', link: '/' },
    { title: 'Categories', link: '/' },
    { title: 'Random', link: '/' },
  ];

  return (
    <header {...className}>
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <a href="/">
          <img className="max-w-logo" src="/logo.png" alt="header-logo" />
        </a>

        <NavBar className="flex items-center" linkItems={linkItems} />
      </div>
    </header>
  );
};

export default Index;
