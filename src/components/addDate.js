import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function addDate() {
    const add = ()=>{
        const name = document.querySelector('input.name')
        const time = document.querySelector('input.time')
        let allDates = JSON.parse( localStorage.getItem('dates'))|| [];
        allDates.push({name: name.value, time: time.value});
        localStorage.setItem("dates", JSON.stringify(allDates))
        window.location.pathname = '/';
    }
    return (
        <div>
            <Container className='m-5 '>
                <Row className=' m-2 dates-container d-block '>
                    <Col className=' d-flex justify-content-center h-50'>
                        <label className='name'>Enter name</label> 
                        <input name='name' className='name'/>
                    </Col>
                    <Col className=' d-flex justify-content-center h-50'>
                        <label className=''>Enter date</label> 
                        <input name='time' type='date' className='time'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center '>
                        <button className="add button-style p-2" onClick={add}>Add date</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default addDate
