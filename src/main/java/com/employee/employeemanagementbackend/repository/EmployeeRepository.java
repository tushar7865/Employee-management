package com.employee.employeemanagementbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.employeemanagementbackend.model.Employee;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Integer>{

}
