import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import '../../Styles/Style.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function Hww() {
  return (
    <div>
      {/* <div className="upper-div">
        <p className="hww-title">How we work</p>
        <p className="hww-subtitle">
          As the world’s leading conservation organization, we work in nearly
          <br></br>
          100 countries to tackle the most critical issues at the intersection
          <br></br>
          of nature, people, and climate.
        </p>
      </div> */}
      <Box
        sx={{
          marginBottom: 3,
          display: 'flex',
          justifyContent: 'space-around',
          py: 5,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h3"
          sx={{ marginBottom: 3, color: '#444', fontWeight: '700' }}
        >
          How we work{' '}
        </Typography>
        <Typography
          sx={{ marginBottom: 5, fontSize: '20px', letterSpacing: '3px' }}
        >
          As the world’s leading conservation organization, we work in nearly
          <br></br>
          100 countries to tackle the most critical issues at the intersection
          <br></br>
          of nature, people, and climate.
        </Typography>
      </Box>

      <div className="hww-div">
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Card sx={{ minWidth: 555, height: 350, ml: 25, mt: 10 ,          overflow: 'hidden',
}}>
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 50,
                      fontFamily: 'Roboto',
                      fontWeight: '400',
                      color: '#000',
                      textAlign: 'start',
                      ml: 5,
                      latterSpacing: '0',
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    People and<br></br> communities
                  </Typography>
                  {/* <Typography variant="h5" component="div"></Typography> */}
                  <Typography
                    sx={{
                      mb: 1.5,
                      color: '#000',
                      ml: 5,
                      textAlign: 'start',
                      width: '80%',
                    }}
                    color="text.secondary"
                  >
                    A collaborative approach to conservation grounded in the
                    role of Indigenous people and local communities as stewards
                    of their own lands.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="hww-btn"
                    size="small"
                    sx={{
                      backgroundColor: '#f8bf02',
                      color: '#fff',
                      width: '25%',
                      ml: 5,
                    }}
                  >
                    Learn More <ChevronRightIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
