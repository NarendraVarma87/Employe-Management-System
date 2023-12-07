import React from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
import {useState,useEffect} from "react"
import EmployeService from '../Services/EmployeService'
export default function ListEmployee() {
    const [employees , setEmployees] = useState([])
    //const EMPLOYE_API_URL = "http://localhost:9698/api/data/employees";
    useEffect(()=> {
        axios.get("http://localhost:9698/api/data/employees").then(
            response => setEmployees(response.data)
        )
    },[])

    const deleteHandler=(employeeId)=>{
        EmployeService.deleteEmployee(employeeId).then(res => {
            EmployeService.getEmployees().then(res => {
                setEmployees({employees : res.date})
            })
        }).catch(error=>
            {
                console.log(error);
            })
    }
    
  return (
    
    <div>
         <Link to="/add-employee" className='btn btn-primary my-4 w-25'>Add Employee</Link>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee)=> <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td><Link to={"/update-employee/"+employee.id} className="btn btn-info mx-3" >Update</Link>
                        <button onClick={()=>deleteHandler(employee.id)} className="btn btn-danger mx-3">Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
