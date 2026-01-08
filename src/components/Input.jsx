import { useState } from "react";

export default function Input({ name, type, value, onChange, children, required }) {
  return(
    <div className="input-group">
      <label htmlFor={name}>{children}</label>
      <input 
        type={type} 
        id={name} 
        name={name}
        value={value}
        onChange={onChange}
        required={required} />
    </div>
  );
}