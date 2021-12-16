import axios from "axios";
import { useState, useEffect } from 'react';
import Employee from "./Employee";
import Button from 'react-bootstrap/Button';
import "./Employees.css";
import Loader from 'react-loader-spinner';
import {BiChevronsLeft} from "react-icons/bi";
import {FiPaperclip} from "react-icons/fi";
import {MdPeopleAlt} from "react-icons/md";


function Employees(){

    const [EmployeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees,[]);

    function getEmployees(){
        axios.get('http://statenweb.mockable.io/employees').then(function(response){
            setEmployeeData(response.data);
        });
    }  

    function getEmployeeById(id){
        setSelectedEmployee(id);
    }

    if(EmployeeData.length === 0) {
        return <Loader type="ThreeDots" color="black" height={80} width={80} />;
        
    }

    if(selectedEmployee){
        return <div>
            <Employee selectedEmployee={selectedEmployee} />
            <Button variant="dark mx-2" className="btn" onClick={() => setSelectedEmployee(null)}><BiChevronsLeft/>  Return</Button>
        </div>;
    }

    return <div>
        <h1 className="ms-2"><b>Dunder Mifflin, Inc   <FiPaperclip/></b></h1>
        <div className="m-3 text-center">
        <img className= "mx-auto d-block" src="https://csc225.matgargano.com/app/uploads/2020/03/Dunder_Mifflin_Inc.svg"
            alt="Dunder Mifflin Inc, Paper Company"/>
        <h2 className="m-3">Employee Directory<MdPeopleAlt/></h2>
        {EmployeeData.map((employee) => <p key={employee.id}><Button variant="dark border border-dark border-3 ms-3" onClick={() => getEmployeeById(employee.id)}>{employee.name} - {employee.department}</Button></p>)}
        </div>
    </div>;
}

export default Employees;