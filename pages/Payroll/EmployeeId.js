// import React, { useState } from 'react';

// const PaySlip = () => {
//   const [employeeDetails, setEmployeeDetails] = useState({
//     name: 'Selvam R',
//     employeeNo: 'DT2210001',
//     program: 'Software Engineer',
//     designation: 'IT - Operations',
//     dateOfJoining: '2-Nov-22',
//     totalDays: 31,
//     lossOfPay: 0,
//     bankAccountNumber: 'YES BANK 062999500024485',
//     location: 'Chennai',
//     date: '5-Aug-24',
//   });

//   const earnings = {
//     basic: 6000,
//     hra: 4000,
//     conveyanceAllowance: 2500,
//     specialAllowance: 1500,
//   };

//   const deductions = {
//     tds: 0,
//     lop: 0,
//   };

//   const grossEarnings = Object.values(earnings).reduce((acc, value) => acc + value, 0);
//   const totalDeductions = Object.values(deductions).reduce((acc, value) => acc + value, 0);
//   const netPay = grossEarnings - totalDeductions;

//   return (
//     <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h2>Digital Triumph</h2>
//         <h3>Pay Slip For The Month Of July 2024</h3>
//       </div>

//       <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
//               DIGITAL TRIUMPH PRIVATE LIMITED
//             </th>
//           </tr>
//           <tr>
//             <th colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
//               Regd. Office: OLD NO 13 NEW NO: AC149, 3RD FLOOR, AC BLOCK, Anna Nagar, Chennai -40,
//               TAMILNADU, INDIA
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ width: '50%' }}>
//               <table style={{ width: '100%' }}>
//                 <tbody>
//                   <tr>
//                     <td>Employee Name:</td>
//                     <td>{employeeDetails.name}</td>
//                   </tr>
//                   <tr>
//                     <td>Employee No.:</td>
//                     <td>{employeeDetails.employeeNo}</td>
//                   </tr>
//                   <tr>
//                     <td>Program / Department:</td>
//                     <td>{employeeDetails.program}</td>
//                   </tr>
//                   <tr>
//                     <td>Designation:</td>
//                     <td>{employeeDetails.designation}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>

//             <td style={{ width: '50%' }}>
//               <table style={{ width: '100%' }}>
//                 <tbody>
//                   <tr>
//                     <td>Date of Joining:</td>
//                     <td>{employeeDetails.dateOfJoining}</td>
//                   </tr>
//                   <tr>
//                     <td>Total Days in the Month:</td>
//                     <td>{employeeDetails.totalDays}</td>
//                   </tr>
//                   <tr>
//                     <td>Loss of Pay (in days):</td>
//                     <td>{employeeDetails.lossOfPay}</td>
//                   </tr>
//                   <tr>
//                     <td>Bank Account Number:</td>
//                     <td>{employeeDetails.bankAccountNumber}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ width: '70%' }}>Earnings</th>
//             <th style={{ width: '30%' }}>Amount (Rs.)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Basic</td>
//             <td>{earnings.basic}</td>
//           </tr>
//           <tr>
//             <td>HRA</td>
//             <td>{earnings.hra}</td>
//           </tr>
//           <tr>
//             <td>Conveyance Allowance</td>
//             <td>{earnings.conveyanceAllowance}</td>
//           </tr>
//           <tr>
//             <td>Special Allowance</td>
//             <td>{earnings.specialAllowance}</td>
//           </tr>
//           <tr>
//             <th colSpan="2" style={{ textAlign: 'right' }}>
//               GROSS EARNINGS (A) : {grossEarnings}
//             </th>
//           </tr>
//         </tbody>
//       </table>
//       <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ width: '70%' }}>Deductions</th>
//             <th style={{ width: '30%' }}>Amount (Rs.)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>TDS</td>
//             <td>{deductions.tds}</td>
//           </tr>
//           <tr>
//             <td>LOP</td>
//             <td>{deductions.lop}</td>
//           </tr>
//           <tr>
//             <th colSpan="2" style={{ textAlign: 'right' }}>
//               TOTAL DEDUCTIONS (B) : {totalDeductions}
//             </th>
//           </tr>
//         </tbody>
//       </table>

