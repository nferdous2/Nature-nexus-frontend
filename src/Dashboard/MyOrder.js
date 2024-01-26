// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea } from '@mui/material';


// const MyOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log('Token:', token);
//         const response = await fetch(`http://localhost:8000/soldProduct/${localStorage.getItem('userId')}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: token,
//           },
//         });
//         console.log(response, 'res')
//         if (response.ok) {
//           const data = await response.json();
//           setOrders(data);
//         } else {
//           console.error('Failed to fetch orders');
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const userId = localStorage.getItem('userId');
//   useEffect(() => {
//     // console.log(userId)

//     if (userId) {
//       console.log('userId', userId)
//       fetch(`http://localhost:8000/soldProduct/${userId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: localStorage.getItem('token'),
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data)
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [userId]);

//   // console.log(orders)
//   return (
//     <div>
//       <h2>Your Orders</h2>
//       {
//         loading ? (
//           <p>Loading...</p>
//         ) :
//           <ul style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             // wrap

//             width: '100%',
//             gap: '1rem',
//           }}>
//             {orders.map((order, index) => {

//               return (
//                 <Card sx={{ maxWidth: 345 }} key={index}>
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={order?.product.image}
//                       alt="green iguana"
//                     />
//                     <CardContent style={{textAlign: 'start'}}>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {order?.product?.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {order?.product?.price}
//                         {order?.product?.quantity}
//                         {order?.product?.description}
//                       </Typography>
//                       {/* remove */}
//                       <Button size="small"
//                       onClick={() => {
//                         fetch(`http://localhost:8000/soldProduct/${order._id}`, {
//                           method: 'DELETE',
//                           headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: localStorage.getItem('token'),
//                           },
//                         })
//                           .then((res) => res.json())
//                           .then((data) => {
//                             console.log(data)
//                             window.location.reload();
//                           })
//                           .catch((err) => {
//                             console.log(err);
//                           });
//                       }}
//                       style={{
//                         backgroundColor: "red",
//                         marginTop: "10px",
//                         color: "white",
//                         fontWeight: "bold",
//                       }} >
//                         Remove
//                       </Button>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               );

//             })}
//           </ul>
//       }
//     </div>
//   );
// };

// export default MyOrder;
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';


const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        const response = await fetch(`http://localhost:8000/soldProduct/${localStorage.getItem('userId')}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });
        console.log(response, 'res')
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

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    // console.log(userId)
    if (userId) {
      console.log('userId', userId)
      fetch(`http://localhost:8000/soldProduct/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          // setOrders(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  useEffect(() => {
    // console.log(userId)
    if (userId) {
      console.log('userId', userId)
      fetch(`http://localhost:8000/animal/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setAnimal(data);
          // setOrders(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  // console.log(orders)
  return (
    <div>
      <h2>Your Orders</h2>
      {
        loading ? (
          <p>Loading...</p>
        ) :
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // wrap

            width: '100%',
            gap: '1rem',
          }}>
            {
              orders.length === 0 ? <p>No product orders found in your inventory</p> :
                orders.map((order, index) => {

                  return (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={order?.product.image}
                          alt="green iguana"
                        />
                        <CardContent style={{ textAlign: 'start' }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {order?.product?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {order?.product?.price}
                            {order?.product?.quantity}
                            {order?.product?.description}
                          </Typography>
                          {/* remove */}
                          <Button size="small"
                            onClick={() => {
                              fetch(`http://localhost:8000/soldProduct/${order._id}`, {
                                method: 'DELETE',
                                headers: {
                                  'Content-Type': 'application/json',
                                  Authorization: localStorage.getItem('token'),
                                },
                              })
                                .then((res) => res.json())
                                .then((data) => {
                                  console.log(data)
                                  window.location.reload();
                                })
                                .catch((err) => {
                                  console.log(err);
                                });
                            }}
                            style={{
                              backgroundColor: "red",
                              marginTop: "10px",
                              color: "white",
                              fontWeight: "bold",
                            }} >
                            Remove
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );

                })}
          </ul>
      }
      {/* animal data */}
      {
        loading ? (
          <p>Loading...</p>
        ) :
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // wrap

            width: '100%',
            gap: '1rem',
          }}>
            {
              animal?.length === 0 ? <p>No animals orders found in your inventory</p> :
                animal?.map((order, index) => {

                  return (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={order?.animal?.image}
                          alt="green iguana"
                        />
                        <CardContent style={{ textAlign: 'start' }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {order?.animal.pet_name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {order?.animal?.description}
                          </Typography>
                          {/* update status after receiving */}
                          {
                            order?.status == true ? <p style={{
                              backgroundColor: "green",
                              marginTop: "10px",
                              color: "white",
                              fontWeight: "bold",
                              padding: '10px',
                              textAlign: 'center',
                            }}>
                              Received Animal
                            </p> :
                              <p
                                onClick={() => {
                                  fetch(`http://localhost:8000/animal/${order._id}`, {
                                    method: 'PATCH',
                                    headers: {
                                      'Content-Type': 'application/json',
                                      Authorization: localStorage.getItem('token'),
                                    },
                                    body: JSON.stringify({ status: true }),
                                  })
                                    .then((res) => res.json())
                                    .then((data) => {
                                      console.log(data)
                                      window.location.reload();
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                                style={{
                                  backgroundColor: "green",
                                  marginTop: "10px",
                                  color: "white",
                                  fontWeight: "bold",
                                  padding: '10px',
                                  textAlign: 'center',
                                }}
                              >
                                Confirming I've received animal
                              </p>
                          }


                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );

                })}
          </ul>

      }
    </div>
  );
};

export default MyOrder;

