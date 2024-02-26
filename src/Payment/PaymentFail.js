import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PaymentFail = () => {


    return (
        <div style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10rem',
            marginBottom: '5rem',
            padding: '2rem',
            borderRadius: '1rem',
            height: '55vh',
        }}>
            <h1>Payment Failed</h1>
            <Box sx={{
                fontSize: '1.5rem',
                color: '#716add',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '1rem',
                margin: '1rem',
                border: '1px solid #716add',
                borderRadius: '1rem',
            }}>
              
            </Box>
            <NavLink to="/dashboard">Go to Dashboard</NavLink>
        </div>
    );
};

export default PaymentFail;