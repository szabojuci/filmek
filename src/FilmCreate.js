import { useNavigate } from 'react-router-dom';

export function FilmCreate() {
    const navigate = useNavigate();

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Film hozzáadása</h2>
            <form
                onSubmit={(e) => {
                    e.persist();
                    e.preventDefault();
                    fetch('https://localhost:7017/Film', {
                        method: 'POST',
                        body: JSON.stringify({
                            nev: e.target.elements.nev.value,
                            kepneve: e.target.elements.kepneve.value,
                        }),
                    })
                        .then(() => {
                            navigate('/');
                        })
                        .catch(console.log);
                }}
            > <div className='form-group row pb-3'>
                    <div><label htmlFor="nev" className='col-sm-3 col-form-label'> Név: </label>
                        <input type="text" id="nev" name="nev" className="form-control"  autoComplete="off" />
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
                        <input type="text" id="kepneve" name="kepneve" className="form-control"  autoComplete="off" />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        </div>
    );
}