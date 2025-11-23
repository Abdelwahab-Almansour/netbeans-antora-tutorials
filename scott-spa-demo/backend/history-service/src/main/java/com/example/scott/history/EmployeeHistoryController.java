package com.example.scott.history;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/history")
@CrossOrigin("*")
public class EmployeeHistoryController {

    private final EmployeeHistoryService service;

    public EmployeeHistoryController(EmployeeHistoryService service) {
        this.service = service;
    }

    @GetMapping("/by-employee/{empNo}")
    public List<EmployeeHistory> getByEmployee(@PathVariable Long empNo) {
        return service.findByEmployee(empNo);
    }

    @GetMapping("/timeline/{empNo}")
    public List<EmployeeHistory> timeline(@PathVariable Long empNo) {
        return service.timeline(empNo);
    }

    @PostMapping
    public ResponseEntity<EmployeeHistory> create(@RequestBody EmployeeHistory history) {
        EmployeeHistory saved = service.save(history);
        return ResponseEntity.created(URI.create("/api/history/" + saved.getId())).body(saved);
    }
}
