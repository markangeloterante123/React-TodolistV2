
import Header from '../../components/Header'

import Todo from '../../components/Todo'

import { useState } from 'react'

import Add from '../../components/AddList'

import Edit from '../../components/Edit'

const Index = () => {
	
	const [showAdd, setShowadd] = useState(false)

	const [showEdit, setShowEdit] = useState(false)

	//style for darkmode
	const [darkmode, setDarkMode] = useState(true)

	const [list, setList] = useState([
		{
			id:1,
			text:'Study Reactjs Fundimentals',
			date:'April 25',
			reminder:true,
			editMode:false
		},
		{
			id:2,
			text:'Study Reactjs useState, useEfect',
			date:'April 26',
			reminder:true,
			editMode:false
		},
		{
			id:3,
			text:'Study Reactjs Hooks',
			date:'April 27',
			reminder:true,
			editMode:false
		}
	])

	//will hold the id value of the list to be edit
	const [edit, setEdit] = useState({
		id:''
	})
	//adding list

	const addList = (listAdd) => {
		const id = Math.floor(Math.random() * 10000) + 1
		//add new list into list 
		//the list add are from the props of onAdd which contains of text, date, reminder
		const newList = {id, ...listAdd}
		setList([...list, newList])
	}

	//Delete Task filtering out ang laman
	const deleteList = (id) => {
		//the filter function will remove the array that will fail the test condition
		//in our case is  list.id !== id
		setList(list.filter((list) => list.id !== id))
	}
	//set the reminder
	const reminder = (id) => {
		//will map the array of list set the condition list.id === id
		//then update the list
		setList(list.map((list) => list.id === id ?
		{ ...list, reminder: !list.reminder } : list))
	}
	//set the edit mode
	//show edit
	const onShowEdit = (id) => {
		setList(list.map((list) => list.id === id ?
		{...list, editMode: !list.editMode}	: list))
		setEdit({id:id})
		setShowEdit(!showEdit)		
	}
	//save edit
	const saveEdit = (editList)=> {
		//check if there is same id with edit.id if true update the list id
		setList(list.map((list) => list.id === edit.id ?
		{...list, text: editList.text, date: editList.date  }	: list))
	}
	//set Darkmode into light or darkmode
	const toggleLight = () => {
		setDarkMode(!darkmode)		
	}

	return (
		<div className={`container ${darkmode ? 'darkmode':''} `}  >
			<Header 
				title="Todolist" 
				setDark={toggleLight} 
				showAdd={showAdd}
				showEdit={showEdit}  
				onShowAdd={() => setShowadd(!showAdd) } 
			/>

			{showAdd && 
				<Add 
					onAdd={addList} 
					darkmode={darkmode} 
				/>
			}

			{showEdit && 
				<Edit 
					darkmode={darkmode} 
					showEdit={showEdit} 
					edit={edit} 
					onEdit={saveEdit} 
				/> 
			}
			
			{list.length > 0 ? 
				<Todo 
					darkmode={darkmode} 
					list={list} 
					showEdit={showEdit} 
					showEditToggle={onShowEdit} 
					onDelete={deleteList} 
					onToggle={reminder} 
				/> :
					'No List to show'
			}

		</div>
	)
}

export default Index