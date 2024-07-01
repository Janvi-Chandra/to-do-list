import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todolist" element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
