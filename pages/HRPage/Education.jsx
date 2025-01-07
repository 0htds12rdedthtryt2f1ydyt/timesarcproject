import React, { useState } from "react";
import {
    Button,
    Box,
    Typography,
    Card,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    TextField,
} from "@mui/material";

const Education = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [educationDetails, setEducationDetails] = useState({
        qualification: "",
        from: "",
        to: "",
        institute: "",
        grade: "",
        qualificationArea: "",
        remarks: "",
    });

    const qualificationOptions = ["B.E", "B.Tech", "BCA", "M.Tech", "MBA", "MCA"];
    const qualificationAreaOptions = ["IT", "Finance", "HR", "Marketing"];

    const handleInputChange = (key, value) => {
        setEducationDetails({ ...educationDetails, [key]: value });
    };

    const toggleEditing = () => setIsEditing(!isEditing);

    const handleSave = () => {
        console.log("Saved Data:", educationDetails);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEducationDetails({
            qualification: "",
            from: "",
            to: "",
            institute: "",
            grade: "",
            qualificationArea: "",
            remarks: "",
        });
        setIsEditing(false);
    };

    return (
        <Box>
            <Card style={{ marginTop: "30px", padding: "35px" }}>
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    <Box
                        sx={{
                            width: "4px",
                            height: "30px",
                            backgroundColor: "orange",
                            marginRight: "10px",
                        }}
                    />
                    Education
                </Typography>

                {!isEditing ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleEditing}
                        style={{ marginTop: "10px", backgroundColor: "#007bff" }}
                    >
                        Add
                    </Button>
                ) : (
                    <Box display="flex" flexDirection="column" gap="20px">
                        <Box display="flex" gap="20px" alignItems="center">
                            <Box>
                                <Typography>Qualification</Typography>
                                <FormControl style={{ width: "300px" }}>
                                    <InputLabel>Qualification</InputLabel>
                                    <Select
                                        value={educationDetails.qualification}
                                        onChange={(e) =>
                                            handleInputChange("qualification", e.target.value)
                                        }
                                    >
                                        {qualificationOptions.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <Typography>From</Typography>
                                <TextField
                                    placeholder="From Year"
                                    type="number"
                                    value={educationDetails.from}
                                    onChange={(e) => handleInputChange("from", e.target.value)}
                                    style={{ width: "200px" }}
                                />
                            </Box>
                            <Box>
                                <Typography>To</Typography>
                                <TextField
                                    placeholder="To Year"
                                    type="number"
                                    value={educationDetails.to}
                                    onChange={(e) => handleInputChange("to", e.target.value)}
                                    style={{ width: "200px" }}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <Typography>Institute</Typography>
                            <TextField
                                placeholder="Institute Name"
                                value={educationDetails.institute}
                                onChange={(e) => handleInputChange("institute", e.target.value)}
                                style={{ width: "600px" }}
                            />
                        </Box>

                        <Box>
                            <Typography>Grade</Typography>
                            <TextField
                                placeholder="Grade"
                                value={educationDetails.grade}
                                onChange={(e) => handleInputChange("grade", e.target.value)}
                                style={{ width: "600px" }}
                            />
                        </Box>

                        <Box>
                            <Typography>Qualification Area</Typography>
                            <FormControl style={{ width: "300px" }}>
                                <InputLabel>Qualification Area</InputLabel>
                                <Select
                                    value={educationDetails.qualificationArea}
                                    onChange={(e) =>
                                        handleInputChange("qualificationArea", e.target.value)
                                    }
                                >
                                    {qualificationAreaOptions.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography>Remarks</Typography>
                            <TextField
                                placeholder="Remarks"
                                value={educationDetails.remarks}
                                onChange={(e) => handleInputChange("remarks", e.target.value)}
                                multiline
                                rows={3}
                                style={{ width: "600px" }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="flex-end" gap="10px" mt={3}>
                            <Button variant="contained" color="primary" onClick={handleSave}>
                                Save
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                )}
            </Card>
        </Box>
    );
};

export default Education;
