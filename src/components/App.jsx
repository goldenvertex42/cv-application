import { useState } from 'react'
import '../styles/App.css'
import Input from './Input';
import Button from './Button';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import PracticalForm from './PracticalForm';

export default function App() {
  return (
    <>
      <h1>Create your CV/Resume</h1>
      <section className='general-info'>
        <h2>General Information</h2>
        <GeneralForm />
      </section>
      <section className='education-info'>
        <h2>Education Information</h2>
        <EducationForm />
      </section>
      <section className='practical-info'>
        <h2>Practical Information</h2>
        <PracticalForm />
      </section>
    </>
  );
}
