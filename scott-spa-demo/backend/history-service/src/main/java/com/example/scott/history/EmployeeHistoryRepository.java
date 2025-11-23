package com.example.scott.history;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeHistoryRepository extends JpaRepository<EmployeeHistory, Long> {
    List<EmployeeHistory> findByEmpNoOrderByEffectiveDateDesc(Long empNo);
}
