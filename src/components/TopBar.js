import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import '../css/navbar.css'

function TopBar() {
    return <Navbar sticky='top' bg="light" expand="lg" style={{paddingRight: '20px', alignItems: 'center'}} >
<Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
    <img src="./assets/Navbar-image.png" alt="logo" height='25px' style={{verticalAlign: 'inherit'}} />
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
    <Nav className="mr-auto">
    </Nav>
    <Nav>
        <Nav.Link href="#LogIn" className='log-in' style={{textAlign: 'center'}}>Log In</Nav.Link>
        <button className="sign-up">Sign Up</button>
    </Nav>
</Navbar.Collapse>
</Navbar>
}
export default TopBar