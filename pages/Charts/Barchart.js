import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from '@mui/material';


const EmployeeOnboardingChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#28a745'], // Green color
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Onboarding Forms', 'Your Job', 'Training', 'Day 1', 'Your Profile', 'I-9 Form', 'W-4 Form'],
    },
    yaxis: {
      title: {
        text: 'Completion (%)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const chartSeries = [
    {
      name: 'Completed',
      data: [20, 25, 15, 30, 35, 20, 15], // Example data
    },
  ];

  return (
    <div>
        <Card sx={{ maxWidth: 730, boxShadow: 3, borderRadius: 2, padding: 2 }}>

        <h3>Onboarding Completion Status</h3>
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </Card>
      
    </div>
  );
};

export default EmployeeOnboardingChart;
// import React from 'react';
// import { Card, CardContent, Typography, LinearProgress, Grid, Container, Box } from '@mui/material';

// const OnboardingProgressCard = () => {
//   const employee = {
//     name: 'Jennie',
//     startDate: '28-Aug-2022',
//     department: 'Sales',
//     completionStatus: 96,
//   };

//   return (
//     <Container sx={{ marginTop: 4 }}>
//       <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2, padding: 2 }}>
//         {/* <CardContent> */}
//           <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//             {employee.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Start Date: {employee.startDate}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Department: {employee.department}
//           </Typography>

//           <Box sx={{ marginTop: 2 }}>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
//               Completion Status
//             </Typography>
//             <Grid container alignItems="center" spacing={1}>
//               <Grid item xs={10}>
//                 <LinearProgress
//                   variant="determinate"
//                   value={employee.completionStatus}
//                   sx={{
//                     height: 10,
//                     borderRadius: 5,
//                     backgroundColor: '#e0e0e0',
//                     '& .MuiLinearProgress-bar': {
//                       backgroundColor: '#28a745', // Green color
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <Typography variant="body2">{employee.completionStatus}%</Typography>
//               </Grid>
//             </Grid>
//           </Box>
//         {/* </CardContent> */}
//       </Card>
//     </Container>
//   );
// };

// export default OnboardingProgressCard;
