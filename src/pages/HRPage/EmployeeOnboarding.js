import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  IconButton,
} from "@mui/material";
import { FiEdit, FiTrash, FiEye } from "react-icons/fi";

const departments = ["HR", "IT", "Finance", "Marketing", "Operations"];
const positions = ["Manager", "Team Lead", "Developer", "Analyst", "Intern"];

const EmployeeOnboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    startDate: "",
  });

  const [employees, setEmployees] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("view");
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployees([...employees, formData]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      position: "",
      startDate: "",
    });
    setFormVisible(false);
  };

  const handleCancel = () => {
    setFormVisible(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      position: "",
      startDate: "",
    });
  };

  const handleAction = (employee, mode) => {
    setDialogMode(mode);
    setCurrentEmployee(employee);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setCurrentEmployee(null);
  };

  const handleUpdate = () => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp === currentEmployee ? { ...currentEmployee, ...formData } : emp
      )
    );
    setDialogOpen(false);
  };

  const handleDelete = (employee) => {
    setEmployees((prev) => prev.filter((emp) => emp !== employee));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFormVisible(true)}
        sx={{ mb: 3 }}
      >
        Add Onboarding Employee
      </Button>

      {formVisible && (
        <Paper elevation={3} sx={{ padding: 4, mb: 3 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  select
                  label="Department"
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
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  select
                  label="Position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  {positions.map((pos) => (
                    <MenuItem key={pos} value={pos}>
                      {pos}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      )}

      <Paper elevation={3}>
        <TableContainer style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.length > 0 ? (
                employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.startDate}</TableCell>
                    <TableCell>
                      <FiEye
                        onClick={() => handleAction(employee, "view")}
                        style={{ cursor: "pointer", marginRight: "10px", color: "#1976d2" }}
                        title="View"
                      />
                      <FiEdit
                        onClick={() => handleAction(employee, "edit")}
                        style={{ cursor: "pointer", marginRight: "10px", color: "#0288d1" }}
                        title="Edit"
                      />
                      <FiTrash
                        onClick={() => handleDelete(employee)}
                        style={{ cursor: "pointer", color: "#d32f2f" }}
                        title="Delete"
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No employees onboarded yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {
        dialogOpen && (
          <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
            <DialogTitle>
              {dialogMode === "view" ? "View Employee" : "Edit Employee"}
            </DialogTitle>
            <DialogContent style={{paddingTop: "20px"}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={currentEmployee.name}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, name: e.target.value }))
                    }
                    disabled={dialogMode === "view"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={currentEmployee.email}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, email: e.target.value }))
                    }
                    disabled={dialogMode === "view"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={currentEmployee.phone}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    disabled={dialogMode === "view"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Department"
                    name="department"
                    value={currentEmployee.department}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, department: e.target.value }))
                    }
                    disabled={dialogMode === "view"}
                  >
                    {departments.map((dept) => (
                      <MenuItem key={dept} value={dept}>
                        {dept}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Position"
                    name="position"
                    value={currentEmployee.position}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, position: e.target.value }))
                    }
                    disabled={dialogMode === "view"}
                  >
                    {positions.map((pos) => (
                      <MenuItem key={pos} value={pos}>
                        {pos}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={currentEmployee.startDate}
                    onChange={(e) =>
                      setCurrentEmployee((prev) => ({ ...prev, startDate: e.target.value }))
                    }
                    InputLabelProps={{ shrink: true }}
                    disabled={dialogMode === "view"}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions style={{marginRight: "16px"}}>
              {dialogMode === "edit" && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              )}
              <Button
                variant="outlined"
                onClick={handleDialogClose}
                style={{ marginLeft: "10px" }}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )
      }
    </Box >
  );
};

export default EmployeeOnboarding;
