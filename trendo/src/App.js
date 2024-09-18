import './App.css';
import Layout from './components/Layout';
import Frontpage from './pages/Frontpage';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Frontpage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;