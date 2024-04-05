
import './App.css';
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route  path='/' element={<TaskManager />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
