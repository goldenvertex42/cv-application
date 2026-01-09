import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { areAllObjectsInArrayEmpty } from "../utils";
import { formatLocalizedDate } from "../utils";

function OnePracticalForm({formObject, handleInputChange, handleAdd, handleRemove, disabled}) {
  return(  
    <div className="form-group practical-inputs">
      <Input name='company'
              id={`company-${formObject.id}`}
              type='text'
              value={formObject.company}
              onChange={handleInputChange}
              required={true}
              autoComplete='organization'>Company*:</Input>
      <Input name='jobTitle'
              id={`jobTitle-${formObject.id}`}
              type='text'
              value={formObject.jobTitle}
              onChange={handleInputChange}
              required={true}
              autoComplete='organization-title'>Job Title*:</Input>
      <Input name='responsibilities'
              id={`responsibilities-${formObject.id}`}
              type='text'
              value={formObject.responsibilities}
              onChange={handleInputChange}>Responsibilities:</Input>
      <Input name='startOfEmployment'
              id={`startOfEmployment-${formObject.id}`}
              type='date'
              value={formObject.startOfEmployment}
              onChange={handleInputChange}
              required={true}>Start*:</Input>
      <Input name='endOfEmployment'
              id={`endOfEmployment-${formObject.id}`}
              type='date'
              value={formObject.endOfEmployment}
              onChange={handleInputChange}
              required={true}>End*:</Input>
      <span className="legend">* - denotes a required field</span>
      <div className="add-remove-pair">
        <Button type='button'
                onClick={handleAdd}>Add</Button>
        <Button type='button'
                disabled={disabled}
                onClick={() => handleRemove(formObject.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default function PracticalForm() {
  const [formObjects, setFormObjects] = useState([{
    id: 'initial-form',
    company: '',
    jobTitle: '',
    responsibilities: '',
    startOfEmployment: '',
    endOfEmployment: '',
  }]);
  const [isEditing, setIsEditing] = useState(true);
    
  
  if (isEditing === false) {
    const handleEdit = () => {
      setIsEditing(true);
    }
    return(
      <>
        {formObjects.map(obj => 
          <div key={`practical-form-${formObjects.length}`} className="display-group practical-display">
            <div className="display-pair">
              <p className="display-title">Company:</p>
              <p>{obj.company}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">Job Title:</p>
              <p>{obj.jobTitle}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">Responsibilities:</p>
              <p>{obj.responsibilities}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">Start of Employment:</p>
              <p>{formatLocalizedDate(obj.startOfEmployment)}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">End of Employment:</p>
              <p>{formatLocalizedDate(obj.endOfEmployment)}</p>
            </div>
          </div>
        )}
        <Button type='button'
          onClick={handleEdit}>Edit</Button>
      </>
    );
  }
  
  const handleInputChange = (e) => {
    const {id, name, value} = e.target;
    setFormObjects(prevFormObjects => prevFormObjects.map(obj => `${name}-${obj.id.toString()}` === id ? {...obj, [name]: String(value)} : obj));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formObjects);
    setIsEditing(false);
  }
  
  const handleAdd = () => {
    setFormObjects(prevObjects => [...prevObjects, {
      id: crypto.randomUUID(),
      company: '',
      jobTitle: '',
      responsibilities: '',
      startOfEmployment: '',
      endOfEmployment: '',
    }])
  }
  
  const handleRemove = (targetId) => {
    setFormObjects(prevObjects => prevObjects.filter(obj => obj.id !== targetId))
  }
  
  return(
    <form className='dynamic-form' onSubmit={handleSubmit}>
      {formObjects.map(obj => 
        <OnePracticalForm key={obj.id}
                          formObject={obj}
                          handleAdd={handleAdd}
                          handleInputChange={handleInputChange}
                          handleRemove={handleRemove}
                          disabled={formObjects.length <= 1}/>)}
        <div className="button-box">
          <Button type='submit'
            disabled={areAllObjectsInArrayEmpty(formObjects, 'id')}>Submit</Button>
        </div>
    </form>
  );
}