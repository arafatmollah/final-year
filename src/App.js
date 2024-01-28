import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import { Dashboard } from './Componets/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
          
    </div>
  );
}

export default App;
