import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'


function Navbar() {
	const [search, setSearch] = useState('')
	const navigate = useNavigate()

	function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
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

export default Navbar