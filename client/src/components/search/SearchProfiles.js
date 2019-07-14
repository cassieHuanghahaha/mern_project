import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProfiles } from "../../actions/profile";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

const SearchProfiles = ({ searchProfiles, auth, errors }) => {
  const [text, setText] = useState("");

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Search students</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          searchProfiles(text);
          setText("");
        }}>
        <textarea
          name='text'
          cols='10'
          rows='2'
          placeholder='Name/College/Major/Skill/Class...'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

SearchProfiles.propTypes = {
  searchProfiles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchProfiles }
)(SearchProfiles);
