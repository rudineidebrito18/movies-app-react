import { ReactNode } from 'react'
import './style.css'

interface AreaProps {
    children: ReactNode,
    id?: string
}

function Area(props: AreaProps) {
	return ( 
		<div id={props.id ?? ''} className="areaContainer">
			<div className="area">
				{props.children}
			</div>

		</div>
	)
}

export default Area