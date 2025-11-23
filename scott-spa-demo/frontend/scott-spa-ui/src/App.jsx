import React, { useEffect, useMemo, useState } from 'react';
import { Api } from './api';
import DepartmentMasterView from './components/DepartmentMasterView';
import EmployeeTableView from './components/EmployeeTableView';
import EmployeeHistoryTableView from './components/EmployeeHistoryTableView';
import DepartmentChartsView from './components/DepartmentChartsView';
import EmployeeHistoryChartView from './components/EmployeeHistoryChartView';
import DepartmentEditForm from './components/DepartmentEditForm';
import EmployeeEditForm from './components/EmployeeEditForm';
import './app.css';

function App() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deptStats, setDeptStats] = useState({});

  useEffect(() => {
    Api.fetchDepartments().then(setDepartments);
    Api.fetchEmployees().then(setEmployees);
    Api.departmentStats().then(setDeptStats);
  }, []);

  useEffect(() => {
    if (selectedDept) {
      Api.fetchEmployeesByDepartment(selectedDept).then(setEmployees);
    } else {
      Api.fetchEmployees().then(setEmployees);
    }
  }, [selectedDept]);

  useEffect(() => {
    if (selectedEmployee) {
      Api.fetchTimeline(selectedEmployee).then(setHistory);
    } else {
      setHistory([]);
    }
  }, [selectedEmployee]);

  const departmentOptions = useMemo(() => [{ deptNo: '', deptName: 'All Departments' }, ...departments], [departments]);

  const handleDepartmentChange = (deptNo) => {
    setSelectedDept(deptNo || null);
  };

  const handleEmployeeSelect = (empNo) => {
    setSelectedEmployee(empNo);
  };

  const handleDepartmentSave = (dept) => {
    const action = dept.deptNo ? Api.updateDepartment(dept.deptNo, dept) : Api.createDepartment(dept);
    action.then(() => Api.fetchDepartments().then(setDepartments));
  };

  const handleDepartmentDelete = (deptNo) => {
    Api.deleteDepartment(deptNo).then(() => Api.fetchDepartments().then(setDepartments));
  };

  const handleEmployeeSave = (emp) => {
    const action = emp.empNo ? Api.updateEmployee(emp.empNo, emp) : Api.createEmployee(emp);
    action.then(() => Api.fetchEmployees().then(setEmployees));
  };

  return (
    <div className="container">
      <h1>Scott SPA Demo</h1>
      <div className="grid">
        <section>
          <h2>Departments</h2>
          <DepartmentMasterView
            departments={departmentOptions}
            selectedDept={selectedDept}
            onChange={handleDepartmentChange}
          />
          <DepartmentEditForm onSave={handleDepartmentSave} onDelete={handleDepartmentDelete} />
          <DepartmentChartsView departments={departments} stats={deptStats} />
        </section>
        <section>
          <h2>Employees</h2>
          <EmployeeTableView employees={employees} onSelect={handleEmployeeSelect} />
          <EmployeeEditForm onSave={handleEmployeeSave} />
        </section>
        <section>
          <h2>Employee History</h2>
          <EmployeeHistoryTableView history={history} />
          <EmployeeHistoryChartView history={history} />
        </section>
      </div>
    </div>
  );
}

export default App;
