import {Link} from 'react-router-dom'
const Footer = ({onClick}) => {
  return (
    <div className="footer">
      <p>Made by <button onClick={onClick}>Reem</button></p>
    </div>
  
  )
}

export default Footer
