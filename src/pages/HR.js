import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardActions,
} from "@mui/material";

const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "HR Manager" },
  { id: 3, name: "Sam Wilson", position: "Product Designer" },
];

const HR = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {employees.map((employee) => (
        <Grid item xs={12} sm={6} md={4} key={employee.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{employee.name}</Typography>
              <Typography variant="subtitle1">{employee.position}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Edit
              </Button>
              <Button size="small" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HR;
