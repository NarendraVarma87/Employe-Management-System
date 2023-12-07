import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeService from '../Services/EmployeService';
export default function AddEmployee() {
  let navigate = useNavigate();
const [employee,setEmployee] = useState(
{
  firstName : "" ,
  lastName : "",
  email : "",
})
  const handleClick=(event)=>
  {
     const name=event.target.name;
     const value=event.target.value;
     setEmployee({...employee,[name] : value});
  }

  const saveHandler=(e)=>
  {
      e.preventDefault();
      console.log("employee =>"+JSON.stringify(employee));
      EmployeService.createEmployee(employee).then( res => 
        {navigate('/employees')}
      )
     
  }
 const cancelHandler=()=>
 {
     navigate('/employees');
 }
  return (
    <div className='card'>
      <form className="card-body">
        <div className="form-group">
        <h2>Add Employe Details</h2>
        <label className="my-2">Enter First Name : </label>
        <input type="text" placeholder='FirstName' className='form-control' name="firstName" value={employee.firstName} onChange={handleClick}/> <br></br>
        <label className="mb-2">Enter Last Name : </label>
        <input type="text" className='form-control' placeholder='LastName' name="lastName" value={employee.lastName} onChange={handleClick}/> <br></br>
        <label className="mb-2">Enter Email : </label>
        <input type="email" className='form-control' placeholder='Email Address' name="email" value={employee.email} onChange={handleClick}/> <br></br>
        <input type="submit" value="save" onClick={saveHandler} className='mx-3 bg-success rounded-1 px-4'/>
        <input type="submit" value="cancel" onClick={cancelHandler} className='mx-3 bg-danger rounded-1 px-3'/>
        </div>
      </form>
    </div>
  )
}
