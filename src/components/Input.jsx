import { useState } from "react";

export default function Input({ name, type, children }) {
  const [value, setValue] = useState('');
  
  return(
    <div className="input-group">
      <label htmlFor={name}>{children}</label>
      <input 
        type={type} 
        id={name} 
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}