import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";

export function FilmSingle() {

    const param = useParams();
    const id = param.filmId;
    const [film, setFilm] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try{
                const res = await fetch(`https://localhost:7017/Film/${id}`);
                const data = await res.json();
                setFilm(data);
            }catch(error){
                console.log(error);
            }
            finally{
                setPending(false);
            }
        })();
    },[id]);
    return (
        <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !film.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <h5 className='card-title'>{film.nev}</h5>
                    <h6 className='card-title'>Kiadás éve: {film.kiadasEve}</h6>
                    <h6 className='card-title'>Értékelés: {film.ertekeles}</h6>
                    <NavLink  to={"/"}>
                        <img
                        style={{ maxHeight: "900px", maxWidth: "100%" }}
                        src={film.kepneve ? film.kepneve : "https://via.placeholder.com/400x800"}
                        /></NavLink>
                </div>
                
    )
}</div>
    );
}