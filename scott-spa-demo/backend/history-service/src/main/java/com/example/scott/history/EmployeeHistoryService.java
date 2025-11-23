package com.example.scott.history;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeHistoryService {
    private final EmployeeHistoryRepository repository;

    public EmployeeHistoryService(EmployeeHistoryRepository repository) {
        this.repository = repository;
    }

    public List<EmployeeHistory> findByEmployee(Long empNo) {
        return repository.findByEmpNoOrderByEffectiveDateDesc(empNo);
    }

    public List<EmployeeHistory> timeline(Long empNo) {
        return repository.findByEmpNoOrderByEffectiveDateDesc(empNo);
    }

    public EmployeeHistory save(EmployeeHistory history) {
        return repository.save(history);
    }
}
