import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import facebook from '../images/facebook.png';
function NavScrollExample() {
	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid className='flex'>
				<Navbar.Brand href='#'>
					<img src={facebook} alt='facebook' className='fb_logo' />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll></Nav>
					<Form className='d-flex'>
						<Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
						<Button variant='outline-success'>Search </Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;
