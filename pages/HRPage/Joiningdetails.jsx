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
import { FiEdit } from "react-icons/fi";
import dayjs from "dayjs";
import "../../style.css";

const Joiningdetails = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [employeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });
    const [errors, setErrors] = useState({});
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
        gender: "Male",
        name: "John Doe",
        username: "John.doe",
        mobile: "123-456-7890",
        email: "john.doe@example.com",
        extension: "101"
    };
    const personalData = {
        dob: "01 Jul 2022",
        birthday: "08 Aug",
        bloodGroup: "B+",
        fathername: "Bhaskar",
        status: "Probation",
        probationperiod: "90days",
        marriagedate: "29 Sep 2022",
        spousename: "2Y 6M",
        noticeperiod: "45 days",
        nationality: "-",
        totalexperience: "2Y 6M",
    };
    const [formData, setFormData] = useState(initialData);
    const [originalData, setOriginalData] = useState(initialData);
    // section 2
    const [isPersonalEditing, setPersonalIsEditing] = useState(false);
    const [personalFormData, setPersonalFormData] = useState(personalData);
    const [personaloriginalData, setPersonalOriginal] = useState(personalData);
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePersonalEditClick = () => {
        setPersonalIsEditing(!isPersonalEditing);
    };
    const handlePersonalCancel = () => {
        setPersonalIsEditing(false);
        setPersonalFormData(personaloriginalData);
    };

    // Save the changes
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

    const birthdayParts = personalData.birthday.split(" ");
    // marriagedate
    const [status, setStatus] = useState('');
    const statuses = ["Confirmed", "Contract", "Probation", "Trainee"];
    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;
        setStatus(updatedStatus);
        setPersonalFormData((prevData) => ({
            ...prevData,
            status: updatedStatus,
        }));
    };

    return (
        <Box>
            <div>
                <Card style={{ marginTop: "30px", padding: "5px" }}>
                    <Box>
                        <Box style={{ marginTop: "25px" }} display="flex" alignItems="center" mb={2}>
                            <Typography variant="h5" sx={{ marginLeft: "30px", display: "flex", alignItems: "center" }}>
                                <Box sx={{ width: "4px", height: "30px", backgroundColor: "orange", marginRight: "8px" }} />
                                Joining Details
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
                                            DOJ
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div sx={{ height: "30px" }} style={{ flex: 1 }}>
                                        <label
                                            htmlFor="marriagedate"
                                            style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                        >
                                            Confirmation Date
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
                                <div style={{ flex: 1 }}>
                                    <label
                                        htmlFor="status"
                                        style={{
                                            display: "block",
                                            marginBottom: "10px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Status
                                    </label>
                                    {!isPersonalEditing ? (
                                        <Typography>{personalFormData.status}</Typography>
                                    ) : (
                                        <FormControl
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                            style={{
                                                minWidth: 200,
                                                maxWidth: 300,
                                            }}
                                        >
                                            <InputLabel id="status-label">Status</InputLabel>
                                            <Select
                                                labelId="status-label"
                                                id="status"
                                                value={personalFormData.status}
                                                onChange={handleStatusChange}
                                                MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            maxHeight: 200,
                                                            minWidth: 200,
                                                        },
                                                    },
                                                }}
                                            >
                                                {statuses.map((status, index) => (
                                                    <MenuItem key={index} value={status}>
                                                        {status}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="probationperiod" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                                        Probation Period
                                    </label>
                                    {!isPersonalEditing ? (
                                        <Typography>{personalFormData.probationperiod}</Typography>
                                    ) : (
                                        <FormControl fullWidth variant="outlined" size="small">
                                            <InputLabel id="probationperiod-label">Probation Period</InputLabel>
                                            <Select
                                                labelId="probationperiod-label"
                                                id="probationperiod"
                                                name="probationperiod"
                                                value={personalFormData.probationperiod}
                                                onChange={handlePersonalChange}
                                                label="Probation Period"
                                            >
                                                <MenuItem value="30days">30 days</MenuItem>
                                                <MenuItem value="60days">60 days</MenuItem>
                                                <MenuItem value="90days">90 days</MenuItem>
                                                <MenuItem value="120days">120 days</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="noticeperiod" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                                        Notice Period
                                    </label>
                                    {!isPersonalEditing ? (
                                        <Typography>{personalFormData.noticeperiod}</Typography>
                                    ) : (
                                        <TextField
                                            id="noticeperiod"
                                            name="noticeperiod"
                                            value={personalFormData.noticeperiod}
                                            onChange={handlePersonalChange}
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                        />
                                    )}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <label htmlFor="spousename" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                                        Current Company Experience
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

                                <div style={{ flex: 1 }}>
                                    <label htmlFor="nationality" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                                        Previous Experience
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
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="totalexperience" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                                        Total Experience
                                    </label>
                                    {!isPersonalEditing ? (
                                        <Typography>{personalFormData.totalexperience}</Typography>
                                    ) : (
                                        <TextField
                                            id="totalexperience"
                                            name="totalexperience"
                                            value={personalFormData.totalexperience}
                                            onChange={handlePersonalChange}
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                        />
                                    )}
                                </div>
                            </div>
                            <div style={{ flex: 1, marginTop: "15px", }}>
                                <label htmlFor="totalexperience" style={{ display: "block", marginBottom: "15px", fontWeight: "bold" }}>
                                    Referred By
                                </label>
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
            </div>
        </Box >
    );
};

export default Joiningdetails;
