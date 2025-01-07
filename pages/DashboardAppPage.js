import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// sections
import { AppOrderTimeline, AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';
import EmployeeOnboardingChart from './Charts/Barchart';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Timesarc </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title={<span style={{ color: '#061B64' }}>Total Sales leads</span>}
              total={714000}
              icon={"carbon:sales-ops"}
              sx={{background: "#51b2ff",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title={<span style={{ color: "#04297A" }}>Total Accounts</span>}
              total={1352831}
              color="info"
              icon={"mdi:account-cash"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title={<span style={{ color: "#7A4F01" }}>Total Employee</span>}
              total={1723315}
              color="warning"
              icon={"mdi:account-group"}
              sx={{
                "& .MuiTypography-root": { color: "#7A4F01" },
                background: "#ffeb81",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title={<span style={{ color: "#7A0C2E" }}>Total Expences</span>}
              total={234}
              color="error"
              icon={"mdi:cash-minus"}
              sx={{
                color: "#7A0C2E",
                "& .MuiTypography-root": { color: "#7A0C2E" }, background: "#ffc09b",
              }}
            />
          </Grid>

          {/* <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits
              title="Project Tracker"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Auditor',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Sales Lead',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Reviewer',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Planners',
                  type: 'column',
                  fill: 'solid',
                  data: [14, 25, 36, 30, 45, 35, 63, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}
          <Grid item xs={12} md={6} lg={6}>
            <EmployeeOnboardingChart />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentVisits
              title="Finance & CRM"
              chartData={[
                { label: "Accounts", value: 4344 },
                { label: "Expenses", value: 5435 },
                { label: "Sales", value: 1443 },
                { label: "Leads", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={6}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
