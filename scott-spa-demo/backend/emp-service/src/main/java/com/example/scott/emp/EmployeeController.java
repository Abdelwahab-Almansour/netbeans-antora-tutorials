package com.example.scott.emp;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employee> getAll() {
        return service.findAll();
    }

    @GetMapping("/{empNo}")
    public ResponseEntity<Employee> getById(@PathVariable Long empNo) {
        return service.findById(empNo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/by-department/{deptNo}")
    public List<Employee> getByDepartment(@PathVariable Long deptNo) {
        return service.findByDept(deptNo);
    }

    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody Employee employee) {
        Employee saved = service.save(employee);
        return ResponseEntity.created(URI.create("/api/employees/" + saved.getEmpNo())).body(saved);
    }

    @PutMapping("/{empNo}")
    public ResponseEntity<Employee> update(@PathVariable Long empNo, @RequestBody Employee employee) {
        return ResponseEntity.ok(service.update(empNo, employee));
    }

    @GetMapping("/departments/stats")
    public Map<Long, ?> departmentStats() {
        return service.departmentSalaryStats();
    }
}
