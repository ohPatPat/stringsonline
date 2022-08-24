import './App.scss';
import {Footer} from './components/footer/Footer.jsx';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'


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
    <Header></Header>

    <Router>
          <Routes>
            <Route index element={<Home title={"Patia's workshop | Front page"} />} />
            <Route path="/aboutMe" element={<About title={"Patia's workshop | About me page"} />} />
            <Route path="/menu" element={<Menu title={"Patia's workshop | Inventory page"} />} />
            <Route path="/logos" element={<Logos title={"Patia's workshop | Logo commission page"} />} />
            <Route path="/overlays" element={<Overlays title={"Patia's workshop | Overlays commission page"} />} />
            <Route path="/schedules" element={<Schedules title={"Patia's workshop | Schedules commission page"} />} />
            <Route path="/tos" element={<TOS title={"Patia's workshop | TOS page"} />} />
            <Route path="*" element={<Error title={"Patia's workshop | lkjgljf page"} />} />
          </Routes>
        </Router>


    <Footer></Footer>
    </>
  );
}

export default App;
