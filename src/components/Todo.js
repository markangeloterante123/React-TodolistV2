
import DisTask from './DisTask'

const Todo = ({ list, onDelete, onToggle, showEditToggle, showEdit, darkmode }) => {
	return (
		<>
			{list.map ((todo) => (
				<DisTask 
					key={todo.id} 
					todo={todo} 
					onDelete={onDelete} 
					onToggle={onToggle}
					showEditToggle={showEditToggle}
					showEdit={showEdit}
					darkmode={darkmode}
				/>
			))}
		</>
	)
}

export default Todo