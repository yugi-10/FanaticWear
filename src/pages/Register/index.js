import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import AuthForm from '../../components/AuthForm';
import '../Login/Login.css';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-side-art">
          <div className="auth-art-text">JOIN<br />THE<br /><span style={{color:'var(--red)'}}>CLUB</span></div>
          <div className="auth-art-tagline">Exclusive Member Benefits</div>
        </div>
        <div className="auth-side-form">
          <div className="auth-form-container">
            <div className="auth-label">New Member</div>
            <h1 className="auth-title">Create<br />Account</h1>
            <p className="auth-hint">Join 12,000+ passionate football fans</p>
            <AuthForm isLogin={false} />
            <p className="auth-switch">
              Already a member? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
