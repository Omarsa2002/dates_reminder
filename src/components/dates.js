import Col from 'react-bootstrap/Col';

function dates(props) {
    return (
        <Col>
            <div className='d-flex border-bottom m-3' id={props.id}>
                <img className='avatar' src="download.jpg" alt='123'/>
                <div className="px-3">
                    <p className='d-inline fs-5'>{props.name}</p>
                    <p className='fs-7'>{props.time}</p>
                </div>
            </div>
        </Col>
    )
}

export default dates
