import { provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './component/CakeContainer' ;

function App() {
  return (
    <provider store ={ store } >
    <div className="App">
     
      <CakeContainer/>
    </div>
    </provider>
  );
}

export default App;
 