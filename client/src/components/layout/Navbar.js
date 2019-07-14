import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <ul>
      <h1>
        <Link to='/'>
          <i className='fas fa-tree' /> <span>Tree Holes</span>
        </Link>
      </h1>
      <li>
        <i className='fas fa-users' />
        <span className='hide-sm' />
        <Link to='/profiles'>Find Students</Link>
      </li>
      <li>
        <Link to='/posts'>
          <i className='fas fa-clipboard' /> <span className='hide-sm' />
          Posts
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{" "}
          <span className='hide-sm'>About me </span>
        </Link>
      </li>
      {!loading && isAuthenticated && <p className='tab-large'>{user.email}</p>}

      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout </span>
        </a>
      </li>
    </ul>
  );
  const gusetLinks = (
    <ul>
      <h1>
        <Link to='/'>
          <i className='fas fa-tree' /> <span>Tree Holes</span>
        </Link>
      </h1>
      <li>
        <Link to='/profiles'>Find Students</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      {/* <h1>
        <Link to='/'>
          <i className='fas fa-tree' /> <span>Tree Holes</span>
        </Link>
      </h1> */}
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : gusetLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
