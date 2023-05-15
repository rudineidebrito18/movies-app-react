import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi"
import './style.css'
import { useState } from "react";


function Navbar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e: any) {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`)
    }

    return (
        <div className="navbarBox">
            <nav id="navbarContainer" className="navbarContainer">
                <h2>
                    <Link to="/">MoviesApp</Link>
                </h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Busque um filme"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar;