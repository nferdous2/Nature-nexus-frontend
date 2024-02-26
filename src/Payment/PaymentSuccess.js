import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const PaymentSuccess = () => {
    const { tranId } = useParams();


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
            <h1>Payment Success</h1>
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
                <p>Transaction ID- {tranId}</p>
                <button 
                style={{
                    padding: '1rem',
                    backgroundColor: '#716add',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    navigator.clipboard.writeText(tranId)
                    alert('Tranjection ID Copied')
                }}>
                    Click here to copy the Tranjection ID
                </button>
            </Box>
            <NavLink to="/dashboard">Go to Dashboard</NavLink>
        </div>
    );
};

export default PaymentSuccess;