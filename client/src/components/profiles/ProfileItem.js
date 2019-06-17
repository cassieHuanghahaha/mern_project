import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    minHeight: 480,
    minWidth: 280,
    backgroundSize: "cover"
  },
  media: {
    height: 200
  },
  body: {
    alignSelf: "end",
    textAlign: "center"
  },
  actions: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  }
});

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    classtoken,
    college
  }
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container justify='center' alignItems='center'>
        <Link to={`/profile/${_id}`}>
          <Avatar alt='Remy Sharp' src={avatar} className={classes.bigAvatar} />
        </Link>
      </Grid>

      <CardActionArea>
        <CardContent className={classes.body}>
          <Typography gutterBottom variant='h5' component='h3'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {status} {college && <span> at {college} college</span>}
          </Typography>
          <Typography>
            <ul>
              {skills.slice(0, 4).map((skill, index) => (
                <li key={index} className='text-primary'>
                  <i className='fas fa-check'>{skill}</i>
                </li>
              ))}
            </ul>
            <ul>
              {classtoken.slice(0, 4).map((classitem, index) => (
                <li key={index} className='text-primary'>
                  <i className='fas fa-check'>{classitem}</i>
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Link to={`/profile/${_id}`}>
          <Button size='small' color='primary'>
            View Profile
          </Button>
        </Link>
      </CardActions>
    </Card>

    /*{ // // <div className='card border-primary mb-3'>
    //   <div className='profile bg-light'>
    //   <img src={avatar} alt='' className='round-img' />
    //   <div>
    //     <h2>{name}</h2>
    //     <p>
    //       {status} {company && <span>at {company}</span>}
    //     </p>
    //     <p className='my-1'>{location && <span>{location}</span>}</p>
    //     <Link to={`/profile/${_id}`} className='btn btn-primary'>
    //       View Profile
    //     </Link>
    //   </div>
    //   <div>
    //     <ul>
    //       {skills.slice(0, 4).map((skill, index) => (
    //         <li key={index} className='text-primary'>
    //           <i className='fas fa-check'>{skill}</i>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   <ul>
    //     {classtoken.slice(0, 4).map((classitem, index) => (
    //       <li key={index} className='text-primary'>
    //         <i className='fas fa-check'>{classitem}</i>
    //       </li>
    //     ))}
    //   </ul>
    // </div> }*/
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
