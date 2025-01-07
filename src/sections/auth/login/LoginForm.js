import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack, IconButton, InputAdornment, TextField, Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';
import "./LoginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const predefinedCredentials = {
      username: 'Siva12',
      password: 'Siva@12345',
      role: 'Admin',
    };

    const newErrors = {};

    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (username !== predefinedCredentials.username) {
      newErrors.username = 'Incorrect username';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password !== predefinedCredentials.password) {
      newErrors.password = 'Incorrect password';
    }

    // Role validation
    if (!role) {
      newErrors.role = 'Role is required';
    } else if (role !== predefinedCredentials.role) {
      newErrors.role = 'Incorrect role';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed to the dashboard
      navigate('/dashboard/app', { replace: true });
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3" sx={{ mb: 1, justifyContent: "center", display: "flex" }}>
              Login
            </Typography>
            <TextField
              name="username"
              label="Username"
              size="small"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Iconify sx={{ ml: 3 }} icon="mdi:account-circle-outline" />
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 1,
              }}
            />

            <TextField
              size="small"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 3 }}
            />
            <FormControl
              sx={{ mt: 3, minWidth: 120 }}
              size="small"
              fullWidth
              error={!!errors.role}
            >
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={role}
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </Select>
              {errors.role && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ ml: 1.75, mt: 0.5 }}
                >
                  {errors.role}
                </Typography>
              )}
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                mt: 2,
              }}
            >
              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
                label="Remember me"
              />
              <a href="#" style={{ textDecoration: 'none', marginTop: '10px' }}>
                Forget password?
              </a>
            </Box>
          </Box>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ my: 2 }}
        >
          Login
        </LoadingButton>
      </form>
    </div>
  );
}
