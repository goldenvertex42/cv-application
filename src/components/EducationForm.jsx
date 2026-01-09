import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { areAllObjectsInArrayEmpty } from "../utils";
import { formatLocalizedDate } from "../utils";

function OneEducationForm({formObject, handleInputChange, handleAdd, handleRemove, disabled}) {
  return(  
    <div className="form-group education-inputs">
      <Input name='institution'
              id={`institution-${formObject.id}`}
              type='text'
              value={formObject.institution}
              onChange={handleInputChange}
              required={true}>Institution*:</Input>
      <Input name='fieldOfStudy'
              id={`fieldOfStudy-${formObject.id}`}
              type='text'
              value={formObject.fieldOfStudy}
              onChange={handleInputChange}
              required={true}>Field of Study*:</Input>
      <Input name='startOfStudy'
              id={`startOfStudy-${formObject.id}`}
              type='date'
              value={formObject.startOfStudy}
              onChange={handleInputChange}
              required={true}>Start*:</Input>
      <Input name='endOfStudy'
              id={`endOfStudy-${formObject.id}`}
              type='date'
              value={formObject.endOfStudy}
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

export default function EducationForm() {
  const [formObjects, setFormObjects] = useState([{
    id: 'initial-form',
    institution: '',
    fieldOfStudy: '',
    startOfStudy: '',
    endOfStudy: '',
  }]);
  const [isEditing, setIsEditing] = useState(true);
  

  if (isEditing === false) {
    const handleEdit = () => {
      setIsEditing(true);
    }
    return(
      <>
        {formObjects.map(obj => 
          <div key={`education-form-${formObjects.length}`} className="display-group education-display">
            <div className="display-pair">
              <p className="display-title">Institution:</p>
              <p>{obj.institution}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">Field of Study:</p>
              <p>{obj.fieldOfStudy}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">Start of Study:</p>
              <p>{formatLocalizedDate(obj.startOfStudy)}</p>
            </div>
            <div className="display-pair">
              <p className="display-title">End of Study:</p>
              <p>{formatLocalizedDate(obj.endOfStudy)}</p>
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
      institution: '',
      fieldOfStudy: '',
      startOfStudy: '',
      endOfStudy: '',
    }])
  }

  const handleRemove = (targetId) => {
    setFormObjects(prevObjects => prevObjects.filter(obj => obj.id !== targetId))
  }
  
  return(
    <form className='dynamic-form' onSubmit={handleSubmit}>
      {formObjects.map(obj => 
        <OneEducationForm key={obj.id}
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