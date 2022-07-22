import Preloader from '@components/Preloader';
import React from 'react';
import AppRoutes from './router/AppRoutes';

const LocaleFrame = React.lazy(() => import('@layouts/LocaleFrame'));

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <AppRoutes />

        <React.Suspense fallback={<Preloader />}>
          <LocaleFrame />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
