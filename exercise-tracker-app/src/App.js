
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Exerciselist from './component/Exercise_list';
function App() {
  return (
    <Router>
   <div className="contianer">
       <Navbar/>
       
       <Route path='/' exact component={Exerciselist} />      
       {/* <Route path='/' exact component={Exerciselist} />    */}
   </div>
    </Router>
 
  );
}

export default App;
