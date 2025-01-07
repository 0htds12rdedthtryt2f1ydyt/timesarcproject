import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Card } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaDownload } from 'react-icons/fa';

const PaySlipGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfJoining: '',
    empNo: '',
    department: '',
    designation: '',
    basic: '',
    hra: '',
    conveyance: '',
    specialAllowance: '',
    tds: '',
    lop: '',
    bankAccount: '',
    month: 'August 2024',
  });

  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];
  const designations = ['Software Engineer', 'Manager', 'HR Executive', 'Team Lead', 'Intern'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Heading
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Timesarc Private Limited', 105, 20, { align: 'center' });

    // Address
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'G3, RUBY BUILDING, 2ND STREET, KAMATCHI COLONY,\nTAMBARAM SANATORIUM, CHENNAI 600047, TAMILNADU, INDIA',
      105,
      30,
      { align: 'center' }
    );

    doc.line(15, 40, 195, 40);

    // Title
    doc.setFontSize(18);
    doc.text('Salary Slip', 20, 50);

    // Employee Details
    const employeeDetails = [
      ['Employee Name', formData.name],
      ['Date of Joining', formData.dateOfJoining],
      ['Employee No.', formData.empNo],
      ['Department', formData.department],
      ['Designation', formData.designation],
      ['Bank Account Number', formData.bankAccount], 
    ];

    doc.autoTable({
      head: [['Field', 'Value']],
      body: employeeDetails,
      startY: 60,
    });

    // Salary Components
    const earnings = [
      ['Basic', formData.basic || '0'],
      ['HRA', formData.hra || '0'],
      ['Conveyance Allowance', formData.conveyance || '0'],
      ['Special Allowance', formData.specialAllowance || '0'],
    ];

    const deductions = [
      ['TDS', formData.tds || '0'],
      ['LOP', formData.lop || '0'],
    ];

    doc.text('Earnings', 20, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      head: [['Field', 'Amount (Rs.)']],
      body: earnings,
      startY: doc.lastAutoTable.finalY + 15,
    });

    doc.text('Deductions', 20, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      head: [['Field', 'Amount (Rs.)']],
      body: deductions,
      startY: doc.lastAutoTable.finalY + 15,
    });

    // Calculate Net Pay
    const grossEarnings =
      (parseFloat(formData.basic) || 0) +
      (parseFloat(formData.hra) || 0) +
      (parseFloat(formData.conveyance) || 0) +
      (parseFloat(formData.specialAllowance) || 0);

    const totalDeductions =
      (parseFloat(formData.tds) || 0) + (parseFloat(formData.lop) || 0);

    const netPay = grossEarnings - totalDeductions;

    doc.text(`Net Pay: Rs. ${netPay.toFixed(2)}`, 20, doc.lastAutoTable.finalY + 15);

    doc.setFontSize(12);
    doc.text(`Pay Slip for the Month of: ${formData.month}`, 20, doc.lastAutoTable.finalY + 25);

    doc.setFontSize(10);
    doc.text('This is a computer-generated slip and does not require a signature.', 20, doc.internal.pageSize.height - 40);

    doc.text(
      `Location: Chennai              Date: ${new Date().toLocaleDateString()}`,
      20,
      doc.internal.pageSize.height - 20
    );

    // Save PDF
    doc.save(`${formData.name}_Salary_Slip.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ margin: 'auto', padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Salary Slip Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Employee Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Date of Joining"
                name="dateOfJoining"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateOfJoining}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Employee No."
                name="empNo"
                value={formData.empNo}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Designation</InputLabel>
                <Select
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                >
                  {designations.map((desig) => (
                    <MenuItem key={desig} value={desig}>
                      {desig}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Bank Account Number"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Salary Components */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Basic Salary"
                name="basic"
                value={formData.basic}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="HRA"
                name="hra"
                value={formData.hra}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Conveyance Allowance"
                name="conveyance"
                value={formData.conveyance}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Special Allowance"
                name="specialAllowance"
                value={formData.specialAllowance}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="TDS"
                name="tds"
                value={formData.tds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Loss of Pay (LOP)"
                name="lop"
                value={formData.lop}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="medium"
                startIcon={<FaDownload />}
              >
                Generate Pay Slip
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default PaySlipGenerator;
