import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from '@mui/material';
import { toast } from 'react-toastify';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'New',
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update lead
  const handleSubmit = () => {
    const { name, email, phone } = form;
    console.log( phone, "phone")
    if (!name || !email || !phone) {
      toast.error('Please fill in all fields.');
      return;
    }

    const newLead = { ...form };

    if (editIndex !== null) {
      const updatedLeads = leads.map((lead, index) =>
        index === editIndex ? newLead : lead
      );
      setLeads(updatedLeads);
      toast.success('Lead updated successfully.');
    } else {
      setLeads([...leads, newLead]);
      toast.success('Lead added successfully.');
    }

    setForm({ name: '', email: '', phone: '', status: 'New' });
    setEditIndex(null);
  };

  // Edit lead
  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(leads[index]);
  };

  // Delete lead
  const handleDelete = (index) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
    toast.success('Lead deleted successfully.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Leads Management</h2>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <h3>{editIndex !== null ? 'Edit Lead' : 'Add Lead'}</h3>
        <form>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={form.status}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '10px' }}
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </form>
      </Paper>

      <h3>Leads List</h3>
      {leads.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((lead, index) => (
                <TableRow key={index}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.status}</TableCell>
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
        <p>No leads available.</p>
      )}
    </div>
  );
};

export default Leads;
