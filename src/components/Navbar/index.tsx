import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi"
import './style.css'
import { useState } from "react";

interface NavbarProps {
    showSearch?: boolean
}

function Navbar(props: NavbarProps) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e: any) {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`)
    }

    return (
        <nav id="navbarContainer" className="navbarContainer">
            <h2>
                <Link to="/">MoviesApp</Link>
            </h2>
            {props.showSearch ?
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Busque um filme"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form> : <div></div>}
        </nav>
    )
}

export default Navbar;