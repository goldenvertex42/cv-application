import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { areAllValuesEmpty } from "../utils";

export default function GeneralForm() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    city: '',
    phoneNumber: '',
    email: '',
    title: '',
    linkedIn: '',
    website: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  if (isEditing === false) {
    const handleEdit = () => {
      setIsEditing(true);
    }
    return(
      <>
        <div className="display-group general-display">
          <div className="display-pair">
            <p className="display-title">Full Name:</p>
            <p>{formValues.fullName}</p>
          </div>
          <div className="display-pair">
            <p className="display-title">City:</p>
            <p>{formValues.city}</p>
          </div>
          <div className="display-pair">
            <p className="display-title">Phone Number:</p>
            <p>{formValues.phoneNumber}</p> 
          </div>
          <div className="display-pair">
            <p className="display-title">Email:</p>
            <p>{formValues.email}</p> 
          </div>
          {(formValues.title === '') ? null : 
          <div className="display-pair">
            <p className="display-title">Title:</p> 
            <p>{formValues.title}</p>
          </div>}
          {(formValues.linkedIn === '') ? null : 
          <div className="display-pair">
            <p className="display-title">LinkedIn URL:</p>
            <p>{formValues.linkedIn}</p>
          </div>}
          {(formValues.website === '') ? null : 
          <div className="display-pair">
            <p className="display-title">Website/Portfolio:</p>
            <p>{formValues.website}</p>
          </div>}
        </div>
        <div className="button-box">
        <Button type='button'
          onClick={handleEdit}>Edit</Button>
        </div>
      </>
    );
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    setIsEditing(false);
  }
  
  return(
      <form onSubmit={handleSubmit}>
        <div className="form-group general-inputs">
          <Input name='fullName'
                 id='fullName' 
                 type='text'
                 value={formValues.fullName}
                 onChange={handleInputChange}
                 required={true}
                 autoComplete='name'>Full Name*:</Input>
          <Input name='city'
                 id='city' 
                 type='text'
                 value={formValues.city}
                 onChange={handleInputChange}
                 required={true}
                 autoComplete='address-level2'>City*:</Input>
          <Input name='phoneNumber'
                 id='phoneNumber'
                 type='tel'
                 value={formValues.phoneNumber}
                 onChange={handleInputChange}
                 required={true}
                 autoComplete='tel'>Phone Number*:</Input>
          <Input name='email'
                 id='email'
                 type='email'
                 value={formValues.email}
                 onChange={handleInputChange}
                 required={true}
                 autoComplete='email'>Email*:</Input>
          <Input name='title'
                 id='title'
                 type='text'
                 value={formValues.title}
                 onChange={handleInputChange}>Title:</Input>
          <Input name='linkedIn' 
                 id='linkedIn'
                 type='url'
                 value={formValues.linkedIn}
                 onChange={handleInputChange}>LinkedIn URL:</Input>
          <Input name='website'
                 id='website'
                 type='url'
                 value={formValues.website}
                 onChange={handleInputChange}>Website/Portfolio:</Input>
          <span className="legend">* - denotes a required field</span>
        </div>
        <div className="button-box">
          <Button type='submit' disabled={areAllValuesEmpty(formValues)}>Submit</Button>
        </div>
      </form>
    );
}