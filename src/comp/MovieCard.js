import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MovieCard({title, description, posterURL, rating}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        
      />
      <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        title={title}
        href={posterURL}

      />
      <CardContent>
        <Typography className='pb-2' variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <hr className='p-2'/>
        <div className='flex justify-between inline-block'>

        <div>
        <Rating name="size-small" defaultValue={rating} size="small" precision={0.5}/>
</div>

    <div>

    <Button href={posterURL}> Learn More</Button>

    </div>



        </div>
      </CardContent>
    </Card>
  );
}
