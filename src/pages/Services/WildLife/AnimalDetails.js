import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

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
  // const { id } = useParams()

  // const { myState } = location.state
  // console.log(props.location.state)
  // console.log(myState)
  React.useEffect(() => {
    //setitem use for set
    //getitem is used for get the animals
    const animalData = localStorage.getItem('animal')
    setAnimal(JSON.parse(animalData))
  }, [])

  console.log(animal.name)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const navigate = useNavigate()

  // Function to navigate to the adoptform page
  const navigateToAdoptForm = () => {
    // Replace '/adoptform' with the actual path of your adoptform page
    navigate('/adoptform')
  }
  // React.useEffect(() => {
  //   // Fetch the animal data based on the ID from your JSON file or API
  //   fetch(`./wildlifeAnimalData.JSON=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setAnimal(data))
  // }, [id])
  // const [userData, setUserData] = React.useState(null);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./wildlifeAnimalData.JSON') // Adjust the path accordingly
  //       const data = await response.text()

  //       const user = data.find((user) => user.id == Number(id))

  //       if (user) {
  //         setAnimal(user)
  //       } else {
  //         console.log('User not found')
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [id])

  // console.log(animal, id)
  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 15 }}>
      <CardHeader title={`${animal.name}`} />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <img
        src={animal.image}
        alt={animal.name}
        style={{
          height: '400px',
          width: '100%',
          margin: 'auto',
          objectFit: 'cover',
        }}
      />

      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          size="small"
          // to='/adoptform'
          onClick={navigateToAdoptForm}
          sx={{
            ml: 4,
            borderRadius: '10px',
            textTransform: 'capitalize',
            backgroundColor: '#FFB800', // Default background color
            color: 'black', // Text color
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFB800', // Keep the same background color on hover
            },
          }}
        >
          Adopt
        </Button>
        {/* <button className="adoptBtn" sx={{color:'red'}}>Adopt</button> */}
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="share">
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
      {/* expand here */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
