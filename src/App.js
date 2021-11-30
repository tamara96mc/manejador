import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
