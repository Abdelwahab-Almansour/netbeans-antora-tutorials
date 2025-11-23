import axios from 'axios';

const deptClient = axios.create({ baseURL: 'http://localhost:8081/api' });
const empClient = axios.create({ baseURL: 'http://localhost:8082/api' });
const historyClient = axios.create({ baseURL: 'http://localhost:8083/api' });

export const Api = {
  fetchDepartments: () => deptClient.get('/departments').then(res => res.data),
  createDepartment: (payload) => deptClient.post('/departments', payload).then(res => res.data),
  updateDepartment: (deptNo, payload) => deptClient.put(`/departments/${deptNo}`, payload).then(res => res.data),
  deleteDepartment: (deptNo) => deptClient.delete(`/departments/${deptNo}`),

  fetchEmployees: () => empClient.get('/employees').then(res => res.data),
  fetchEmployeesByDepartment: (deptNo) => empClient.get(`/employees/by-department/${deptNo}`).then(res => res.data),
  createEmployee: (payload) => empClient.post('/employees', payload).then(res => res.data),
  updateEmployee: (empNo, payload) => empClient.put(`/employees/${empNo}`, payload).then(res => res.data),
  departmentStats: () => empClient.get('/employees/departments/stats').then(res => res.data),

  fetchHistoryByEmployee: (empNo) => historyClient.get(`/history/by-employee/${empNo}`).then(res => res.data),
  fetchTimeline: (empNo) => historyClient.get(`/history/timeline/${empNo}`).then(res => res.data),
  createHistory: (payload) => historyClient.post('/history', payload).then(res => res.data)
};
