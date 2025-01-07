import React, { useState } from "react";
import {
    Button,
    TextField,
    Box,
    Typography,
    Card,
    MenuItem,
    Select,
    FormControl,
    IconButton,
    InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FiEdit } from "react-icons/fi";
import dayjs from "dayjs";
import "../../style.css";

const Remarks = () => {
    const [educationDetails, setEducationDetails] = useState({
        remarks: "",
    });
    const handleInputChange = (key, value) => {
        setEducationDetails({ ...educationDetails, [key]: value });
    };
    const personalData = {
        dob: "01 Jul 2022",
        birthday: "08 Aug",
        status: "Verified",
        noticeperiod: "VerifyTrust Solutions",
        remarks: "Verified",
    };
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
    // marriagedate
    const [status, setStatus] = useState('');
    const statuses = ["Cancelled", "Intiated", "On Hold", "Partially Verified", "Pending", "Rejected", "Verified"];
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
                                Remarks
                            </Typography>
                            {!isPersonalEditing && (
                                <IconButton sx={{ color: "blueviolet", marginTop: "5px" }} onClick={handlePersonalEditClick}>
                                    <FiEdit />
                                </IconButton>
                            )}
                        </Box>
                        <Box style={{ marginLeft: "30px", marginBottom: "45px" }}>
                            <div style={{ flex: 1, marginTop: "15px", }}>
                                {!isPersonalEditing ? (
                                    <Typography></Typography>
                                ) : (
                                    <TextField
                                        placeholder="Remarks"
                                        onChange={(e) => handleInputChange("remarks", e.target.value)}
                                        multiline
                                        rows={3}
                                        style={{ width: "600px" }}
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
            </div>
        </Box >
    );
};

export default Remarks;
