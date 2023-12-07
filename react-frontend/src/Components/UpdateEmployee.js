import React from 'react'
import {useState,useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom'
import EmployeService from '../Services/EmployeService';
export default function UpdateEmployee() {
    let navigate = useNavigate();
    const[firstName , setFirstName] = useState("")
    const[lastName , setLastName] = useState("")
    const[email , setEmail] = useState("")
    const {id} = useParams();

    useEffect(()=>{
         EmployeService.getEmployeeById(id).then((res)=> {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
         }).catch(error=>{
            console.log('error');
         })
    },[])

    const updateHandler=(event)=>
    {
        event.preventDefault();
        const employee = {firstName,lastName,email}; 
        if(id){
            EmployeService.updateEmployee(id,employee,id).then(res=>{
             navigate('/employees');
            }); 
     }
     else{    
             EmployeService.createEmployee(employee).then(res=>
             {
             console.log(res.data);
             navigate('/employees');
 
         })
     }
    }
    const cancelHandler=()=>
    {
        navigate("/employees");
    }
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center">Update Employee</h3>
        <div className="card-body">
          <form>
            <div className="form-group my-2">
              <label>First Name:</label>
              <input placeholder="First Name" name="firstName" className="form-control"
                     value={firstName} onChange={(event)=> setFirstName(event.target.value)}/>
            </div>
            <div className="form-group my-2">
              <label>Last Name:</label>
              <input placeholder="Last Name" name="lastName" className="form-control"
                     value={lastName} onChange={(event)=> setLastName(event.target.value)}/>
            </div>

            <div className="form-group my-2">
              <label>Email:</label>
              <input placeholder="Email" name="email" className="form-control"
                     value={email} onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <button className='btn btn-success my-3 px-5 me-4' onClick={updateHandler}>save</button>
            <button className='btn btn-danger px-5 my-3' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
          </form>
         </div>
       </div>
     </div>  
  </div>
  )
}
