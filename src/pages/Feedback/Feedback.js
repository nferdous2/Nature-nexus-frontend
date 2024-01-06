import React, { useState } from 'react';
import {  Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

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
          alert('Review added successfully');
        }
      });
  };

  return (
 
    <FormControl
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '2%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '7%',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4">
        <span>We</span> Value <span>Your </span>Opinion <FaHeart style={{ color: 'red' }} />
      </Typography>
      <TextField
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        style={{ width: '100%' }}
      />
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

      <Select
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        required
        style={{ width: '100%' }}
      >
        <MenuItem value=""  disabled>Rating</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold' }}>
        Add Review
      </Button>
    </FormControl>
  );
};

export default Feedback;
