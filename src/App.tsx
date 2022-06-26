import Header from './layouts/Header';
import MobTabHeader from './layouts/MobTabHeader';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header className="xl:hidden" />
        <MobTabHeader className="hidden xl:block" />
      </div>
    </div>
  );
}

export default App;
