import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Org from './components/org/Org';
import Footer from './components/footer/Footer';
import Effective from './screens/Effective';
import Easy from './screens/Easy';
import Consistent from './screens/Consistent';
import Resources from './screens/resources/Resources';
import Thanks from './screens/thanks/Thanks';
import GetaDemo from './screens/get_a_demo/GetaDemo';
import Leaders from './screens/leaders/Leaders';
import Vision from './screens/vision/Vision';
import SecurityDetail from './screens/securityDetail/SecurityDetail';
import DeveloperDetail from './screens/developerDetail/DeveloperDetail';

import './App.css';


function App() {
  return (
    <Router >
      <Header />
        <Route path='/' exact component={Org} />
        <Route path='/effective' component={Effective} />
        <Route path='/easy' component={Easy} />
        <Route path='/consistent' component={Consistent} />
        <Route path='/resources' component={Resources} />
        <Route path='/thanks' component={Thanks} />
        <Route path='/getademo' component={GetaDemo} />
        <Route path='/leaders' component={Leaders} />
        <Route path='/vision' component={Vision} />
        <Route path='/security-detail' component={SecurityDetail} />
        <Route path='/developer-detail' component={DeveloperDetail} />


      <Footer />
    </Router>
  );
}

export default App;
