package com.example.scott.dept;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {
    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public List<Department> findAll() {
        return repository.findAll();
    }

    public Optional<Department> findById(Long deptNo) {
        return repository.findById(deptNo);
    }

    public Department save(Department department) {
        return repository.save(department);
    }

    public Department update(Long deptNo, Department department) {
        return repository.findById(deptNo)
                .map(existing -> {
                    existing.setDeptName(department.getDeptName());
                    existing.setLocation(department.getLocation());
                    return repository.save(existing);
                })
                .orElseThrow(() -> new IllegalArgumentException("Department not found"));
    }

    public void delete(Long deptNo) {
        repository.deleteById(deptNo);
    }
}
