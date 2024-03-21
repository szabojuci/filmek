import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { FilmList } from "./FilmList";
import { FilmSingle } from "./FilmSingle";
import { FilmCreate } from "./FilmCreate";
import { FilmMod } from "./FilmMod";
import { FilmDelete } from "./FilmDelete";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
         <li className="nav-item">
        <NavLink to={`/`} className="nav-link">
           <span className="nav-link">Filmek</span>
           </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to={`/uj-film`} className="nav-link">
           <span className="nav-link">Új film</span>
           </NavLink>
         </li>
       </ul>
     </div>
     </nav>
     <Routes>
       <Route path="/" element={<FilmList />} />
       <Route path="/filmek/:filmId" element={<FilmSingle />} />
       <Route path="/uj-film" element={<FilmCreate />} />
       <Route path="/mod-film/:filmId" element={<FilmMod />} />
       <Route path="/del-film/:filmId" element={<FilmDelete />} />
     </Routes>
 </Router>
  );
}

export default App;
