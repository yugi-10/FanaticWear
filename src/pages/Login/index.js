import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import AuthForm from '../../components/AuthForm';
import './Login.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-side-art">
          <div className="auth-art-text">FENATIC<br />WEAR</div>
          <div className="auth-art-tagline">For True Fans</div>
        </div>
        <div className="auth-side-form">
          <div className="auth-form-container">
            <div className="auth-label">Member Access</div>
            <h1 className="auth-title">Welcome<br />Back</h1>
            <p className="auth-hint">Use: fan@example.com / football123</p>
            <AuthForm isLogin={true} />
            <p className="auth-switch">
              New to Fenatic Wear?{' '}
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
