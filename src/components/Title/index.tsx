import { ReactNode } from 'react'
import './style.css'

interface TitleProps {
    children: ReactNode
}

function Title(props: TitleProps) {
	return (
		<div className="titleContainer">
			<h1>
				{props.children}
			</h1>
		</div>
	)
}

export default Title