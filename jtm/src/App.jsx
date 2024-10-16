import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/AboutPage/AboutPage';
import Featured from './pages/Featured/Featured';
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/featured' element={<Featured/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
