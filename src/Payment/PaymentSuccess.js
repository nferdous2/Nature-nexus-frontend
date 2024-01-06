import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const PaymentSuccess = () => {
    const { tranId } = useParams();

    useEffect(() => {
        // SweetAlert code
        Swal.fire({
            title: `Payment Successful - Tranjection ID-${tranId}`,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                left top
                no-repeat
            `,
            showCancelButton: false,
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the home page using window.location.href
                window.location.href = '/dashboard';
            }
        });
    }, []);

    return (
        <div>
        </div>
    );
};

export default PaymentSuccess;
