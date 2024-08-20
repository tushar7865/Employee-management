package com.employee.employeemanagementbackend.service;

import java.util.List;
import java.util.Optional;

import com.employee.employeemanagementbackend.model.Employee;

public interface EmployeeServiceInterface {
public Employee	saveEmployee(Employee employee);
public Optional<Employee> getEmployeeId(int id);
List<Employee> getAllEmployees();
Employee updateEmployee(int id, Employee employee);
void deleteEmployee(int id);
}
