import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPosts } from "../../actions/post";
//import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

const SearchPosts = ({ searchPosts, auth, errors }) => {
  const [text, setText] = useState("");

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Search posts</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          searchPosts(text);
          setText("");
        }}>
        <textarea
          name='text'
          cols='10'
          rows='2'
          placeholder='topic/subject/keyword...'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        {/* <p className='tab' /> */}
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

SearchPosts.propTypes = {
  searchPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchPosts }
)(SearchPosts);
