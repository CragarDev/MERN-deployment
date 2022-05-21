import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Button',
  textColor: 'white'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
