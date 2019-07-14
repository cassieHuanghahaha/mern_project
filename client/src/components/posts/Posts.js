import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import SearchPosts from "../search/SearchPosts";
import { getPosts } from "../../actions/post";

// import resizeAllGridItems from "../../utils/resizeAllGridItems.js";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
    gridGap: "2px"
    // gridAutoFlow: "row dense",
    // alignContent: "flex-end",

    // direction: "column",
    // spacing: 0,
    // // alignItems: "flex-end",
    // // justify: "center",
    // float: "right"
  }
}));

const Posts = ({ getPosts, post: { posts, loading }, auth: { user } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const classes = useStyles();
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Explore Posts</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the tree hole community,{" "}
        {user && user.name.trim().split(" ")[0]}!
      </p>
      <SearchPosts />
      <PostForm />
      <div className='grid'>
        {posts.length > 0 ? (
          posts.map(post => (
            <Grid key={post._id}>
              <PostItem key={post._id} post={post} />
            </Grid>
          ))
        ) : (
          <Fragment>
            <h5>No posts found</h5>
          </Fragment>
        )}
      </div>
      {/* </Grid> */}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
