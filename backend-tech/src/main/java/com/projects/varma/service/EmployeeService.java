package com.projects.varma.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.projects.varma.exception.ResourceNotFound;
import com.projects.varma.model.Employee;
import com.projects.varma.repo.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
}
	public Employee getEmployeeById(Long id) {
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Id Not Found"));
	}
	public ResponseEntity<Employee> updateEmployee(Long id ,Employee employee) {
		Employee emp = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFound("Employee Does not Exist"));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		Employee updateEmp = employeeRepository.save(emp);
		return ResponseEntity.ok(updateEmp);
		
	}
	public ResponseEntity<HttpStatus> deleteEmployee(Long id){
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFound("Employee Does not Exit"));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
