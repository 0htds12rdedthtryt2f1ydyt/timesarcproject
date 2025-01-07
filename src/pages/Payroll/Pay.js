import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Mock data for payslips
const payslipData = [
    { paymentDate: "22/11/2024", startDate: "01/11/2024", endDate: "30/11/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_23_Nov 2024.pdf" },
    { paymentDate: "24/10/2024", startDate: "01/10/2024", endDate: "31/10/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_22_Oct 2024.pdf" },
    { paymentDate: "24/09/2024", startDate: "01/09/2024", endDate: "30/09/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_21_Sep 2024.pdf" },
    { paymentDate: "23/08/2024", startDate: "01/08/2024", endDate: "31/08/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_20_Aug 2024.pdf" },
    { paymentDate: "22/07/2024", startDate: "01/07/2024", endDate: "31/07/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_19_Aug 2024.pdf" },
    { paymentDate: "21/06/2024", startDate: "01/06/2024", endDate: "31/06/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_18_Aug 2024.pdf" },
    { paymentDate: "20/05/2024", startDate: "01/05/2024", endDate: "31/05/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_17_Aug 2024.pdf" },
    { paymentDate: "19/04/2024", startDate: "01/04/2024", endDate: "31/04/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_16_Aug 2024.pdf" },
    { paymentDate: "18/03/2024", startDate: "01/03/2024", endDate: "31/03/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_15_Aug 2024.pdf" },
    { paymentDate: "17/02/2024", startDate: "01/02/2024", endDate: "31/02/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_14_Aug 2024.pdf" },
    { paymentDate: "16/01/2024", startDate: "01/01/2024", endDate: "31/01/2024", company: "Timesarc", file: "SIM02761_3_MTCL_REGPAY_13_Aug 2024.pdf" },
];
const payslipData_table = [
    { paymentDate: "Timesarc private limited", startDate: "You receive a paper copy of payslips "},
];

export default function Pay() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", backgroundColor: "white", margin: 0, padding: 0 }}>
            {/* Tabs Box */}
            <Tabs
                value={value}
                onChange={handleChange}
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
                <Tab label="Payslips" />
                <Tab label="Other Documents" />
            </Tabs>

            {/* External Payslip Section */}
            {value === 0 && (
                <Box sx={{ padding: "0 20px", marginTop: "30px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
                    {/* Payslip Label Box */}
                    <Box sx={{ marginBottom: "20px" }}>
                        <h3 style={{ margin: "8px 0", fontWeight: 600 }}>Payslip Printing Details 1 item </h3>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company</TableCell>
                                    <TableCell>Payslip printing Details</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {payslipData_table.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.paymentDate}</TableCell>
                                        <TableCell>{row.startDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ marginBottom: "20px" }}>
                        <h3 style={{ margin: "8px 0", fontWeight: 600 }}>External Payslip 10 item</h3>
                    </Box>

                    {/* Payslip Table Box */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Payment Date</TableCell>
                                    <TableCell>Period Start Date</TableCell>
                                    <TableCell>Period End Date</TableCell>
                                    <TableCell>Company</TableCell>
                                    <TableCell>View Statement</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {payslipData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.paymentDate}</TableCell>
                                        <TableCell>{row.startDate}</TableCell>
                                        <TableCell>{row.endDate}</TableCell>
                                        <TableCell>{row.company}</TableCell>
                                        <TableCell>
                                            <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>
                                                {row.file}
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}

            {/* Other Documents Section */}
            {value === 1 && (
                <Box sx={{ padding: "0 16px" }}>
                    <h3 style={{ margin: "8px 0" }}>Other Documents</h3>
                    <p>No other documents available.</p>
                </Box>
            )}
        </Box>
    );
}
