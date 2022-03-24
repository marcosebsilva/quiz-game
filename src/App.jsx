import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Settings from './pages/Settings';
import Questions from './pages/Questions';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="settings" element={<Settings />} />
        <Route path="questions" element={<Questions />} />
      </Route>
    </Routes>
  )
}

export default App;
