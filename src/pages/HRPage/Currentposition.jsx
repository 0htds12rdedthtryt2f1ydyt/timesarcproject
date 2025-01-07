import React, { useState } from "react";
import {
    Button,
    TextField,
    Box,
    Typography,
    Card,
    IconButton,
    Modal,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { FiEdit } from "react-icons/fi";
import "../../style.css";
import { FaEdit } from "react-icons/fa";

const Currentposition = () => {

    const personalData = {
        dob: "01 Jul 2022",
        birthday: "08 Aug",
        bloodGroup: "B+",
        fathername: "Bhaskar",
        status: "Probation",
        location: "Bangalore",
        marriagedate: "29 Sep 2022",
        reporting: "Lipika Jena [T0014]",
        scheme: "Probation Scheme",
        Department: "Operations",
        Designation: "Quality Assurance Manager",
        Grade: "G1",
    };
    // section 2
    const [isPersonalEditing, setPersonalIsEditing] = useState(false);
    const [personalFormData, setPersonalFormData] = useState(personalData);
    const [personaloriginalData, setPersonalOriginal] = useState(personalData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
    const [isSchemeModalOpen, setIsSchemeModalOpen] = useState(false);
    const [isModalEditOpen, setIsEditOpen] = useState(false);
    const [isGradeEditOpen, setIsGradeEditOpen] = useState(false);
    const [isDepartmentEditOpen, setIsDepartmentEditOpen] = useState(false);
    const [isLocationEditOpen, setIsLocationEditOpen] = useState(false);
    const [isSchemeEditOpen, setIsSchemeEditOpen] = useState(false);

    //designation
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    //grade
    const handleGradeOpenModal = () => {
        setIsGradeModalOpen(true);
    };

    const handleGradeCloseModal = () => {
        setIsGradeModalOpen(false);
    };
    //department
    const handleDepartmentOpenModal = () => {
        setIsDepartmentModalOpen(true);
    };
    const handleDepartmentCloseModal = () => {
        setIsDepartmentModalOpen(false);
    };
    //Location
    const handleLocationOpenModal = () => {
        setIsLocationModalOpen(true);
    };
    const handleLocationCloseModal = () => {
        setIsLocationModalOpen(false);
    };
    //Scheme
    const handleSchemeOpenModal = () => {
        setIsSchemeModalOpen(true);
    };
    const handleSchemeCloseModal = () => {
        setIsSchemeModalOpen(false);
    };
    // edits
    const handleEditClose = () => {
        setIsEditOpen(false);
    };
    const handleGradeEditClose = () => {
        setIsGradeEditOpen(false);
    };
    const handleDepartmentEditClose = () => {
        setIsDepartmentEditOpen(false);
    };
    const handleLocationEditClose = () => {
        setIsLocationEditOpen(false);
    };
    const handleSchemeEditClose = () => {
        setIsSchemeEditOpen(false);
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

    const [category, setCategory] = useState("");
    const [schemecategory, setSchemeCategory] = useState("");
    const [locationcategory, setLocationCategory] = useState("");
    const [departmentcategory, setDepartmentCategory] = useState("");
    const [gradecategory, setGradeCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [
        "Accounts Executive",
        "Business Development Executive",
        "Business Development Manager",
        "Director",
        "Finance Manager",
        "HR Director",
        "HR Executive",
        "HR Manager",
        "IT Specialist",
        "Marketing Manager",
        "Sales Executive",
    ];
    const departmentcategories = [
        "Development",
        "Facilities",
        "Finance",
        "HR",
        "Management",
        "Operations",
        "Sales",
        "Products",
    ];
    const gradecategories = [
        "G1",
        "G2",
        "G3",
        "G4",
        "G5",
    ];
    const locationcategories = [
        "Bangalore",
        "Bellery",
        "Bider",
        "Calicut",
        "Chennai",
        "Cochin",
        "Davangere",
        "Delhi",
        "Hyderabad",
        "Mumbai",
        "Tirupati",
        "Vijayawada",
    ];
    const schemecategories = [
        "Contract Employees",
        "General Scheme",
        "Probation Scheme",
        "Trainee Scheme",
    ];

    // Filter categories based on the search term
    const filteredCategories = categories.filter((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredDepartmentCategories = departmentcategories.filter((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredGradeCategories = gradecategories.filter((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredLocationCategories = locationcategories.filter((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredSchemeCategories = schemecategories.filter((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleGradeCategoryChange = (event) => {
        setGradeCategory(event.target.value);
    };
    const handleDepartmentCategoryChange = (event) => {
        setDepartmentCategory(event.target.value);
    };
    const handleLocationCategoryChange = (event) => {
        setLocationCategory(event.target.value);
    };
    const handleSchemeCategoryChange = (event) => {
        setSchemeCategory(event.target.value);
    };

    const handleEditModal = () => setIsEditOpen(true);
    const handleGradeEditModal = () => setIsGradeEditOpen(true);
    const handleDepartmentEditModal = () => setIsDepartmentEditOpen(true);
    const handleLocationEditModal = () => setIsLocationEditOpen(true);
    const handleSchemeEditModal = () => setIsSchemeEditOpen(true);
    // const handleEditModal = () => setIsEditOpen(true);
    const handleDelete = () => {
        alert("Designation deleted successfully!");
        handleCloseModal();
    };
    const handleDepartmentDelete = () => {
        alert("Designation deleted successfully!");
        handleDepartmentCloseModal();
    };
    const handleLocationDelete = () => {
        alert("Designation deleted successfully!");
        handleLocationCloseModal();
    };
    const handleSchemeDelete = () => {
        alert("Designation deleted successfully!");
        handleSchemeCloseModal();
    };


    return (
        <Box>
            <div>
                <Card style={{ marginTop: "30px", padding: "5px" }}>
                    <Box>
                        <Box style={{ marginTop: "25px" }} display="flex" alignItems="center" mb={2}>
                            <Typography variant="h5" sx={{ marginLeft: "30px", display: "flex", alignItems: "center" }}>
                                <Box sx={{ width: "4px", height: "30px", backgroundColor: "orange", marginRight: "8px" }} />
                                Current Position
                            </Typography>
                            {!isPersonalEditing && (
                                <IconButton sx={{ color: "blueviolet", marginTop: "5px" }} onClick={handlePersonalEditClick}>
                                    <FiEdit />
                                </IconButton>
                            )}
                        </Box>
                        <Box style={{ marginLeft: "30px", marginBottom: "45px" }}>
                            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                                <div style={{ flex: 1 }}>
                                    {!isPersonalEditing ? (
                                        <>
                                            <label
                                                htmlFor="Department"
                                                style={{
                                                    display: "block",
                                                    marginBottom: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Department
                                            </label>
                                            <Typography>{personalFormData.Department}</Typography>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                width: "300px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    Department
                                                </span>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "1px solid #007bff",
                                                        borderRadius: "4px",
                                                        padding: "4px 8px",
                                                        cursor: "pointer",
                                                        color: "#007bff",
                                                    }}
                                                    onClick={handleDepartmentOpenModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div style={{ marginTop: "12px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div>
                                                        <Typography
                                                            style={{
                                                                color: "#4CAF50",
                                                                fontSize: "16px",
                                                                marginBottom: "4px",
                                                            }}
                                                        >
                                                            Operations
                                                        </Typography>
                                                    </div>
                                                    <div style={{ marginLeft: "155px" }}>
                                                        <FaEdit
                                                            onClick={handleDepartmentEditModal}
                                                            style={{
                                                                cursor: "pointer",
                                                                color: "#555",
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <Typography style={{ color: "#555", fontSize: "12px" }}>
                                                    02 Jan 2025
                                                </Typography>
                                            </div>
                                            <Modal open={isDepartmentModalOpen} onClose={handleDepartmentCloseModal}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Add Department</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div><label>Category Type</label></div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}><Typography value="Designation">Department</Typography></div>
                                                    </div>
                                                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                                                        <InputLabel htmlFor="category-select">Category</InputLabel>
                                                        <Select
                                                            value={departmentcategory}
                                                            onChange={handleDepartmentCategoryChange}
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
                                                            </MenuItem>
                                                            {filteredDepartmentCategories.map((cat, index) => (
                                                                <MenuItem key={index} value={cat}>
                                                                    {cat}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="contained" color="primary" onClick={handleDepartmentCloseModal}>
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleDepartmentCloseModal}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={isDepartmentEditOpen} onClose={handleDepartmentEditClose}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Edit Department</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category Type</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Department">Department</Typography>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Operations</Typography>
                                                        </div>
                                                    </div>

                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />

                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />

                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                alert("Designation saved successfully!");
                                                                handleDepartmentEditClose();
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleDepartmentEditClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="outlined" color="error" onClick={handleDepartmentDelete}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                    {!isPersonalEditing ? (
                                        <>
                                            <label
                                                htmlFor="Designation"
                                                style={{
                                                    display: "block",
                                                    marginBottom: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Designation
                                            </label>
                                            <Typography>{personalFormData.Designation}</Typography>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                width: "300px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    Designation
                                                </span>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "1px solid #007bff",
                                                        borderRadius: "4px",
                                                        padding: "4px 8px",
                                                        cursor: "pointer",
                                                        color: "#007bff",
                                                    }}
                                                    onClick={handleOpenModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div style={{ marginTop: "12px" }}>
                                                <div style={{ marginTop: "12px", display: "flex" }}>
                                                    <div>
                                                        <Typography
                                                            style={{
                                                                color: "#4CAF50",
                                                                fontSize: "16px",
                                                                marginBottom: "4px",
                                                            }}
                                                        >
                                                            Quality Assurance Manager
                                                        </Typography>
                                                    </div>
                                                    <div style={{ marginLeft: "30px" }}>
                                                        <FaEdit
                                                            onClick={handleEditModal}
                                                            style={{
                                                                cursor: "pointer",
                                                                color: "#555",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <Typography style={{ color: "#555", fontSize: "12px" }}>
                                                    02 Jan 2025
                                                </Typography>
                                            </div>
                                            <Modal open={isModalOpen} onClose={handleCloseModal}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Add Designation</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div><label>Category Type</label></div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}><Typography value="Designation">Designation</Typography></div>
                                                    </div>
                                                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                                                        <InputLabel htmlFor="category-select">Category</InputLabel>
                                                        <Select
                                                            value={category}
                                                            onChange={handleCategoryChange}
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
                                                            </MenuItem>
                                                            {filteredCategories.map((cat, index) => (
                                                                <MenuItem key={index} value={cat}>
                                                                    {cat}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="contained" color="primary" onClick={handleCloseModal}>
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleCloseModal}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={isModalEditOpen} onClose={handleEditClose}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Edit Designation</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category Type</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Designation</Typography>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Quality Assurance Manager</Typography>
                                                        </div>
                                                    </div>

                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />

                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />

                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                alert("Designation saved successfully!");
                                                                handleEditClose();
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleEditClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="outlined" color="error" onClick={handleDelete}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                    {!isPersonalEditing ? (
                                        <>
                                            <label
                                                htmlFor="Grade"
                                                style={{
                                                    display: "block",
                                                    marginBottom: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Grade
                                            </label>
                                            <Typography>{personalFormData.Grade}</Typography>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                width: "300px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    Grade
                                                </span>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "1px solid #007bff",
                                                        borderRadius: "4px",
                                                        padding: "4px 8px",
                                                        cursor: "pointer",
                                                        color: "#007bff",
                                                    }}
                                                    onClick={handleGradeOpenModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div style={{ marginTop: "12px" }}>
                                                <div style={{ marginTop: "12px", display: "flex" }}>
                                                    <div>
                                                        <Typography
                                                            style={{
                                                                color: "#4CAF50",
                                                                fontSize: "16px",
                                                                marginBottom: "4px",
                                                            }}
                                                        >
                                                            Grade
                                                        </Typography>
                                                    </div>
                                                    <div style={{ marginLeft: "190px" }}>
                                                        <FaEdit
                                                            onClick={handleGradeEditModal}
                                                            style={{
                                                                cursor: "pointer",
                                                                color: "#555",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <Typography style={{ color: "#555", fontSize: "12px" }}>
                                                    02 Jan 2025
                                                </Typography>
                                            </div>
                                            <Modal open={isGradeModalOpen} onClose={handleGradeCloseModal}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Add Grade</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div><label>Category Type</label></div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}><Typography value="Designation">Grade</Typography></div>
                                                    </div>
                                                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                                                        <InputLabel htmlFor="category-select">Category</InputLabel>
                                                        <Select
                                                            value={gradecategory}
                                                            onChange={handleGradeCategoryChange}
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
                                                            </MenuItem>
                                                            {filteredGradeCategories.map((cat, index) => (
                                                                <MenuItem key={index} value={cat}>
                                                                    {cat}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="contained" color="primary" onClick={handleGradeCloseModal}>
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleGradeCloseModal}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={isGradeEditOpen} onClose={handleGradeEditClose}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Edit Grade</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category Type</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Grade</Typography>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">G1</Typography>
                                                        </div>
                                                    </div>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                alert("Designation saved successfully!");
                                                                handleGradeEditClose();
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleGradeEditClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="outlined" color="error" onClick={handleDelete}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                    {!isPersonalEditing ? (
                                        <>
                                            <label
                                                htmlFor="location"
                                                style={{
                                                    display: "block",
                                                    marginBottom: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Location
                                            </label>
                                            <Typography>{personalFormData.location}</Typography>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                width: "300px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    Location
                                                </span>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "1px solid #007bff",
                                                        borderRadius: "4px",
                                                        padding: "4px 8px",
                                                        cursor: "pointer",
                                                        color: "#007bff",
                                                    }}
                                                    onClick={handleLocationOpenModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div style={{ marginTop: "12px" }}>
                                                <div style={{ marginTop: "12px", display: "flex" }}>
                                                    <div>
                                                        <Typography
                                                            style={{
                                                                color: "#4CAF50",
                                                                fontSize: "16px",
                                                                marginBottom: "4px",
                                                            }}
                                                        >
                                                            Location
                                                        </Typography>
                                                    </div>
                                                    <div style={{ marginLeft: "175px" }}>
                                                        <FaEdit
                                                            onClick={handleLocationEditModal}
                                                            style={{
                                                                cursor: "pointer",
                                                                color: "#555",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <Typography style={{ color: "#555", fontSize: "12px" }}>
                                                    02 Jan 2025
                                                </Typography>
                                            </div>
                                            <Modal open={isLocationModalOpen} onClose={handleLocationCloseModal}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Add Location</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div><label>Category Type</label></div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}><Typography value="Designation">Location</Typography></div>
                                                    </div>
                                                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                                                        <InputLabel htmlFor="category-select">Category</InputLabel>
                                                        <Select
                                                            value={locationcategory}
                                                            onChange={handleLocationCategoryChange}
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
                                                            </MenuItem>
                                                            {filteredLocationCategories.map((cat, index) => (
                                                                <MenuItem key={index} value={cat}>
                                                                    {cat}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="contained" color="primary" onClick={handleLocationCloseModal}>
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleLocationCloseModal}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={isLocationEditOpen} onClose={handleLocationEditClose}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Edit Location</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category Type</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Location</Typography>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Bangalore</Typography>
                                                        </div>
                                                    </div>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                alert("Designation saved successfully!");
                                                                handleLocationEditClose();
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleLocationEditClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="outlined" color="error" onClick={handleLocationDelete}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div style={{ flex: 1 }}>
                                    {!isPersonalEditing ? (
                                        <>
                                            <label
                                                htmlFor="scheme"
                                                style={{
                                                    display: "block",
                                                    marginBottom: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Attendance Scheme
                                            </label>
                                            <Typography>{personalFormData.scheme}</Typography>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: "16px",
                                                width: "300px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    Attendance Scheme
                                                </span>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "1px solid #007bff",
                                                        borderRadius: "4px",
                                                        padding: "4px 8px",
                                                        cursor: "pointer",
                                                        color: "#007bff",
                                                    }}
                                                    onClick={handleSchemeOpenModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div style={{ marginTop: "12px" }}>
                                                <div style={{ marginTop: "12px", display: "flex" }}>
                                                    <div>
                                                        <Typography
                                                            style={{
                                                                color: "#4CAF50",
                                                                fontSize: "16px",
                                                                marginBottom: "4px",
                                                            }}
                                                        >
                                                            Attendance Scheme
                                                        </Typography>
                                                    </div>
                                                    <div style={{ marginLeft: "85px" }}>
                                                        <FaEdit
                                                            onClick={handleSchemeEditModal}
                                                            style={{
                                                                cursor: "pointer",
                                                                color: "#555",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <Typography style={{ color: "#555", fontSize: "12px" }}>
                                                    02 Jan 2025
                                                </Typography>
                                            </div>
                                            <Modal open={isSchemeModalOpen} onClose={handleSchemeCloseModal}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Add Attendance Scheme</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div><label>Category Type</label></div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}><Typography value="Designation">Attendance Scheme</Typography></div>
                                                    </div>
                                                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                                                        <InputLabel htmlFor="category-select">Category</InputLabel>
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
                                                            </MenuItem>
                                                            {filteredSchemeCategories.map((cat, index) => (
                                                                <MenuItem key={index} value={cat}>
                                                                    {cat}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="contained" color="primary" onClick={handleSchemeCloseModal}>
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleSchemeCloseModal}>
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={isSchemeEditOpen} onClose={handleSchemeEditClose}>
                                                <div
                                                    style={{
                                                        background: "white",
                                                        padding: "20px",
                                                        margin: "10% auto",
                                                        borderRadius: "8px",
                                                        width: "400px",
                                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <h2 style={{ marginBottom: "20px" }}>Edit Attendance Scheme</h2>
                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category Type</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Attendance Scheme</Typography>
                                                        </div>
                                                    </div>

                                                    <div style={{ marginBottom: "20px", display: "flex" }}>
                                                        <div>
                                                            <label>Category</label>
                                                        </div>
                                                        <div style={{ marginLeft: "30px", color: "black" }}>
                                                            <Typography value="Designation">Probation Scheme</Typography>
                                                        </div>
                                                    </div>
                                                    <TextField
                                                        fullWidth
                                                        label="Effective From"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        label="Effective To"
                                                        type="date"
                                                        InputLabelProps={{ shrink: true }}
                                                        style={{ marginBottom: "20px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                alert("Designation saved successfully!");
                                                                handleSchemeEditClose();
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button variant="outlined" onClick={handleSchemeEditClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="outlined" color="error" onClick={handleSchemeDelete}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                                <div style={{ flex: 1, marginRight: "370px" }}>
                                    {!isPersonalEditing && (
                                        <label
                                            htmlFor="reporting"
                                            style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
                                        >
                                            Reporting To
                                        </label>
                                    )}
                                    {!isPersonalEditing ? (
                                        personalFormData.reporting ? (
                                            <Typography>{personalFormData.reporting}</Typography>
                                        ) : (
                                            <></>
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div style={{ flex: 1 }}>
                                </div>
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

export default Currentposition;
