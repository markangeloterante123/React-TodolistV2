import { FaTimes } from 'react-icons/fa'

import {FaEdit} from 'react-icons/fa'

const DisTask = ({ todo, onDelete, onToggle, showEditToggle, showEdit, darkmode  }) => {
	return (
		<div className={ `task ${todo.reminder ? 'reminder':'blur'} ${darkmode ? 'dark-task' : ''}` } onDoubleClick={()=> onToggle(todo.id)}>
			
			<h3> {todo.text} 
				{!todo.editMode && 
					<FaTimes 
						style={{color:'red', corsur:'pointer'}} 
						onClick={()=> onDelete(todo.id)}
					/>
				} 

			</h3>
			<p> {todo.date} </p>
			{!todo.editMode ? <FaEdit onClick={ ()=> showEditToggle(todo.id)}/> : 
		
			<button className="btn" style={{color:'red'}} onClick={ ()=> showEditToggle(todo.id)} title="CLOSED EDIT">Editing...</button>	
			}
	
		</div>
	)
}
export default DisTask