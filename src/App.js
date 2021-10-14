import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import Materias from './pages/Materias';
import Calendar from './pages/Calendar';
import './components/Navbar.css'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Materia' exact component={Materias}/>
          <Route path='/Calendario' exact component={Calendar}/>
        </Switch>
      </Router>
    </div>
  );
}