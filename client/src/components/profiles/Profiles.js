import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import SearchProfiles from "../search/SearchProfiles";

import { getProfiles } from "../../actions/profile";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "grid",
    // gridTemplateColumns: "repeat(4, 1fr)",
    // gridGap: "10px",
    direction: "column",
    alignItems: "center",
    justify: "center"
  },

  paper: {
    height: 140,
    width: 100
  }
}));

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const classes = useStyles();
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Students</h1>
          <p className='lead'>
            Browse and connect with students with the same major.
          </p>
          <SearchProfiles />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs='auto' sm='auto'>
              <Grid container justify='center' spacing={4}>
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <Grid key={profile._id} item>
                      <ProfileItem key={profile._id} profile={profile} />
                    </Grid>
                  ))
                ) : (
                  // <div>
                  <Fragment>
                    <h5>No profiles found</h5>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
