package com.example.scott.history;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmploymentHistoryService {

    private final EmploymentHistoryRepository repository;

    public EmploymentHistoryService(EmploymentHistoryRepository repository) {
        this.repository = repository;
    }

    public List<EmploymentHistory> findAll() {
        return repository.findAll();
    }

    public EmploymentHistory findById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public List<EmploymentHistory> findByEmployee(Long employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    public EmploymentHistory save(EmploymentHistory history) {
        return repository.save(history);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
