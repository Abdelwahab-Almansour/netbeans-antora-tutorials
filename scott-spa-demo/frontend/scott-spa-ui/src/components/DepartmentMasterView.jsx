import React from 'react';

const DepartmentMasterView = ({ departments, selectedDept, onChange }) => {
  return (
    <div>
      <label htmlFor="deptSelect">Select Department</label>
      <select id="deptSelect" value={selectedDept ?? ''} onChange={(e) => onChange(e.target.value)}>
        {departments.map((dept) => (
          <option key={dept.deptNo ?? 'all'} value={dept.deptNo ?? ''}>
            {dept.deptName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentMasterView;
