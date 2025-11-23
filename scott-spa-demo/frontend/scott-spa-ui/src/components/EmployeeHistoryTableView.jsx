import React from 'react';

const EmployeeHistoryTableView = ({ history }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Status</th>
        <th>Comments</th>
        <th>Effective Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.status}</td>
          <td>{item.comments}</td>
          <td>{item.effectiveDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeHistoryTableView;
