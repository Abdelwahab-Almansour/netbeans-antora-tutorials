import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const EmployeeHistoryChartView = ({ history }) => {
  const sorted = [...history].sort((a, b) => (a.effectiveDate || '').localeCompare(b.effectiveDate || ''));
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={sorted}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="effectiveDate" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="empNo" name="Emp No" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmployeeHistoryChartView;
