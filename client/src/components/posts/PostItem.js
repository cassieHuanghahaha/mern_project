import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    // display: "grid",
    // gridTemplateRows: "1fr auto",
    // gridGap: "8px",
    // minHeight: 480,
    maxWidth: 340,
    minWidth: 340,
    backgroundSize: "cover",
    display: "inline-block"
  },
  pos: {
    marginBottom: 24
  },
  media: {
    height: 200
  },
  // body: {
  //   alignSelf: "end",
  //   textAlign: "center"
  // },
  actions: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between"
  },
  avatar: {
    margin: 20
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  }
});

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
  addLike,
  removeLike,
  deletePost
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/profile/${user}`}>
        <CardHeader
          avatar={
            <Avatar alt='Remy Sharp' src={avatar} className={classes.avatar} />
          }
          title={name}
          subheader={<Moment format='YYYY/MM/DD hh:mm a'>{date}</Moment>}
        />
      </Link>

      {/* <Grid container justify='center' alignItems='center'>
        <Link to={`/profile/${_id}`}>
          <Avatar alt='Remy Sharp' src={avatar} className={classes.bigAvatar} />
        </Link>
      </Grid> */}

      <CardContent>
        <Typography className={classes.pos} variant='body2' component='p'>
          {text.length > 400 ? (
            <p className='my-1'>
              <Link to={`/posts/${_id}`} className='text-dark'>
                {text.substring(0, 400)}
                {"..."}
              </Link>
            </p>
          ) : (
            <p className='my-1'>{text}</p>
          )}

          {showActions && (
            <Fragment>
              <button
                onClick={e => addLike(_id)}
                type='button'
                className='btn btn-light'>
                <i className='fas fa-thumbs-up' />{" "}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>

              <button
                onClick={e => removeLike(_id)}
                type='button'
                className='btn btn-light'>
                <i className='fas fa-thumbs-down' />
              </button>

              <Link to={`/posts/${_id}`} className='btn btn-primary'>
                Discussion{" "}
                {comments.length > 0 && (
                  <span className='comment-count'>{comments.length}</span>
                )}
              </Link>
              {/* <Fragment> */}
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={e => deletePost(_id)}
                  type='button'
                  className='btn btn-danger'>
                  <i className='fas fa-times' />
                  {/* <Link to='/profiles' /> */}
                </button>
              )}
              {/* </Fragment> */}
            </Fragment>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
