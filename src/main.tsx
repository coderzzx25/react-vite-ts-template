import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import App from '@/App.tsx';
import store from '@/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </HashRouter>
  </Provider>
);
