import * as React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionsArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IMG from '../../../public/static/media/images/free-samples.jpeg'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

function MediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionsArea>
        <CardMedia
          className={classes.media}
          image={IMG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zuckerberg
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionsArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }),
}

MediaCard.defaultProps = {
  classes: null,
}

export default withStyles(styles)(MediaCard)
