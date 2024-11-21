import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import HorrorMovie from './components/HorrorMovie';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />} >
               <Route path="about" element={<About/>} />
               <Route path="horror_movie/:id" element={<HorrorMovie />} />
               <Route path="home" element={<Home/>} />
              </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
