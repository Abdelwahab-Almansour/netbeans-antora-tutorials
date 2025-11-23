import React, { useState } from 'react';

const DepartmentEditForm = ({ onSave, onDelete }) => {
  const [dept, setDept] = useState({ deptNo: '', deptName: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...dept };
    if (!payload.deptNo) delete payload.deptNo;
    onSave(payload);
    setDept({ deptNo: '', deptName: '', location: '' });
  };

  const handleDelete = () => {
    if (dept.deptNo) {
      onDelete(dept.deptNo);
      setDept({ deptNo: '', deptName: '', location: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create / Update Department</h3>
      <input
        type="text"
        placeholder="Dept No (leave blank to create)"
        value={dept.deptNo}
        onChange={(e) => setDept({ ...dept, deptNo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department Name"
        value={dept.deptName}
        onChange={(e) => setDept({ ...dept, deptName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={dept.location}
        onChange={(e) => setDept({ ...dept, location: e.target.value })}
      />
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="primary" type="submit">Save</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </form>
  );
};

export default DepartmentEditForm;
