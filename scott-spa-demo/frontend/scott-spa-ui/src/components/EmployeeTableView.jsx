import React from 'react';

const EmployeeTableView = ({ employees, onSelect }) => (
  <table>
    <thead>
      <tr>
        <th>Emp No</th>
        <th>Name</th>
        <th>Job</th>
        <th>Salary</th>
        <th>Dept No</th>
        <th>Hire Date</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((emp) => (
        <tr key={emp.empNo} onClick={() => onSelect(emp.empNo)} style={{ cursor: 'pointer' }}>
          <td>{emp.empNo}</td>
          <td>{emp.name}</td>
          <td>{emp.job}</td>
          <td>{emp.salary}</td>
          <td>{emp.deptNo}</td>
          <td>{emp.hireDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTableView;
