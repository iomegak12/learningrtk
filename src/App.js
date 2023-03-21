import { Provider } from 'react-redux';
import CounterComponent from './components/counter-component';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </>
  );
};

export default App;