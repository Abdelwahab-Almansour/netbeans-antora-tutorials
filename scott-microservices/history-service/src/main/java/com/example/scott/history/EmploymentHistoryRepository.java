package com.example.scott.history;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmploymentHistoryRepository extends JpaRepository<EmploymentHistory, Long> {
    List<EmploymentHistory> findByEmployeeId(Long employeeId);
}
