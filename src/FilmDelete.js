import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";

export function FilmDelete() {

    const navigate = useNavigate();
    const param = useParams();
    const id = param.filmId;
    const [film, setFilm] = useState([]);
    const [isPending, setPending] = useState(false);


    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`https://localhost:7017/Film/${id}`, { credentials: "include" });
                const data = await res.json();
                setFilm(data);
            } catch (error) {
                console.log(error);
            } finally {
                setPending(false);
            }
        })();
    }, [id]);
    return (
        <div className='p-5 content bg-lavender text-center'>
            {isPending || !film.id ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Film törlése</h2>
                    <div className='card p-3'>
                        <h5 className='card-title'>{film.name}</h5>
                        <img className='img-fluid rounded'
                            style={{ maxHeight: "500px" }}
                            src={film.kepneve ? film.kepneve : "https://via.placeholder.com/400x800"}
                        /></div>
                    <form onSubmit={async (e) => {
                        try {
                            e.preventDefault();
                            await fetch(`https://localhost:7017/Film/${id}`, {
                                method: "DELETE"
                            });
                            navigate("/");
                        }
                        catch (error) {
                            console.log(error);
                        };
                    }}>
                        <div>
                            <NavLink to={"/"}>
                                <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                            </NavLink>
                            <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                        </div>
                    </form>
                </div>
            )
            } </div>
    );
}