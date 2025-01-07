import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from '@mui/material';
import { toast } from 'react-toastify';

const Expences = () => {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ description: '', amount: '', date: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.description || !form.amount || !form.date) {
      toast.error('Please fill in all fields.');
      return;
    }

    const newExpense = { ...form };

    if (editIndex !== null) {
      const updatedExpenses = expenses.map((exp, idx) => (idx === editIndex ? newExpense : exp));
      setExpenses(updatedExpenses);
      toast.success('Expense updated successfully.');
    } else {
      setExpenses([...expenses, newExpense]);
      toast.success('Expense added successfully.');
    }

    setForm({ description: '', amount: '', date: '' });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(expenses[index]);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, idx) => idx !== index);
    setExpenses(updatedExpenses);
    toast.success('Expense deleted successfully.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Expenses Management</h2>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <h3>{editIndex !== null ? 'Edit Expense' : 'Add Expense'}</h3>
        <form>
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </form>
      </Paper>

      <h3>Expense List</h3>
      {expenses.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.amount}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(index)}
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default Expences;
