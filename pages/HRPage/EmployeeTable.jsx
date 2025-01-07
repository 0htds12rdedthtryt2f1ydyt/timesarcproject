import React, { useState } from "react";
import {
    Button,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    InputAdornment,
    Tooltip,
    TablePagination,
} from "@mui/material";
import { FiSearch, FiDownload } from "react-icons/fi";
import * as XLSX from "xlsx";

const EmployeeTable = () => {
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const tableHeaders = [
        "Emp ID",
        "Emp Name",
        "DOJ",
        "Gender",
        "DOB",
        "EmailID",
        "Status",
        "Confirmation Date",
        "Age",
        "Manager ID",
        "Manager Name",
        "Phone No",
        "Blood Group",
        "Employee Status",
        "PAN No",
        "UAN No",
        "Yrs in Service",
        "Tears in Service Range",
        "Total Rel Exp Range",
    ];

    const tableData = [
        {
            empId: "E001",
            empName: "John Doe",
            doj: "01/01/2020",
            gender: "Male",
            dob: "01/01/1990",
            emailId: "john.doe@example.com",
            status: "Active",
            confirmationDate: "01/07/2020",
            age: 33,
            managerId: "M001",
            managerName: "Michael Scott",
            phoneNo: "9876543210",
            bloodGroup: "O+",
            employeeStatus: "Permanent",
            panNo: "ABCDE1234F",
            uanNo: "123456789012",
            yrsInService: 3,
            tearsInServiceRange: "3-5 years",
            totalRelExpRange: "5-7 years",
        },
        {
            empId: "E002",
            empName: "Jane Smith",
            doj: "05/03/2018",
            gender: "Female",
            dob: "12/12/1985",
            emailId: "jane.smith@example.com",
            status: "Inactive",
            confirmationDate: "05/09/2018",
            age: 38,
            managerId: "M002",
            managerName: "Sarah Connor",
            phoneNo: "8765432109",
            bloodGroup: "A+",
            employeeStatus: "Permanent",
            panNo: "BCDEF2345G",
            uanNo: "234567890123",
            yrsInService: 6,
            tearsInServiceRange: "5-7 years",
            totalRelExpRange: "7-10 years",
        },
        {
            empId: "E003",
            empName: "Robert Brown",
            doj: "15/07/2021",
            gender: "Male",
            dob: "20/06/1992",
            emailId: "robert.brown@example.com",
            status: "Active",
            confirmationDate: "15/12/2021",
            age: 31,
            managerId: "M003",
            managerName: "Peter Parker",
            phoneNo: "7654321098    ",
            bloodGroup: "B+",
            employeeStatus: "Contract",
            panNo: "CDEFG3456H",
            uanNo: "345678901234",
            yrsInService: 2,
            tearsInServiceRange: "1-3 years",
            totalRelExpRange: "3-5 years",
        },
        {
            empId: "E004",
            empName: "Emily Davis",
            doj: "23/11/2019",
            gender: "Female",
            dob: "05/09/1991",
            emailId: "emily.davis@example.com",
            status: "Active",
            confirmationDate: "23/05/2020",
            age: 34,
            managerId: "M004",
            managerName: "Clark Kent",
            phoneNo: "6543210987",
            bloodGroup: "AB+",
            employeeStatus: "Permanent",
            panNo: "DEFGH4567I",
            uanNo: "456789012345",
            yrsInService: 4,
            tearsInServiceRange: "3-5 years",
            totalRelExpRange: "5-7 years",
        },
        {
            empId: "E005",
            empName: "Michael Wilson",
            doj: "12/04/2017",
            gender: "Male",
            dob: "14/03/1988",
            emailId: "michael.wilson@example.com",
            status: "Inactive",
            confirmationDate: "12/10/2017",
            age: 37,
            managerId: "M005",
            managerName: "Diana Prince",
            phoneNo: "8432109876",
            bloodGroup: "O-",
            employeeStatus: "Permanent",
            panNo: "EFGHI5678J",
            uanNo: "567890123456",
            yrsInService: 6,
            tearsInServiceRange: "5-7 years",
            totalRelExpRange: "7-10 years",
        },
        {
            empId: "E006",
            empName: "Laura Martinez",
            doj: "18/06/2022",
            gender: "Female",
            dob: "10/10/1994",
            emailId: "laura.martinez@example.com",
            status: "Active",
            confirmationDate: "18/12/2022",
            age: 29,
            managerId: "M006",
            managerName: "Bruce Wayne",
            phoneNo: "6789012345",
            bloodGroup: "A-",
            employeeStatus: "Contract",
            panNo: "FGHIJ6789K",
            uanNo: "678901234567",
            yrsInService: 1,
            tearsInServiceRange: "1-3 years",
            totalRelExpRange: "3-5 years",
        },
        {
            empId: "E007",
            empName: "William Anderson",
            doj: "30/09/2020",
            gender: "Male",
            dob: "08/08/1993",
            emailId: "william.anderson@example.com",
            status: "Active",
            confirmationDate: "30/03/2021",
            age: 32,
            managerId: "M007",
            managerName: "Natasha Romanoff",
            phoneNo: "7890123456",
            bloodGroup: "B-",
            employeeStatus: "Permanent",
            panNo: "GHIJK7890L",
            uanNo: "789012345678",
            yrsInService: 3,
            tearsInServiceRange: "3-5 years",
            totalRelExpRange: "5-7 years",
        },
        {
            empId: "E008",
            empName: "Sophia Lee",
            doj: "07/02/2019",
            gender: "Female",
            dob: "15/04/1990",
            emailId: "sophia.lee@example.com",
            status: "Inactive",
            confirmationDate: "07/08/2019",
            age: 35,
            managerId: "M008",
            managerName: "Steve Rogers",
            phoneNo: "8901234567",
            bloodGroup: "AB-",
            employeeStatus: "Contract",
            panNo: "HIJKL8901M",
            uanNo: "890123456789",
            yrsInService: 4,
            tearsInServiceRange: "3-5 years",
            totalRelExpRange: "5-7 years",
        },
        {
            empId: "E009",
            empName: "James Thomas",
            doj: "01/01/2016",
            gender: "Male",
            dob: "02/02/1985",
            emailId: "james.thomas@example.com",
            status: "Active",
            confirmationDate: "01/07/2016",
            age: 40,
            managerId: "M009",
            managerName: "Tony Stark",
            phoneNo: "9012345678",
            bloodGroup: "O+",
            employeeStatus: "Permanent",
            panNo: "IJKLM9012N",
            uanNo: "901234567890",
            yrsInService: 8,
            tearsInServiceRange: "7-10 years",
            totalRelExpRange: "10-12 years",
        },
        {
            empId: "E010",
            empName: "Isabella Garcia",
            doj: "19/05/2018",
            gender: "Female",
            dob: "30/09/1987",
            emailId: "isabella.garcia@example.com",
            status: "Active",
            confirmationDate: "19/11/2018",
            age: 36,
            managerId: "M010",
            managerName: "Thor Odinson",
            phoneNo: "9123456789",
            bloodGroup: "A+",
            employeeStatus: "Permanent",
            panNo: "JKLMN0123O",
            uanNo: "012345678901",
            yrsInService: 6,
            tearsInServiceRange: "5-7 years",
            totalRelExpRange: "7-10 years",
        },
    ];


    const filteredData = tableData.filter((row) =>
        Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
        XLSX.writeFile(workbook, "EmployeeData.xlsx");
    };

    return (
        <div style={{ marginTop: "25px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginBottom: "20px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <FiSearch />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Tooltip title="Export" arrow>
                    <IconButton
                        color="primary"
                        onClick={handleExport}
                        style={{ marginBottom: "10px" }}
                    >
                        <FiDownload />
                    </IconButton>
                </Tooltip>
            </div>
            <TableContainer component={Paper} style={{ overflowX: "auto" }}>
                <Table>
                    <TableHead>
                        <TableRow >
                            {tableHeaders.map((header) => (
                                <TableCell key={header}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.empId}</TableCell>
                                    <TableCell>{row.empName}</TableCell>
                                    <TableCell>{row.doj}</TableCell>
                                    <TableCell>{row.gender}</TableCell>
                                    <TableCell>{row.dob}</TableCell>
                                    <TableCell>{row.emailId}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.confirmationDate}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>{row.managerId}</TableCell>
                                    <TableCell>{row.managerName}</TableCell>
                                    <TableCell>{row.phoneNo}</TableCell>
                                    <TableCell>{row.bloodGroup}</TableCell>
                                    <TableCell>{row.employeeStatus}</TableCell>
                                    <TableCell>{row.panNo}</TableCell>
                                    <TableCell>{row.uanNo}</TableCell>
                                    <TableCell>{row.yrsInService}</TableCell>
                                    <TableCell>{row.tearsInServiceRange}</TableCell>
                                    <TableCell>{row.totalRelExpRange}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) =>
                    setRowsPerPage(parseInt(event.target.value, 10))
                }
            />
        </div>
    );
};

export default EmployeeTable;
