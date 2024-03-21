import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function FilmMod() {
    const param = useParams();
    const navigate = useNavigate();
    const id = param.filmId;
    const [, setFilm] = useState([]);
    const [modname, setModname] = useState("");
    const [modImage, setModimage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://localhost:7017/Film/${id}`);
                const data = await res.json();
                setFilm(data);
                setModname(data.nev);
                setModimage(data.kepneve);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id, modname, modImage]);
    const modName = (e) => {
        setModname(e.target.value);
    }
    const modimage = (e) => {
        setModimage(e.target.value);
    }
    return (
        <div className='p-5 content bg-lavender text-center'>
            <h2>Film módosítás</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetch(`https://localhost:7017/Film/${id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                            nev: e.target.elements.nev.value,
                            kepneve: e.target.elements.kepneve.value,
                        }),
                    })
                        .then(() => {
                            navigate("/");
                        })
                        .catch(console.log);
                }}
            >
                <div className='form-group row pb-3'>
                    <div><label htmlFor="nev" className='col-sm-3 col-form-label'> Név: </label>
                        <input type="text" id="nev" name="nev" className="form-control" defaultValue={modName} onChange={modName} autoComplete="off" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <div><label htmlFor="kiadasEve" className='col-sm-3 col-form-label'> Kiadás éve: </label>
                        <input type="text" id="kiadasEve" name="KiadasEve" className="form-control" autoComplete="off" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <div><label htmlFor="ertekeles" className='col-sm-3 col-form-label'> Értékelés </label>
                        <input type="text" id="ertekeles" name="ertekeles" className="form-control" autoComplete="off" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <div><label htmlFor="kepneve" className='col-sm-3 col-form-label'> Kép neve: </label>
                        <input type="text" id="kepneve" name="kepneve" className="form-control" defaultValue={modImage} onChange={modimage} autoComplete="off" />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        </div>
    );
}   