//       <h3>NET PAY (A) - (B)</h3>
//       <p><strong>{netPay}</strong></p>

//       <footer style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px' }}>
//         This is a Computer generated slip and does not require signature.
//       </footer>
//     </div>
//   );
// };

// export default PaySlip;
import React, { useState } from "react";
import "./SalerySlip.css"; // CSS file for styling

const SalarySlip = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeNo: "",
    program: "",
    designation: "",
    dateOfJoining: "",
    totalDays: 31,
    lossOfPay: 0,
    bankAccount: "",
    basic: 0,
    hra: 0,
    conveyance: 0,
    specialAllowance: 0,
  });

  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateGrossEarnings = () => {
    const { basic, hra, conveyance, specialAllowance } = formData;
    return Number(basic) + Number(hra) + Number(conveyance) + Number(specialAllowance);
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="salary-slip-container">
      {!generated ? (
        <div className="form-container">
          <h2>Salary Slip Form</h2>
          <form>
            <label>Employee Name:</label>
            <input name="employeeName" onChange={handleChange} />

            <label>Employee No:</label>
            <input name="employeeNo" onChange={handleChange} />

            <label>Program / Department:</label>
            <input name="program" onChange={handleChange} />

            <label>Designation:</label>
            <input name="designation" onChange={handleChange} />

            <label>Date of Joining:</label>
            <input type="date" name="dateOfJoining" onChange={handleChange} />

            <label>Bank Account:</label>
            <input name="bankAccount" onChange={handleChange} />

            <label>Basic:</label>
            <input type="number" name="basic" onChange={handleChange} />

            <label>HRA:</label>
            <input type="number" name="hra" onChange={handleChange} />

            <label>Conveyance Allowance:</label>
            <input type="number" name="conveyance" onChange={handleChange} />

            <label>Special Allowance:</label>
            <input type="number" name="specialAllowance" onChange={handleChange} />

            <button type="button" onClick={handleGenerate}>
              Generate Salary Slip
            </button>
          </form>
        </div>
      ) : (
        <div className="table-container">
          <h2>Pay Slip For The Month Of July 2024</h2>
          <table border="1">
            <tbody>
              <tr>
                <td>Employee Name :</td>
                <td>{formData.employeeName}</td>
                <td>Date of Joining :</td>
                <td>{formData.dateOfJoining}</td>
              </tr>
              <tr>
                <td>Employee No :</td>
                <td>{formData.employeeNo}</td>
                <td>Total Days in the Month:</td>
                <td>{formData.totalDays}</td>
              </tr>
              <tr>
                <td>Program / Department :</td>
                <td>{formData.program}</td>
                <td>Loss of pay (in days):</td>
                <td>{formData.lossOfPay}</td>
              </tr>
              <tr>
                <td>Designation :</td>
                <td>{formData.designation}</td>
                <td>Bank Account Number :</td>
                <td>{formData.bankAccount}</td>
              </tr>
              <tr>
                <th colSpan="2">EARNINGS</th>
                <th colSpan="2">DEDUCTIONS</th>
              </tr>
              <tr>
                <td>Basic</td>
                <td>{formData.basic}</td>
                <td>TDS</td>
                <td>0</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td>{formData.hra}</td>
                <td>LOP</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Conveyance Allowance</td>
                <td>{formData.conveyance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td>{formData.specialAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>GROSS EARNINGS (A)</th>
                <th>{calculateGrossEarnings()}</th>
                <th>TOTAL DEDUCTIONS (B)</th>
                <th>0</th>
              </tr>
              <tr>
                <th colSpan="2">NET PAY (A - B)</th>
                <th colSpan="2">{calculateGrossEarnings()}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SalarySlip;
