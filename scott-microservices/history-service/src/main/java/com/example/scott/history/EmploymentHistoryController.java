package com.example.scott.history;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/history")
public class EmploymentHistoryController {

    private final EmploymentHistoryService service;

    public EmploymentHistoryController(EmploymentHistoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<EmploymentHistory> all() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public EmploymentHistory byId(@PathVariable Long id) {
        return service.findById(id);
    }

    @GetMapping("/employee/{employeeId}")
    public List<EmploymentHistory> byEmployee(@PathVariable Long employeeId) {
        return service.findByEmployee(employeeId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EmploymentHistory create(@RequestBody EmploymentHistory history) {
        return service.save(history);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
