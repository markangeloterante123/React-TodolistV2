import PropTypes from 'prop-types'

import Button from './Button'

import {FaMoon} from 'react-icons/fa'

const Header = ({ title, onShowAdd, showAdd, setDark, showEdit }) => {
	return (
		<header className="header" >
			{ title }
			<div>
				{ !showEdit &&
					<Button 
						color={showAdd ? "red" : "green"} titleBtn={showAdd ? "Closed" : "Add"} 
						onClick={onShowAdd} 
					/> 
				}
				<FaMoon 
					style={{marginLeft:'10px'}} 
					onClick={setDark} 
				/>

			</div>
		</header>
	)
}

Header.defaultProps = {
	title: 'Todolist Default',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

//<header style ={darkmode}>{title}</header>
// const darkmode = {
// 	background: '#000',
// 	color: '#fff'
// }


export default Header
