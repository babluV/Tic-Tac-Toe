// import logo from './logo.svg';
import './App.css';

import { Route,Routes} from 'react-router-dom'


import DisplayGame from './componentDisplay/DisplayGame'
import StartPg from './start_pg_component/StartPg';

function App() {
  return (
    <div className="App">
       
      
      <Routes>
  
      <Route  path="/" element={<StartPg/>}/>
         <Route  path="/game" element={<DisplayGame/>}/>
         
      </Routes>
      
     
    </div>
  );
}

export default App;
