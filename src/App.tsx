import Header from '@layouts/Header';
import { IRouteObjectItems } from './App.props';
import MobTabHeader from './layouts/MobTabHeader';

function App() {
  const routeItems: IRouteObjectItems[] = [
    { title: 'Home', link: '/' },
    { title: 'Categories', link: '/' },
    { title: 'Random', link: '/' },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Header routeItems={routeItems} className="xl:hidden xl:flex-col" />
        <MobTabHeader routeItems={routeItems} className="hidden xl:block" />
      </div>
    </div>
  );
}

export default App;
