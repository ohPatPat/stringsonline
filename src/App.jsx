import './App.scss';
import {Footer} from './components/footer/Footer.jsx';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { Forside } from './pages/Forside.jsx';
import { Salgs } from './pages/Salgs.jsx';
import { Login } from './pages/login/Login.jsx';
import { Fejl } from './pages/Fejl.jsx';


const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}


function App() {
  return (
    <>
    <Router>
    <Header></Header>

          <Routes>
            <Route index element={<Forside title={"Strings Online | Forside"} />} />
            <Route path="/Salgs" element={<Salgs title={"Strings Online | Salgs- og handelbetingelser"} />} />
            <Route path="/Login" element={<Login title={"Strings Online | Login"} />} />

            <Route path="*" element={<Fejl title={"Strings Online | Fejl"} />} />
          </Routes>
        </Router>


    <Footer></Footer>
    </>
  );
}

export default App;
