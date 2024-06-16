import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Dates from './dates';
import { Link } from 'react-router-dom';
function DatesContainer() {
    const removeDates =()=>{
        localStorage.clear();
        document.querySelector('.dates-container').innerHTML = '';
    }
    const allDates = JSON.parse( localStorage.getItem('dates')) || [];
    const datesNumber = allDates.length;
    return (
        <Container className='m-5'>
            <Row className='justify-content-center'>
                <Col>
                    You have {datesNumber} dates 
                </Col>
            </Row>
            <Row className='dates-container justify-content-center my-2 p-3 d-block'>
                {
                    allDates.map((e, index)=>{
                        return(
                            <Dates id={index} name={e.name} time={e.time}/>
                        )
                    })
                }
            </Row>
            <Row className='justify-content-center my-2'>
                <Col className='d-flex justify-content-between'>
                    <Link to='add'>
                        <button className="add button-style p-2">Add date</button>
                    </Link>
                    <button className="delete button-style p-2" onClick={removeDates}>Delete All</button>
                </Col>
            </Row>
        </Container>
    );
}

export default DatesContainer;