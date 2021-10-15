import './App.css';
import {Helmet} from "react-helmet";
import Home from './components/screens/Home';

function App() {
   return <>
    <Helmet>
      <title>Steyp</title>
    </Helmet>
    <Home />
   </>
}

export default App;
