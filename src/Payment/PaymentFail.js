import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const PaymentFail = () => {

    useEffect(() => {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Payment Failed",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the home page using window.location.href
                window.location.href = '/';
            }
        });
    }, []);

    return (
        <div style={{height:"screen"}}>
        </div>
    );
};

export default PaymentFail;