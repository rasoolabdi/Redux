import { Provider } from 'react-redux';
import './App.css'
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import MilkContainer from './components/MilkContainer';

function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
    </Provider>
  )
};
export default App;
