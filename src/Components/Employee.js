import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Employee.css";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 
import Loader from 'react-loader-spinner';
import {FaUser} from "react-icons/fa";


function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
    }, [selectedEmployee]);

    if(!selectedEmployeeData){
        return <Loader type="ThreeDots" color="black" height={80} width={80} />;
    }

    const {
      name,
      startDate,
      role,
      department,
      photo,
    } = selectedEmployeeData;

    return <div>
        <h1 className="text-center my-3">Employee Information <FaUser/></h1>
            <Card style={{ width: '18rem' }} className = "text-center mx-auto border border-dark border-5 bg-light">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Below is the information regarding: <i>{name}</i>
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    <ListGroupItem className="color-1 text-light">Start Date: {startDate}</ListGroupItem>
                    <ListGroupItem className="color-2 text-light">Role: {role}</ListGroupItem>
                    <ListGroupItem className="color-3 text-light">Department: {department}</ListGroupItem>
                </ListGroup>

            </Card>
       
    </div>;
}

export default Employee;