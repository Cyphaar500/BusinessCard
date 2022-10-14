import React from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import './Meme.css'


export default function Meme() {
  return (
    <div className='App'>
      <Navbar />
      <Form />
    </div>
  );
}