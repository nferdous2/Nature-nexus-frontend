import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
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
import { useParams } from 'react-router'

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
  const {_id} = useParams()
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
  const animalData = localStorage.getItem('animal')
  const userId = localStorage.getItem('userId')
  const handleSaveModal = () => {
    // Add logic to save input values or perform any other actions
    // console.log('Input 1:', input1)
    // console.log('Input 2:', input2)
    console.log('Input 3:', input3)
    console.log('Input 4:', input4)
    console.log('Animal Data:', JSON.parse(animalData))
    console.log('User Id:', userId)
    const data = {
      phone: input3,
      address: input4,
      animal: JSON.parse(animalData),
      userId: userId,
    }
    fetch(`https://nature-nexus.onrender.com/animal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const data = await res.json()
        console.log(data)
        if (res.status === 200) {
          alert('Adopted Successfully')
          window.location.href = '/dashboard'
        } else {
          alert('Something went wrong')
        }
      })
      .catch((err) => {
        console.log(err, 'err on catch')
        // alert('Something went wrong')
      })

    // Show Snackbar for save success
    // setSaveSuccessSnackbarOpen(true)

    // Close the modal
    handleCloseModal()
  }

  const handleShare = async () => {
    try {
      // Check if the navigator supports the Share API
      if (navigator.share) {
        await navigator.share({
          title: 'Animal Details',
          text: `Check out the details of ${animal.name}: ${window.location.href}`,
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

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 15 }}>
      <CardHeader title={animal.pet_name} />
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
            backgroundCaolor: '#FFB800',
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
          <Typography variant="h6" paragraph>
           {animal.description}
          </Typography>
        </CardContent>
      </Collapse>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Adopt Animal</DialogTitle>
        <DialogContent>
      
          <TextField
            label="Phone number"
            type="number"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            type="text"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            fullWidth
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
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

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
