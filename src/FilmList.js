import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
export function FilmList() {
    const [film, setFilm] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch('https://localhost:7017/Film')
        .then((res) =>res.json())
        .then((filmek) => setFilm(filmek))
        .catch(console.log)
        .finally(()=>{
            setFetchPending(false);
        });
   }, []);
   return(
    <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Filmek</h2>
            {film.map((film) => (
                <div key={film.id} className='card col-sm-3 d-inline-block m-1 p-2'>
                        <h5 className='card-title'>{film.nev}</h5>
                        <NavLink to={`/filmek/${film.id}`}>
                        <div className='card-body'>
                            <img src={film.kepneve ? film.kepneve : 'https://via.placeholder.com/150'} className='img' />
                        </div>
                        </NavLink>
                        <br/>
                        <NavLink key={film.id + 1} to={"/mod-film/" + film.id}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                        </NavLink>
                        <NavLink key={film.id + 2} to={"/del-film/" + film.id} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                        </NavLink>
                    </div>
                
            ))}
        </div>
   )}
    </div>
   );
}