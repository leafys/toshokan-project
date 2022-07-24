import ReactDOM from 'react-dom/client';
import '@styles/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import '@plugins/i18n';
import { queryClient } from '@plugins';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const enableScroll = () => {
  document.body.style.overflow = 'unset';
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

window.disableScroll = disableScroll;
window.enableScroll = enableScroll;

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
