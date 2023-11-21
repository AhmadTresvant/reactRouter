import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <>
  <h1></h1>
  <div id="navbar">
    <Link to={'./blue'}>blue</Link>
    <Link to={'./red'}>red</Link>
    <Link to={'./yellow'}>yellow</Link>
    <Link to={'./green'}>green</Link>
    <Link to={'/'}>Home</Link>
  </div>
  </>
  )
}

export default NavBar