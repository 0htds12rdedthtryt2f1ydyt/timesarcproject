import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// pages
import UserPage from './pages/UserPage';
import Finance from './pages/Finance/Accounts';
import CRM from './pages/CRM/Sales';
// import HR from './pages/HR';
import EmployeeProfile from './pages/HRPage/EmployeeProfile';
import Sales from './pages/CRM/Sales';
import Accounts from './pages/Finance/Accounts';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import EmployeeOnboarding from './pages/HRPage/EmployeeOnboarding';
import HrPolicies from './pages/HRPage/HRpolicies';
import Training from './pages/HRPage/Training';
import Expences from './pages/Finance/Expences';
import Leads from './pages/CRM/Leads';
import SalaryDetails from './pages/Payroll/SalaryDetails';
import PaySlipGenerator from './pages/Payroll/PaySlipGenerator';
import EmployeeId from './pages/Payroll/EmployeeId';
import Pay from './pages/Payroll/Pay';
import Users from './pages/User Administration/Users';
import Role from './pages/User Administration/Role';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        {
          path: 'hr',
          children: [
            { path: 'employeeprofile', element: <EmployeeProfile /> },
            { path: 'employeeonboarding', element: <EmployeeOnboarding /> },
            { path: 'hrpolicies', element: <HrPolicies /> },
            { path: 'training', element: <Training /> },
          ],
        },
        {
          path: 'payroll',
          children: [
            { path: 'salarydetails', element: <SalaryDetails /> },
            { path: 'payslipgenerator', element: <PaySlipGenerator /> },
            { path: 'employeeid', element: <EmployeeId /> },
            { path: 'pay', element: <Pay /> },
          ],
        },
        {
          path: 'finance',
          children: [
            { path: 'accounts', element: <Accounts /> },
            { path: 'expences', element: <Expences /> },
          ],
        },
        {
          path: 'crm',
          children: [
            { path: 'sales', element: <Sales /> },
            { path: 'leads', element: <Leads /> },
          ],
        },
        {
          path: 'users',
          children: [
            { path: 'Users', element: <Users /> },
            { path: 'Role', element: <Role /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
