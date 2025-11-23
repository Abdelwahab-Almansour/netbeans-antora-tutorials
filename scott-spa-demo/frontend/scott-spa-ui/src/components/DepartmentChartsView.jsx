import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const DepartmentChartsView = ({ departments, stats }) => {
  const departmentData = departments.map((dept) => ({
    name: dept.deptName,
    deptNo: dept.deptNo,
    totalSalary: stats?.[dept.deptNo]?.sum ?? 0,
    count: stats?.[dept.deptNo]?.count ?? 0
  }));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={departmentData}>
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSalary" fill="#8884d8" name="Total Salary" />
          <Bar dataKey="count" fill="#82ca9d" name="Employees" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={departmentData} dataKey="count" nameKey="name" outerRadius={80} label>
            {departmentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentChartsView;
