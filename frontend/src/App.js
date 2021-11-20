
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Resources from './screens/resources/Resources';
import Thanks from './screens/thanks/Thanks';
import GetaDemo from './screens/get_a_demo/GetaDemo';
import HomePage from './screens/HomePage';
import './App.css';


function App() {

  return (
    <Router >
      
      <Header  />
        <Route path='/' exact component={HomePage} />
        <Route path='/resources' exact component={Resources} />
        <Route path='/thanks' exact component={Thanks} />
        <Route path='/getademo' exact component={GetaDemo} />
     
      <Footer />
    </Router>
  );
}

export default App;
