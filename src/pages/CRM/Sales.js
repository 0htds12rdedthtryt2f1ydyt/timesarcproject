
import React, { useEffect } from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { Icon } from '@iconify/react';
import chartLineIcon from '@iconify-icons/mdi/chart-line';
import shoppingCartIcon from '@iconify-icons/mdi/shopping-cart';
import cashIcon from '@iconify-icons/mdi/cash';
import percentIcon from '@iconify-icons/mdi/percent';

const Sales = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Sales Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Revenue Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Icon icon={cashIcon} width={40} height={40} />
              <Typography variant="h6" mt={2}>
                Total Revenue
              </Typography>
              <Typography variant="h4">$50,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Total Sales */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Icon icon={shoppingCartIcon} width={40} height={40} />
              <Typography variant="h6" mt={2}>
                Total Sales
              </Typography>
              <Typography variant="h4">1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Growth Rate */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Icon icon={percentIcon} width={40} height={40} />
              <Typography variant="h6" mt={2}>
                Growth Rate
              </Typography>
              <Typography variant="h4">15%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Trends */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Icon icon={chartLineIcon} width={40} height={40} />
              <Typography variant="h6" mt={2}>
                Sales Trends
              </Typography>
              <Typography variant="h4">Trending Up</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sales;
