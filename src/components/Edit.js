
import { useState } from 'react'

const Edit = ({ edit, onEdit, darkmode }) => {
	const [text, setText] = useState('')
	const [date, setDate] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		if(!text){
			alert('Please put some list')
			return
		}
		onEdit({ text, date})
		setText('')
		setDate('')
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>EDIT</label>
				<input 
					type="text"
					placeholder="Add Todolist"
					value={text}
					onChange={(e) => setText(e.target.value) }
				/>
			</div>
			<div className="form-control">
				<label>Date & Time</label>
				<input 
					type="text"
					placeholder="Date & Time"
					value={date}
					onChange={(e) => setDate(e.target.value) }	
				/>
			</div>
			<input className={`btn  btn-block ${darkmode ? 'darkBtn': ''}`} type="submit" value="Edit List" />
		</form>
	)
}

export default Edit