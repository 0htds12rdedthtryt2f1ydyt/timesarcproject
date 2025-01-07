import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Tabs,
  Tab,
  Select,
  FormControl,
  InputAdornment,
  Avatar,
  IconButton,
  InputLabel,
  Checkbox, FormControlLabel,
} from "@mui/material";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FaSearch } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import dayjs from "dayjs";
import "../../style.css";
import Joiningdetails from '../../pages/HRPage/Joiningdetails';
import Currentposition from "./Currentposition";
import Employeeidentity from "./Employeeidentity";
import EmployeeTable from "./EmployeeTable";
import Education from "./Education";
import BackgroundCheck from "./BackgroundCheck";
import Remarks from "./Remarks";

const EmployeeProfile = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [tabsOpen, setTabsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [employeeType, setEmployeeType] = useState("All");
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });
  const [errors, setErrors] = useState({});
  const [isInternationalEmployee, setIsInternationalEmployee] = useState(false);
  const [isphysicallychallenged, setIsPhysicallyChallenged] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsInternationalEmployee(event.target.checked);
  };
  const handleCheckbox = (event) => {
    setIsPhysicallyChallenged(event.target.checked);
  };
  const bloodGroups = ["Select", "A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const handlePersonalBloodgroup = (event) => {
    const { value } = event.target;
    setPersonalFormData((prevData) => ({
      ...prevData,
      bloodGroup: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleTypeChange = (event) => {
    setEmployeeType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!employeeData.name.trim()) errors.name = "Name is required.";
    if (!employeeData.email.trim()) errors.email = "Email is required.";
    else if (!emailRegex.test(employeeData.email.trim()))
      errors.email = "Invalid email format.";
    if (!employeeData.phone.trim()) errors.phone = "Phone number is required.";
    else if (!phoneRegex.test(employeeData.phone.trim()))
      errors.phone = "Phone number must be exactly 10 digits.";
    if (!employeeData.department.trim())
      errors.department = "Department is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const [disabilityType, setDisabilityType] = useState('');

  const handleChangedisabilityType = (event) => {
    setDisabilityType(event.target.value);
  };

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    toast.success("Employee data saved successfully!");

    setEmployeeData({
      name: "",
      email: "",
      phone: "",
      department: "",
    });
    setFormOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const initialData = {
    title: "Mr.",
    nickName: "John",
    gender: "male",
    name: "John Doe",
    username: "john.doe",
    mobile: "9843043027",
    email: "john.doe@example.com",
    extension: "101"
  };
  const personalData = {
    dob: "08 Aug 1985",
    birthday: "08 Aug",
    bloodGroup: "B+",
    fathername: "Bhaskar",
    mothername: "Akila",
    maritalstatus: "Married",
    marriagedate: "16 Jan 2013",
    spousename: "Shiva",
    nationality: "Indian",
    residentialStatus: "Permanent Resident",
    religion: "Hindu",
    placeOfBirth: "New York",
    countryOfOrigin: "India",
    mailId: "selva.ta@gmail.com",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData);
  // section 2
  const [isPersonalEditing, setPersonalIsEditing] = useState(false);
  const [personalFormData, setPersonalFormData] = useState(personalData);
  const [personaloriginalData, setPersonalOriginal] = useState(personalData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handlePersonalEditClick = () => {
    setPersonalIsEditing(!isPersonalEditing);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(originalData);
  };
  const handlePersonalCancel = () => {
    setPersonalIsEditing(false);
    setPersonalFormData(personaloriginalData);
  };

  // Save the changes
  const handleSave = () => {
    setOriginalData(formData);
    setIsEditing(false);
    console.log("Saved data:", formData);
  };
  const handlePersonalSave = () => {
    setPersonalOriginal(personalFormData);
    setPersonalIsEditing(false);
    console.log("Saved data:", personalFormData);
  };
  const handleDateChange = (newDate) => {
    if (newDate) {
      setPersonalFormData({
        ...personalFormData,
        dob: newDate.format("DD MMM YYYY"),
      });
    }
  };
  const handleMarraigeDate = (newDate) => {
    if (newDate) {
      setPersonalFormData({
        ...personalFormData,
        marriagedate: newDate.format("DD MMM YYYY"),
      });
    }
  };
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [formattedBirthday, setFormattedBirthday] = useState("");

  useEffect(() => {
    const birthdayParts = personalData.birthday.split(" ");
    const birthdayDay = parseInt(birthdayParts[0], 10);
    const birthdayMonth = months.indexOf(birthdayParts[1]) + 1;

    setDay(birthdayDay);
    setMonth(birthdayMonth);
    setFormattedBirthday(`${birthdayDay} ${months[birthdayMonth - 1]}`);
  }, []);

  const handleChangeDay = (event) => {
    const newDay = event.target.value;
    setDay(newDay);
    updateFormattedBirthday(newDay, month);
  };

  const handleChangeMonth = (event) => {
    const newMonth = event.target.value;
    setMonth(newMonth);
    updateFormattedBirthday(day, newMonth);
  };

  const updateFormattedBirthday = (newDay, newMonth) => {
    setFormattedBirthday(`${newDay} ${months[newMonth - 1]}`);
  };
  const birthdayParts = personalData.birthday.split(" ");
  const birthdayDay = parseInt(birthdayParts[0], 10);
  const birthdayMonth = months.indexOf(birthdayParts[1]) + 1;
  const predefinedLocations = [
    "Chennai",
    "Bengaluru",
    "Trivandrum",
    "Tirupati",
    "Vijayawada",
    "Coimbatore",
  ];
  // marriagedate

  return (
    <Box sx={{ padding: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setFormOpen(!formOpen);
          if (tabsOpen) setTabsOpen(false);
        }}
        style={{ marginBottom: "20px" }}
      >
        Add Employee
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTabsOpen(true);
          setFormOpen(false);
        }}
        style={{ marginLeft: "30px", marginBottom: "20px" }}
      >
        Update Employee
      </Button>
      {tabsOpen && (
        <div>
          <Card>
            <CardContent>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="primary"
                TabIndicatorProps={{
                  sx: { height: 3, borderRadius: "10px" },
                }}
                sx={{
                  "& .MuiTab-root": {
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#777",
                    textTransform: "none",
                    padding: "8px 16px",
                  },
                  "& .MuiTab-root.Mui-selected": {
                    color: "#1976d2",
                  },
                }}
              >
                <Tab label="Main" />
                <Tab label="Activity" />
              </Tabs>
              {activeTab === 0 && (
                <Box mt={2}>
                  <Typography variant="h6">
                    Start searching to see specific employee details here
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Typography variant="body1">Employee Type</Typography>
                    <FormControl
                      style={{ marginLeft: "20px" }}
                      variant="outlined"
                      size="small"
                    >
                      <Select value={employeeType} onChange={handleTypeChange}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Current Employee">Current Employee</MenuItem>
                        <MenuItem value="Resigned Employee">
                          Resigned Employee
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <p>Search Employee</p>
                  <TextField
                    variant="outlined"
                    placeholder="Search by Emp No/Name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FaSearch style={{ color: "#777" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      maxWidth: 400,
                      margin: "auto",
                    }}
                  />
                </Box>
              )}
              {activeTab === 1 && (
                <Box mt={2}>
                  <Typography variant="h6">Activity</Typography>
                  <Typography variant="body2" mt={2}>
                    Activity Stream
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
          {activeTab === 0 && (
            <Card style={{ marginTop: "30px", padding: "5px" }}>
              <CardContent
                style={{
                  backgroundColor: "teal",
                  borderRadius: "10px",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center">
                    <div style={{ marginTop: 20 }}>
                      <Avatar
                        variant="square"
                        alt="Profile Picture"
                        src={image}
                        sx={{
                          width: 80,
                          height: 80,
                          border: "2px solid #ccc",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <Box marginLeft="16px">
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Selvam
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 500,
                        }}
                      >
                        #T0043
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      startIcon={<FiCamera />}
                      component="label" // This makes the button trigger the file input
                      sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        color: "white",
                        backgroundColor: "#48afaf",
                        "&:hover": {
                          backgroundColor: "#3d9e9e",
                        },
                      }}
                    >
                      Upload Photo
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageUpload} // Handle file selection
                      />
                    </Button>
                    <Button
                      variant="#48afaf"
                      startIcon={<FiTrash2 />}
                      sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        color: "white",
                        marginLeft: "15px",
                        backgroundColor: "#48afaf",
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </CardContent>
              <Box>
                <Box style={{ marginTop: "25px" }} display="flex" alignItems="center" mb={2}>
                  <Typography variant="h5" sx={{ marginLeft: "30px", display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "4px", height: "30px", backgroundColor: "orange", marginRight: "8px" }} />
                    Employee Information
                  </Typography>
                  {!isEditing && (
                    <IconButton sx={{ color: "blueviolet", marginTop: "5px" }} onClick={handleEditClick}>
                      <FiEdit />
                    </IconButton>
                  )}
                </Box>
                <Box style={{ marginLeft: "30px", marginBottom: "45px" }}>
                  <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="title" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Title
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.title}</Typography>
                      ) : (
                        <TextField
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="nickName" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Nick Name
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.nickName}</Typography>
                      ) : (
                        <TextField
                          id="nickName"
                          name="nickName"
                          value={formData.nickName}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="gender" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Gender
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.gender}</Typography>
                      ) : (
                        <TextField
                          id="gender"
                          name="gender"
                          select
                          value={formData.gender}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="name" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Name
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.name}</Typography>
                      ) : (
                        <TextField
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="username" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Employee Username
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.username}</Typography>
                      ) : (
                        <TextField
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="mobile" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Mobile
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.mobile}</Typography>
                      ) : (
                        <TextField
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="email" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Email
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.email}</Typography>
                      ) : (
                        <TextField
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="extension" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Extension
                      </label>
                      {!isEditing ? (
                        <Typography>{formData.extension}</Typography>
                      ) : (
                        <TextField
                          id="extension"
                          name="extension"
                          value={formData.extension}
                          onChange={handleChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                  </div>
                  {isEditing && (
                    <Box mt={2} display="flex" gap={2}>
                      <Button variant="contained" color="primary" onClick={handleSave}>
                        Save Changes
                      </Button>
                      <Button variant="outlined" color="secondary" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Card>
          )}
          {activeTab === 0 && (
            <Card style={{ marginTop: "30px", padding: "5px" }}>
              <Box>
                <Box style={{ marginTop: "25px" }} display="flex" alignItems="center" mb={2}>
                  <Typography variant="h5" sx={{ marginLeft: "30px", display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "4px", height: "30px", backgroundColor: "orange", marginRight: "8px" }} />
                    Personal Information
                  </Typography>
                  {!isPersonalEditing && (
                    <IconButton sx={{ color: "blueviolet", marginTop: "5px" }} onClick={handlePersonalEditClick}>
                      <FiEdit />
                    </IconButton>
                  )}
                </Box>
                <Box style={{ marginLeft: "30px", marginBottom: "45px" }}>
                  <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div sx={{ height: "30px" }} style={{ flex: 1 }}>
                        <label
                          htmlFor="dob"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          DOB
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.dob}</Typography>
                        ) : (
                          <DatePicker
                            value={dayjs(personalFormData.dob, "DD MMM YYYY")}
                            onChange={handleDateChange}
                            format="DD MMM YYYY"
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                id="dob"
                                name="dob"
                                fullWidth
                                variant="outlined"
                                size="small"
                              />
                            )}
                          />
                        )}
                      </div>
                    </LocalizationProvider>
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor="bloodGroup"
                        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                      >
                        Blood Group
                      </label>
                      {!isPersonalEditing ? (
                        <Typography>{personalFormData.bloodGroup}</Typography>
                      ) : (
                        <FormControl fullWidth variant="outlined" size="small">
                          <InputLabel id="bloodGroup-label">Blood Group</InputLabel>
                          <Select
                            labelId="bloodGroup-label"
                            id="bloodGroup"
                            value={personalFormData.bloodGroup}
                            onChange={handlePersonalChange}
                            label="Blood Group"
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  maxHeight: 200,
                                  minWidth: 150,
                                },
                              },
                            }}
                          >
                            {bloodGroups.map((group, index) => (
                              <MenuItem key={index} value={group}>
                                {group}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div>
                          <div style={{ flex: 1 }}>
                            <label
                              htmlFor="mailId"
                              style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                            >
                              Personal Email
                            </label>
                            {!isPersonalEditing ? (
                              <Typography>{personalFormData.mailId}</Typography>
                            ) : (
                              <TextField
                                id="mailId"
                                name="mailId"
                                value={personalFormData.mailId}
                                onChange={handlePersonalBloodgroup}
                                style={{ width: "350px" }}
                                variant="outlined"
                                size="small"
                              />
                            )}
                          </div>
                        </div>
                      </LocalizationProvider>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div sx={{ height: "30px" }} style={{ flex: 1 }}>
                        <label
                          htmlFor="marriagedate"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Marriage Date
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.marriagedate}</Typography>
                        ) : (
                          <DatePicker
                            value={dayjs(personalFormData.marriagedate, "DD MMM YYYY")}
                            onChange={handleMarraigeDate}
                            format="DD MMM YYYY"
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                id="marriagedate"
                                name="marriagedate"
                                fullWidth
                                variant="outlined"
                                size="small"
                              />
                            )}
                          />
                        )}
                      </div>
                    </LocalizationProvider>
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="fathername" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Father Name
                      </label>
                      {!isPersonalEditing ? (
                        <Typography>{personalFormData.fathername}</Typography>
                      ) : (
                        <TextField
                          id="fathername"
                          name="fathername"  // Corrected from 'fathername' to 'name'
                          value={personalFormData.fathername}
                          onChange={handlePersonalChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="mothername" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Mother Name
                      </label>
                      {!isPersonalEditing ? (
                        <Typography>{personalFormData.mothername}</Typography>
                      ) : (
                        <TextField
                          id="mothername"
                          name="mothername"  // Corrected from 'mothername' to 'name'
                          value={personalFormData.mothername}
                          onChange={handlePersonalChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="maritalstatus" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Marital Status
                      </label>
                      {!isPersonalEditing ? (
                        <Typography>{personalFormData.maritalstatus}</Typography>
                      ) : (
                        <TextField
                          id="maritalstatus"
                          name="maritalstatus"
                          value={personalFormData.maritalstatus}
                          onChange={handlePersonalChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="spousename" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                        Spouse Name
                      </label>
                      {!isPersonalEditing ? (
                        <Typography>{personalFormData.spousename}</Typography>
                      ) : (
                        <TextField
                          id="spousename"
                          name="spousename"
                          value={personalFormData.spousename}
                          onChange={handlePersonalChange}
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      )}
                    </div>

                  </div>
                  <div style={{ display: "flex", gap: "20px", marginBottom: "20px", marginTop: "20px" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div style={{ flex: 1 }}>
                        <label
                          htmlFor="residentialStatus"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Residential Status
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.residentialStatus}</Typography>
                        ) : (
                          <TextField
                            id="residentialStatus"
                            name="residentialStatus"
                            value={personalFormData.residentialStatus}
                            onChange={handlePersonalChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                          />
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <label
                          htmlFor="placeOfBirth"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Place of Birth
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.placeOfBirth}</Typography>
                        ) : (
                          <TextField
                            id="placeOfBirth"
                            name="placeOfBirth"
                            value={personalFormData.placeOfBirth}
                            onChange={handlePersonalChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                          />
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <label
                          htmlFor="countryOfOrigin"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Country of Origin
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.countryOfOrigin}</Typography>
                        ) : (
                          <TextField
                            id="countryOfOrigin"
                            name="countryOfOrigin"
                            value={personalFormData.countryOfOrigin}
                            onChange={handlePersonalChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                          />
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <label
                          htmlFor="religion"
                          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Religion
                        </label>
                        {!isPersonalEditing ? (
                          <Typography>{personalFormData.religion}</Typography>
                        ) : (
                          <TextField
                            id="religion"
                            name="religion"
                            value={personalFormData.religion}
                            onChange={handlePersonalChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                          />
                        )}
                      </div>
                    </LocalizationProvider>
                  </div>
                  {isPersonalEditing && (
                    <div style={{ display: "flex", gap: "20px", marginBottom: "20px", marginTop: "20px" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isInternationalEmployee}
                            onChange={handleCheckboxChange}
                            color="primary"
                          />
                        }
                        label="International Employee"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isphysicallychallenged}
                            onChange={handleCheckbox}
                            color="primary"
                          />
                        }
                        label="Physically challenged"
                        style={{ marginLeft: "130px" }}
                      />
                      {isphysicallychallenged && (
                        <div style={{ marginTop: "10px", fontWeight: "bold", color: "#555", marginLeft: "150px" }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
                              <FormControl
                                fullWidth
                                style={{
                                  marginBottom: "20px",
                                  minWidth: "350px",
                                  height: "50px",
                                }}
                              >
                                <InputLabel id="disabilityType-label">Disability Type</InputLabel>
                                <Select
                                  labelId="disabilityType-label"
                                  id="disabilityType"
                                  value={disabilityType}
                                  label="Disability Type"
                                  onChange={handleChangedisabilityType}
                                  style={{
                                    padding: "10px",
                                    fontSize: "16px",
                                    height: "50px",
                                    lineHeight: "50px",
                                  }}
                                >
                                  <MenuItem value="hearing">Hearing Disability</MenuItem>
                                  <MenuItem value="locomotive">Locomotive Disability</MenuItem>
                                  <MenuItem value="visual">Visual Disability</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <label htmlFor="nationality" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                      Nationality
                    </label>
                    {!isPersonalEditing ? (
                      <Typography>{personalFormData.nationality}</Typography>
                    ) : (
                      <TextField
                        id="nationality"
                        name="nationality"
                        value={personalFormData.nationality}
                        onChange={handlePersonalChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    )}
                  </div>
                  {isPersonalEditing && (
                    <Box mt={2} display="flex" gap={2}>
                      <Button variant="contained" color="primary" onClick={handlePersonalSave}>
                        Save Changes
                      </Button>
                      <Button variant="outlined" color="secondary" onClick={handlePersonalCancel}>
                        Cancel
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Card>
          )}
          {activeTab === 0 && (
            <Joiningdetails style={{ width: "100%" }} />
          )}
          {activeTab === 0 && (
            <Currentposition style={{ width: "100%" }} />
          )}
          {activeTab === 0 && (
            <Employeeidentity style={{ width: "100%" }} />
          )}
          {activeTab === 0 && (
            <Education style={{ width: "100%" }} />
          )}
          {activeTab === 0 && (
            <BackgroundCheck style={{ width: "100%" }} />
          )}
          {activeTab === 0 && (
            <Remarks style={{ width: "100%" }} />
          )}
        </div>
      )}
      {
        formOpen && (
          <div>
            <Card style={{ margin: "0 auto" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Quickly add employee to the company!
                </Typography>
                <p>
                  Add an employee by filling the form or add bunch of employee by clicking bulk upload.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "25px" }}
                >
                  Add Bulk Upload
                </Button>
              </CardContent>
            </Card>
            <Card style={{ marginTop: "30px" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {editIndex !== null ? "Edit Employee" : "Add details of an employee"}
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <label htmlFor="name" style={{ fontWeight: "bold", display: "block" }}>
                          Employee Name *
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="name"
                          name="name"
                          value={employeeData.name}
                          onChange={handleInputChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          placeholder="Enter employee name"
                          variant="outlined"
                          InputProps={{
                            style: { height: 40 },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <label htmlFor="phone" style={{ fontWeight: "bold", display: "block" }}>
                          Employee Number *
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="phone"
                          name="phone"
                          value={employeeData.phone}
                          onChange={handleInputChange}
                          error={!!errors.phone}
                          helperText={errors.phone}
                          placeholder="Enter employee number"
                          variant="outlined"
                          InputProps={{
                            style: { height: 40 },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <label htmlFor="date" style={{ fontWeight: "bold", display: "block" }}>
                          DOJ
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={employeeData.date}
                            onChange={(newValue) =>
                              handleInputChange({ target: { name: "date", value: newValue } })
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                id="date"
                                placeholder="Select date"
                                variant="outlined"
                                InputProps={{
                                  style: { height: 40 },
                                }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <label htmlFor="email" style={{ fontWeight: "bold", display: "block" }}>
                          Email Id*
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          value={employeeData.email}
                          onChange={handleInputChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          placeholder="Enter email address"
                          variant="outlined"
                          InputProps={{
                            style: { height: 40 },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <label htmlFor="department" style={{ fontWeight: "bold", display: "block" }}>
                          Location
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          id="department"
                          name="department"
                          value={employeeData.department}
                          onChange={handleInputChange}
                          variant="outlined"
                          InputProps={{
                            style: { height: 40 },
                          }}
                          SelectProps={{
                            displayEmpty: true,
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {predefinedLocations.map((location) => (
                            <MenuItem key={location} value={location}>
                              {location}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <p variant="h5" gutterBottom>After saving, the onboarding process will start and employee will receive a Welcome Email with the link to set his password.
                </p>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  gap={2}
                  marginTop={3}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setFormOpen(false);
                      setEditIndex(null);
                      setEmployeeData({
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                        address: "",
                      });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </CardContent>
            </Card>

          </div>

        )
      }
      {!tabsOpen && (
        <div>
          <EmployeeTable />
        </div>
      )}
    </Box >
  );
};

export default EmployeeProfile;
