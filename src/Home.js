import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import "./Home.css";




class Home extends Component {
  render() {
    return (
      <div className="container">
		<MyCard1/>
		<MyCard2/>
      </div>
    );
  }
}




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function MyCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
		  <CardMedia
			  component="img"
			  alt="Home"
			  height="140"
			  image="/static/images/cards/contemplative-reptile.jpg"
			  title="Home"
			/>
          <Typography gutterBottom variant="h5" component="h2">
            Home
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Home Page
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Go!
        </Button>
      </CardActions>
    </Card>
  );
}

function MyCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
		  <CardMedia
			  component="img"
			  alt="Problems"
			  height="140"
			  image="/static/images/cards/contemplative-reptile.jpg"
			  title="Problems"
			/>
          <Typography gutterBottom variant="h5" component="h2">
            Problems
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Solve Problems
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Go!
        </Button>
      </CardActions>
    </Card>
  );
}


export default Home;