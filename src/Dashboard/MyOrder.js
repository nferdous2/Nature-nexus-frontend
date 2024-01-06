import React, { useEffect, useState } from 'react';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
                const response = await fetch('http://localhost:8000/my-orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p>{order.product.name}</p>
              {/* Display other order information here */}
              {/* Example: {order.paidStatus ? 'Paid' : 'Not Paid'} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrder;
