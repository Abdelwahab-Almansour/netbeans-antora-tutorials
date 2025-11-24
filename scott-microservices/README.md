# Scott Microservices Snapshot

This snapshot contains three Spring Boot microservices with H2-backed persistence.

## Modules
- `dept-service` — department data
- `emp-service` — employee data
- `history-service` — employment history records

## Folder Tree
```
scott-microservices/
├── pom.xml
├── README.md
├── dept-service/
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/example/scott/dept/
│       │   ├── DeptServiceApplication.java
│       │   ├── Department.java
│       │   ├── DepartmentController.java
│       │   ├── DepartmentRepository.java
│       │   └── DepartmentService.java
│       └── resources/application.properties
├── emp-service/
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/example/scott/emp/
│       │   ├── EmpServiceApplication.java
│       │   ├── Employee.java
│       │   ├── EmployeeController.java
│       │   ├── EmployeeRepository.java
│       │   └── EmployeeService.java
│       └── resources/application.properties
└── history-service/
    ├── pom.xml
    └── src/main/
        ├── java/com/example/scott/history/
        │   ├── EmploymentHistory.java
        │   ├── EmploymentHistoryController.java
        │   ├── EmploymentHistoryRepository.java
        │   ├── EmploymentHistoryService.java
        │   └── HistoryServiceApplication.java
        └── resources/application.properties
```
