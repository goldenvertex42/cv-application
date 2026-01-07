import { useState } from 'react'
import '../styles/App.css'
import Input from './Input';
import Button from './Button';

export default function App() {
  return (
    <>
      <h1>Create your CV/Resume</h1>
      <h2>General Information</h2>
      <section className='general-info'>
        <div className="form-group general-inputs">
          <Input name='full-name' type='text'>Full Name:</Input>
          <Input name='city' type='text'>City:</Input>
          <Input name='phone-number' type='tel'>Phone Number:</Input>
          <Input name='email' type='email'>Email:</Input>
          <Input name='title' type='text'>Title:</Input>
          <Input name='linked-in' type='url'>LinkedIn URL:</Input>
          <Input name='website' type='url'>Website/Portfolio:</Input>
        </div>
        <div className="edit-submit-pair">
              <Button>Edit</Button>
              <Button>Submit</Button>
        </div>
      </section>
      <section className='education-info'>
        <h2>Education Information</h2>
        <div className="form-group education-inputs">
          <Input name='institution' type='text'>Institution:</Input>
          <Input name='start-of-study' type='date'>Start:</Input>
          <Input name='end-of-study' type='date'>End:</Input>
          <Input name='title-of-study' type='text'>Title of Study:</Input>
          <div className="add-remove-pair">
            <Button>Add</Button>
            <Button>Remove</Button>
          </div>
        </div>
        <div className="edit-submit-pair">
            <Button>Edit</Button>
            <Button>Submit</Button>
        </div>
      </section>
      <section className='practical-info'>
        <h2>Practical Information</h2>
        <div className="form-group practical-inputs">
          <Input name='company' type='text'>Company:</Input>
          <Input name='job-title' type='text'>Job Title:</Input>
          <Input name='start-of-employment' type='date'>Start:</Input>
          <Input name='end-of-employment' type='date'>End:</Input>
          <div className="add-remove-pair">
            <Button>Add</Button>
            <Button>Remove</Button>
          </div>
        </div>
        <div className="edit-submit-pair">
            <Button>Edit</Button>
            <Button>Submit</Button>
        </div>
      </section>
    </>
  );
}
