import { Box, Card, CardContent, Chip, Grid, TextField } from '@mui/material'
import React from 'react'
import './Feedback.css'
import SendIcon from '@mui/icons-material/Send'

const Feedback = () => {
  const handleSubmit = (e) => {
    const form = new FormData(e.currentTarget)

    const userData = {
      product: form.get('product'),
      rating: form.get('rating'),
      reviewer: form.get('reviewer'),
      // date: form.get('date'),
      comment: form.get('comment'),
    }

    console.log(userData)
    // //send data to server
    fetch('http://localhost:8000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your review has been added successfully')
        }
      })
    e.preventDefault()
  }

  return (
    <>
      {/* <Header /> */}

      <Box sx={{ flexGrow: 1, boxShadow: 5, pt: 10 }} data-aos="fade-up">
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card
              sx={{
                minWidth: 275,
                width: { xs: '83%', sm: '90%', md: '90%', lg: '100%' },
                margin: 2,
                padding: 2,
                height: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardContent>
                <Chip
                  label="Leave Your Comment"
                  variant="outlined"
                  sx={{
                    fontSize: '1.3rem',
                    color: '#fff',
                    background: ' #f8bf02',
                    marginTop: 5,
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <TextField
                    id=" Product Name*"
                    label=" Product Name*"
                    multiline
                    required
                    autoFocus
                    maxRows={4}
                    placeholder="Product Name"
                    name="Product Name"
                    // onBlur={handleOnBlur}
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                    }}
                  />
                  <TextField
                    id=" rating*"
                    label=" rating*"
                    multiline
                    required
                    autoFocus
                    maxRows={4}
                    placeholder="rating"
                    name="rating"
                    // onBlur={handleOnBlur}
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                    }}
                  />
                  <TextField
                    id=" Full Name*"
                    label=" Full Name*"
                    multiline
                    required
                    autoFocus
                    maxRows={4}
                    placeholder="Full Name"
                    name="Full Name"
                    // onBlur={handleOnBlur}
                    sx={{
                      width: '100%',
                      margin: 1,
                      marginLeft: 0,
                    }}
                  />
                  <TextField
                    id=" Comment*"
                    label="Comment*"
                    name="text"
                    // onBlur={handleOnBlur}
                    multiline
                    required
                    autoFocus
                    rows={4}
                    placeholder=" Comment*"
                    sx={{ width: '100%', margin: 1, marginLeft: 0 }}
                  />

                  <button className="reviewButton" size="small">
                    Submit
                    <SendIcon
                      sx={{
                        marginLeft: 1,
                        fontSize: 15,
                        color: 'white',
                      }}
                    />
                  </button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* <Footer /> */}
    </>
  )
}

export default Feedback
