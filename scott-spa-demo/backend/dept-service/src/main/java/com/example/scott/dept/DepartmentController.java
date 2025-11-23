package com.example.scott.dept;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin("*")
public class DepartmentController {

    private final DepartmentService service;

    public DepartmentController(DepartmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Department> getAll() {
        return service.findAll();
    }

    @GetMapping("/{deptNo}")
    public ResponseEntity<Department> getById(@PathVariable Long deptNo) {
        return service.findById(deptNo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Department> create(@RequestBody Department department) {
        Department saved = service.save(department);
        return ResponseEntity.created(URI.create("/api/departments/" + saved.getDeptNo())).body(saved);
    }

    @PutMapping("/{deptNo}")
    public ResponseEntity<Department> update(@PathVariable Long deptNo, @RequestBody Department department) {
        return ResponseEntity.ok(service.update(deptNo, department));
    }

    @DeleteMapping("/{deptNo}")
    public ResponseEntity<Void> delete(@PathVariable Long deptNo) {
        service.delete(deptNo);
        return ResponseEntity.noContent().build();
    }
}
