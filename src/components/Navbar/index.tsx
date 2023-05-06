import { Link } from "react-router-dom";
import './style.css'
import { BiSearchAlt2 } from "react-icons/bi"
import { useEffect, useState } from "react";

const root = document.getElementsByTagName("html")[0];

function Navbar() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            root?.classList.remove("light")
            root?.classList.add("dark")
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            root?.classList.remove("dark")
            root?.classList.add("light")
            setTheme("light");
        }
    }
    
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
        localTheme && root?.classList.add(localTheme)
    }, [])

    return (
        <nav id="navbarContainer" className="navbarContainer">
            <h2>
                <Link to="/">MoviesApp</Link>
            </h2>
            <button onClick={toggleTheme} >trocar theme</button>
            <form>
                <input type="text" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
}

export default Navbar;