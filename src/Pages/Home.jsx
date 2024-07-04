import React from 'react';
import Sidenav from '../Components/Sidenav/Sidenav';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ShoppingBag } from '@mui/icons-material';
import AccordionDash from '../Components/AccordionDash';
import Barchart from '../Charts/Barchart';

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              {/* Section 1: Main Cards */}
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                  <Card sx={{ minWidth: '49%', height: 150 }} className="gradient">
                    <CardContent>
                      <div className="iconstyle">
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffff' }}>
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: '49%', height: 150 }} className="gradientlight">
                    <CardContent>
                      <div className="iconstyle">
                        <ShoppingBag />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffff' }}>
                        $900.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              {/* Section 2: Side Cards */}
              <Grid item xs={12} md={4}>
                <Stack spacing={2} direction={{ xs: 'row', md: 'column' }}>
                  <Card sx={{ maxWidth: 345 }} className="gradientlight">
                    <Stack spacing={2} direction="row" className="cardalign">
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$230</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row" className="cardalign">
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$230</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            {/* Section 3: Chart and Accordion */}
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: '60vh' }}>
                  <CardContent>
                    <Barchart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '60vh' }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
