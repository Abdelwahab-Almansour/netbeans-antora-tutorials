package com.example.scott.emp;

import org.springframework.stereotype.Service;

import java.util.DoubleSummaryStatistics;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> findAll() {
        return repository.findAll();
    }

    public Optional<Employee> findById(Long empNo) {
        return repository.findById(empNo);
    }

    public List<Employee> findByDept(Long deptNo) {
        return repository.findByDeptNo(deptNo);
    }

    public Employee save(Employee employee) {
        return repository.save(employee);
    }

    public Employee update(Long empNo, Employee employee) {
        return repository.findById(empNo)
                .map(existing -> {
                    existing.setName(employee.getName());
                    existing.setJob(employee.getJob());
                    existing.setSalary(employee.getSalary());
                    existing.setDeptNo(employee.getDeptNo());
                    existing.setHireDate(employee.getHireDate());
                    return repository.save(existing);
                })
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
    }

    public Map<Long, DoubleSummaryStatistics> departmentSalaryStats() {
        return repository.findAll().stream()
                .collect(Collectors.groupingBy(Employee::getDeptNo,
                        Collectors.summarizingDouble(emp -> emp.getSalary() == null ? 0.0 : emp.getSalary())));
    }
}
