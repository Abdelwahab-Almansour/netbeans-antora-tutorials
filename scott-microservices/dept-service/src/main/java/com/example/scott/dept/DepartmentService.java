package com.example.scott.dept;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public List<Department> findAll() {
        return repository.findAll();
    }

    public Department findById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Department save(Department department) {
        return repository.save(department);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
