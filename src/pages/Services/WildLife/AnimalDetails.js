import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ShareIcon from '@mui/icons-material/Share'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function AnimalDetails() {
  const [expanded, setExpanded] = React.useState(false)
  const [animal, setAnimal] = React.useState({})
  const [openModal, setOpenModal] = React.useState(false)
  const [input1, setInput1] = React.useState('')
  const [input2, setInput2] = React.useState('')
  const [input3, setInput3] = React.useState('')
  const [input4, setInput4] = React.useState('')
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [saveSuccessSnackbarOpen, setSaveSuccessSnackbarOpen] = React.useState(
    false,
  )

  React.useEffect(() => {
    const animalData = localStorage.getItem('animal')
    setAnimal(JSON.parse(animalData))
  }, [])

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSaveModal = () => {
    // Add logic to save input values or perform any other actions
    console.log('Input 1:', input1)
    console.log('Input 2:', input2)
    console.log('Input 3:', input3)
    console.log('Input 4:', input4)

    // Show Snackbar for save success
    setSaveSuccessSnackbarOpen(true)

    // Close the modal
    handleCloseModal()
  }

  const handleShare = async () => {
    try {
      // Check if the navigator supports the Share API
      if (navigator.share) {
        await navigator.share({
          title: 'Animal Details',
          text: `Check out the details of ${animal.pet_name}: ${window.location.href}`,
        })
      } else {
        // Fallback behavior (e.g., show a Snackbar with the shareable link)
        setSnackbarOpen(true)
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarOpen(false)
  }

  const handleSaveSuccessSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSaveSuccessSnackbarOpen(false)
  }

  const handleSubmit = (e) => {
    const form = new FormData(e.currentTarget)

    const userData = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      address: form.get('address'),
    }

    // console.log(userData)
    //send data to server
    fetch('http://localhost:8000/adoptanimals', {
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
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 15 }}>
      <CardHeader title={`${animal.pet_name}`} />
      <img
        src={animal.image}
        alt={animal.pet_name}
        style={{
          height: '400px',
          width: '100%',
          margin: 'auto',
          objectFit: 'cover',
        }}
      />

      <CardContent>{/* Additional content can be added here */}</CardContent>

      <CardActions disableSpacing>
        <Button
          variant="contained"
          size="small"
          sx={{
            ml: 4,
            borderRadius: '10px',
            textTransform: 'capitalize',
            backgroundColor: '#FFB800',
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFB800',
            },
          }}
          onClick={handleOpenModal}
        >
          Adopt
        </Button>
        <IconButton aria-label="share" onClick={handleShare}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" paragraph>
            Animal Details:
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed vel magna quis justo pharetra blandit non eget urna.
          </Typography>
          <Typography paragraph>
            Vivamus auctor auctor eros, vel ullamcorper neque cursus ac.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </Typography>
          <Typography paragraph>
            Fusce commodo nisl nec risus volutpat, in tempus augue efficitur.
            Curabitur sit amet sapien eu ipsum sagittis hendrerit vitae at
            justo.
          </Typography>
          <Typography paragraph>
            Quisque tincidunt libero vel fringilla dictum. Nunc vel elit
            feugiat, tincidunt justo vel, lacinia arcu.
          </Typography>
        </CardContent>
      </Collapse>

      {/* Modal */}

      <form onSubmit={handleSubmit}>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Adopt Animal</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              fullWidth
              multiline
              required
              autoFocus
              placeholder=" Name*"
              margin="normal"
            />
            <TextField
              label=" Email address"
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              fullWidth
              multiline
              required
              autoFocus
              placeholder=" Email address*"
              margin="normal"
            />
            <TextField
              label=" Phone number"
              type="number"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              fullWidth
              multiline
              required
              autoFocus
              placeholder=" Phone number*"
              margin="normal"
            />
            <TextField
              label=" Address"
              type="text"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              fullWidth
              required
              autoFocus
              placeholder=" Address*"
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseModal}
              color="primary"
              sx={{
                backgroundColor: '#f44336', // Red color for the button
                color: 'white',
                '&:hover': {
                  backgroundColor: '#d32f2f', // Darker red on hover
                },
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSaveModal}
              color="primary"
              sx={{
                backgroundColor: '#4CAF50', // Green color for the button
                color: 'white',
                '&:hover': {
                  backgroundColor: '#45a049', // Darker green on hover
                },
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </form>

      {/* Snackbar for share link */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={`Shareable link: ${window.location.href}`}
      />

      {/* Snackbar for save success */}
      <Snackbar
        open={saveSuccessSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSaveSuccessSnackbarClose}
        message="Save successful!"
        icon={<CheckCircleIcon fontSize="large" />}
        sx={{
          backgroundColor: '#4CAF50', // Green color for success
          color: 'white',
        }}
      />
    </Card>
  )
}
