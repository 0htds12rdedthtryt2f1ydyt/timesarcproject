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
    TextField, Checkbox, FormControlLabel
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import "../../style.css";

const Employeeidentity = () => {
    // section 2
    const [isPersonalEditing, setPersonalIsEditing] = useState(false);
    const filteredSchemeCategories = ["Driving License", "Election Card", "Labour Welfare Fund Number", "National Population Register", "Passport", "Permanent Retirement Account Number", "Ration Card"];
    const [schemecategory, setSchemeCategory] = useState("");
    const [dlDetails, setDlDetails] = useState({
        dlNumber: "",
        nameInDl: "",
        expiryDate: null,
        verified: false,
    });
    // marriagedate
    const handleSchemeCategoryChange = (event) => {
        setSchemeCategory(event.target.value);
    };

    const handleLicenceChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handleElectionChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handleLabourChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handleNationalChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handlePassportChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handleDlDetailsChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handlePermanentChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };
    const handleRationChange = (field, value) => {
        setDlDetails((prev) => ({ ...prev, [field]: value }));
    };

    const toggleEditing = () => {
        setPersonalIsEditing(!isPersonalEditing);
    };

    const handleSave = () => {
        console.log("Saved Data:", dlDetails);
        setPersonalIsEditing(false);
    };

    const handleCancel = () => {
        setSchemeCategory("");
        setDlDetails({ dlNumber: "", nameInDl: "", expiryDate: null, verified: false });
        setPersonalIsEditing(false);
    };

    return (
        <Box>
            <div>
                <Card style={{ marginTop: "30px", padding: "5px" }}>
                    <Box>
                        <Box style={{ marginTop: "25px" }} display="flex" alignItems="center" mb={2}>
                            <Typography variant="h5" sx={{ marginLeft: "30px", display: "flex", alignItems: "center" }}>
                                <Box sx={{ width: "4px", height: "30px", backgroundColor: "orange", marginRight: "8px" }} />
                                Employee Identity
                            </Typography>
                        </Box>
                        <Box style={{ marginLeft: "30px", marginBottom: "45px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div style={{ flex: 1 }}>
                                        {!isPersonalEditing ? (
                                            <div>
                                                <button
                                                    onClick={toggleEditing}
                                                    style={{
                                                        marginTop: "0px",
                                                        backgroundColor: "#007bff",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <FormControl style={{ marginBottom: "20px", width: "400px" }}>
                                                    <InputLabel htmlFor="category-select">Select</InputLabel>
                                                    <Select
                                                        value={schemecategory}
                                                        onChange={handleSchemeCategoryChange}
                                                        displayEmpty
                                                        MenuProps={{
                                                            PaperProps: {
                                                                style: {
                                                                    maxHeight: 200,
                                                                    overflowY: "auto",
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem disabled>
                                                            <em>Select Category</em>
                                                        </MenuItem>
                                                        {filteredSchemeCategories.map((cat, index) => (
                                                            <MenuItem key={index} value={cat}>
                                                                {cat}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>

                                                {schemecategory === "Driving License" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="ec-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    DL Number
                                                                </label>
                                                                <TextField
                                                                    value={dlDetails.dlNumber}
                                                                    onChange={(e) => handleDlDetailsChange("dlNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="ec-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in DL
                                                                </label>
                                                                <TextField
                                                                    value={dlDetails.nameInDl}
                                                                    onChange={(e) => handleDlDetailsChange("nameInDl", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="ec-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Expiry Date
                                                                </label>
                                                                <DatePicker
                                                                    value={dlDetails.expiryDate}
                                                                    onChange={(date) => handleDlDetailsChange("expiryDate", date)}
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            fullWidth
                                                                            InputProps={{
                                                                                style: {
                                                                                    height: "40px",
                                                                                },
                                                                            }}
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: "16px",
                                                                                    transform: "translate(0, -6px)",
                                                                                },
                                                                            }}
                                                                            style={{
                                                                                width: "100px",
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handleLicenceChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}

                                                {schemecategory === "Election Card" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="ec-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    EC Number
                                                                </label>
                                                                <TextField
                                                                    id="ec-number"
                                                                    value={dlDetails.ecNumber}
                                                                    onChange={(e) => handleDlDetailsChange("ecNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-ec"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in EC
                                                                </label>
                                                                <TextField
                                                                    id="name-in-ec"
                                                                    value={dlDetails.nameInEc}
                                                                    onChange={(e) => handleDlDetailsChange("nameInEc", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handleElectionChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                {schemecategory === "Labour Welfare Fund Number" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="lwf-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    LWF Number
                                                                </label>
                                                                <TextField
                                                                    id="lwf-number"
                                                                    value={dlDetails.lwfNumber}
                                                                    onChange={(e) => handleDlDetailsChange("lwfNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-lwf"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in LWF
                                                                </label>
                                                                <TextField
                                                                    id="name-in-lwf"
                                                                    value={dlDetails.nameInLwf}
                                                                    onChange={(e) => handleDlDetailsChange("nameInLwf", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handleLabourChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                {schemecategory === "National Population Register" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="lwf-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    NPR Number
                                                                </label>
                                                                <TextField
                                                                    id="lwf-number"
                                                                    value={dlDetails.nprNumber}
                                                                    onChange={(e) => handleDlDetailsChange("nprNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-lwf"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in NPR
                                                                </label>
                                                                <TextField
                                                                    id="name-in-lwf"
                                                                    value={dlDetails.nameInNPR}
                                                                    onChange={(e) => handleDlDetailsChange("nameInNPR", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handleNationalChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                {schemecategory === "Passport" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="lwf-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Passport Number
                                                                </label>
                                                                <TextField
                                                                    id="lwf-number"
                                                                    value={dlDetails.PassportNumber}
                                                                    onChange={(e) => handleDlDetailsChange("PassportNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-lwf"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in Passport

                                                                </label>
                                                                <TextField
                                                                    id="name-in-lwf"
                                                                    value={dlDetails.nameInPassport}
                                                                    onChange={(e) => handleDlDetailsChange("nameInPassport", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="ec-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Expiry Date
                                                                </label>
                                                                <DatePicker
                                                                    value={dlDetails.expiryDate}
                                                                    onChange={(date) => handleDlDetailsChange("expiryDate", date)}
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            fullWidth
                                                                            InputProps={{
                                                                                style: {
                                                                                    height: "40px",
                                                                                },
                                                                            }}
                                                                            InputLabelProps={{
                                                                                style: {
                                                                                    fontSize: "16px",
                                                                                    transform: "translate(0, -6px)",
                                                                                },
                                                                            }}
                                                                            style={{
                                                                                width: "100px",
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handlePassportChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                {schemecategory === "Permanent Retirement Account Number" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="lwf-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    PRAN
                                                                </label>
                                                                <TextField
                                                                    id="lwf-number"
                                                                    value={dlDetails.PRAN}
                                                                    onChange={(e) => handleDlDetailsChange("PRAN", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-lwf"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in PRAN
                                                                </label>
                                                                <TextField
                                                                    id="name-in-lwf"
                                                                    value={dlDetails.nameInPRAN}
                                                                    onChange={(e) => handleDlDetailsChange("nameInPRAN", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handlePermanentChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                {schemecategory === "Ration Card" && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                        <div style={{ display: "flex", gap: "40px" }}>
                                                            <div>
                                                                <label
                                                                    htmlFor="lwf-number"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    RC Number
                                                                </label>
                                                                <TextField
                                                                    id="lwf-number"
                                                                    value={dlDetails.RCNumber
                                                                    }
                                                                    onChange={(e) => handleDlDetailsChange("RCNumber", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    htmlFor="name-in-lwf"
                                                                    style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                                                >
                                                                    Name in RC
                                                                </label>
                                                                <TextField
                                                                    id="name-in-lwf"
                                                                    value={dlDetails.nameInRC}
                                                                    onChange={(e) => handleDlDetailsChange("nameInRC", e.target.value)}
                                                                    fullWidth
                                                                    InputProps={{
                                                                        style: {
                                                                            height: "40px",
                                                                        },
                                                                    }}
                                                                    InputLabelProps={{
                                                                        style: {
                                                                            fontSize: "16px",
                                                                        },
                                                                    }}
                                                                    style={{
                                                                        width: "300px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={dlDetails.verified}
                                                                    onChange={(e) => handleRationChange("verified", e.target.checked)}
                                                                />
                                                            }
                                                            label="Document Verified"
                                                        />
                                                    </div>
                                                )}
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        width: "95%",
                                                        marginTop: "20px",
                                                        justifyContent: "flex-end",
                                                    }}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleSave}
                                                        style={{ minWidth: "100px" }}
                                                    >
                                                        Save
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        color="secondary"
                                                        onClick={handleCancel}
                                                        style={{ minWidth: "100px" }}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </LocalizationProvider>
                            </div>
                        </Box>
                    </Box>
                </Card >
            </div >
        </Box >
    );
};

export default Employeeidentity;
