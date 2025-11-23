import React, { useState } from 'react';

const EmployeeEditForm = ({ onSave }) => {
  const [emp, setEmp] = useState({ empNo: '', name: '', job: '', salary: '', deptNo: '', hireDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...emp, salary: emp.salary ? Number(emp.salary) : null };
    if (!payload.empNo) delete payload.empNo;
    onSave(payload);
    setEmp({ empNo: '', name: '', job: '', salary: '', deptNo: '', hireDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create / Update Employee</h3>
      <input
        type="text"
        placeholder="Emp No (leave blank to create)"
        value={emp.empNo}
        onChange={(e) => setEmp({ ...emp, empNo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={emp.name}
        onChange={(e) => setEmp({ ...emp, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Job"
        value={emp.job}
        onChange={(e) => setEmp({ ...emp, job: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salary"
        value={emp.salary}
        onChange={(e) => setEmp({ ...emp, salary: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dept No"
        value={emp.deptNo}
        onChange={(e) => setEmp({ ...emp, deptNo: e.target.value })}
      />
      <input
        type="date"
        placeholder="Hire Date"
        value={emp.hireDate}
        onChange={(e) => setEmp({ ...emp, hireDate: e.target.value })}
      />
      <button className="primary" type="submit">Save</button>
    </form>
  );
};

export default EmployeeEditForm;
