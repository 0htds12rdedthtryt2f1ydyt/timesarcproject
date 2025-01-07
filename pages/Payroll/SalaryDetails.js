import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Box,
  TablePagination,
} from '@mui/material';

export default function SalaryDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const salaryData = [
    { id: 1, name: 'John Doe', role: 'Software Engineer', salary: 75000 },
    { id: 2, name: 'Jane Smith', role: 'HR Manager', salary: 68000 },
    { id: 3, name: 'Sam Wilson', role: 'Product Manager', salary: 85000 },
    { id: 4, name: 'Anna Brown', role: 'Designer', salary: 60000 },
    { id: 5, name: 'Mike Davis', role: 'Marketing Specialist', salary: 55000 },
    { id: 6, name: 'Sophia Lee', role: 'Business Analyst', salary: 72000 },
    { id: 7, name: 'Liam Johnson', role: 'DevOps Engineer', salary: 78000 },
    { id: 8, name: 'Emma Walker', role: 'Support Engineer', salary: 50000 },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = salaryData.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Salary Details
      </Typography>

      <Box mb={2}>
        <TextField
          label="Search Employee"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Salary</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>${employee.salary.toLocaleString()}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
