
import { useState } from 'react'

const Addlist = ({ onAdd, darkmode }) => {
	
	const [text, setText] = useState('')
	const [date, setDate] = useState('')
	const [reminder, setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()

		if(!text){
			alert('Please put some list')
			return
		}

		onAdd({ text, date, reminder })

		setText('')
		setDate('')
		setReminder(false)

	}


	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Todolist</label>
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
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input 
					type="checkbox"
					checked={reminder}	
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked) }
				/>
			</div>
			<input className={`btn  btn-block ${darkmode ? 'darkBtn': ''}`} type="submit" value="Save List" />
		</form>
	)
}

export default Addlist