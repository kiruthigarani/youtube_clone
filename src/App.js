import './App.css';
import HeadComponent from './components/HeadComponent';
import BodyComponent from './components/BodyComponent';
import { Provider } from 'react-redux';
import toggleStore from './utils/toggleStore';

function App() {
  return (
    <Provider store={toggleStore}>
    <div className="App">
      <HeadComponent />
      <BodyComponent />
    </div>
    </Provider>
  );
}

export default App;
