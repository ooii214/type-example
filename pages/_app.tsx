// pages/_app.tsx

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';
const store = createStore(rootReducer);
console.log('스토어', store);
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default App;
