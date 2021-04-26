
import PropTypes from 'prop-types'

const Button = ({titleBtn, color, onClick}) => {
	return <button 
				onClick={onClick}
				style={{background:color}} 
				className="btn"
			> 
				{titleBtn} 
			</button>
}

//default set if there is no props
Button.defaultProps = {
	color: '#fff',
	titleBtn: "DEFAULT BTN"
}
Button.propTypes = {
	titleBtn: PropTypes.string.isRequired,
	onClick: PropTypes.func
}


export default Button