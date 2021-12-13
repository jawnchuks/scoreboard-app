import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import News from './pages/News/News';
import Downloads from './pages/Downloads/Downloads';
import NotFound from './pages/404/NotFound';
import Navbar from './components/Navbar/Navbar';
import ScrollTop from './components/ScrollTop/ScrollTop'




function App() {
  return (
    <BrowserRouter >
    <Navbar />
    <ScrollTop />
    <Routes >
      <Route path="/*" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/news" element={<News />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route element={<NotFound />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
