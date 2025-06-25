import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(name, email, password);
    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      result = await result.json();
      console.log(result);

      if (typeof localStorage?.setItem === 'function') {
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
      } else {
        console.error('localStorage.setItem is not a function!', localStorage);
        alert('Something went wrong. Please refresh your browser.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="sign-main">
      <div className="sign-center">
        <center><h1>Sign Up</h1></center>
        <br />
        <div className="inp1">
          Name: <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="inp1">
          Email: <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="inp1">
          Password: <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <button onClick={collectData}>Sign Up</button>
      </div>
    </div>
  );
};

export default Sign;
