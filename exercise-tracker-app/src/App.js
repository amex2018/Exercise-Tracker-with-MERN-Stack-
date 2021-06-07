
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Exerciselist from './component/Exercise_list';
import CreateExercise from './component/Create_exercise';
import CreateUser from './component/Create_user';
import EditExercise from './component/Edit_exercise';

function App() {
  return (
    <Router>
   <div className="contianer">
       <Navbar/>
       
       <Route path='/' exact component={Exerciselist} />      
       <Route path='/update/:id' exact component={EditExercise} />   
       <Route path='/create_user' exact component={CreateUser} />  
       <Route path='/create_exercise' exact component={CreateExercise} />  
   </div>
    </Router>
 
  );
}

export default App;
