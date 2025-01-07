import SvgColor from '../../../components/svg-color';
import { Icon } from '@iconify/react';
import personFill from '@iconify/icons-eva/person-fill';
import { FaRupeeSign } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import "./style.css";

const iconStyle = {
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={iconStyle} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: <Icon icon="ic:baseline-dashboard" style={iconStyle} />,
  },
  {
    title: 'HR',
    path: '/dashboard/hr',
    icon: <Icon icon={personFill} style={iconStyle} />,
    children: [
      { title: 'Employee Profile', path: '/dashboard/hr/employeeprofile' },
      { title: 'Employee Onboarding ', path: '/dashboard/hr/employeeonboarding' },
      { title: 'HR Policies', path: '/dashboard/hr/hrpolicies' },
      { title: 'Training', path: '/dashboard/hr/training' },
    ],
  },
  {
    title: 'Payroll',
    path: '/dashboard/payroll',
    icon: <FaMoneyBillWave style={iconStyle} />,
    children: [
      { title: 'Salary Details', path: '/dashboard/payroll/salarydetails' },
      { title: 'Generate Pay Slip', path: '/dashboard/payroll/payslipgenerator' },
      { title: 'Employee Id', path: '/dashboard/payroll/employeeid' },
      { title: 'Pay', path: '/dashboard/payroll/pay' },
    ],
  },
  {
    title: 'Finance',
    path: '/dashboard/finance',
    icon: <FaRupeeSign style={iconStyle} />,
    children: [
      { title: 'Accounts', path: '/dashboard/finance/accounts' },
      { title: 'Expenses', path: '/dashboard/finance/expences' },
    ],
  },
  {
    title: 'CRM',
    path: '/dashboard/crm',
    icon: <FaChartLine style={iconStyle} />,
    children: [
      { title: 'Sales', path: '/dashboard/crm/sales' },
      { title: 'Leads', path: '/dashboard/crm/leads' },
    ],
  },
  {
    title: 'Users Administration',
    path: '/dashboard/users',
    icon: <FaUsers style={iconStyle} />,
    children: [
      { title: 'User', path: '/dashboard/users/Users' },
      { title: 'Role', path: '/dashboard/users/Role' },
    ],
  },
];

export default navConfig;
