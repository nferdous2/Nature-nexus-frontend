import React, { useState } from 'react';
import { Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import review from "../../img/review.png"

// main code starts here 
const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    opinion: '',
    category: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);

    axios.post('http://localhost:8000/review', formData)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Thank you for your valuable opinion');
        }
      });
  };

  return (
    <Grid container spacing={2} sx={{ justifyContent: "center", mt: 9, p: 3 }}>
      <Grid xs={12} md={4} lg={4}>
        <FormControl
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '2%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: 'auto',
            backgroundColor: '#fff',
            textAlign: "left"
          }}
        >
          <img src={review} alt='' />
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            <span>We</span> Value <span>Your </span>Opinion <FaHeart style={{ color: 'red' }} />
          </Typography>
          <Typography>
            Your Name
          </Typography>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            style={{ width: '100%' }}
          />
          <Typography>
            What Can Be Improved ?
          </Typography>
          <TextField
            name="opinion"
            value={formData.opinion}
            onChange={handleChange}
            placeholder="Opinion"
            required
            style={{ width: '100%' }}
            multiline
            rows={4}
          />

          {/* category and rating  */}
          <Grid container spacing={2}>
            <Grid item xs={6}>

              <Typography>
                Select the Category
              </Typography>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              >
                <MenuItem value="" disabled>
                  Category
                </MenuItem>
                <MenuItem value="freshfood">Fresh Food</MenuItem>
                <MenuItem value="animal">Animal</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>

              <Typography>
                Rate our services
              </Typography>
              <Select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              >
                <MenuItem value="" disabled>Rating</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </Grid>
          </Grid>
          {/* submit button  */}
          <Button type="submit" sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold', mb: 3,'&:hover': {
      backgroundColor: '#ff9900', 
    }, }}>
            Add Review
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Feedback;
