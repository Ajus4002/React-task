import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NoAnimationExample from './components/home'
function App() {
  return (
    <Router>
    <Routes>



<Route path="/" element={<NoAnimationExample/>} />
</Routes>
</Router>


  );
}

export default App;
