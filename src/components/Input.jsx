import { useState } from "react";

export default function Input({ id, name, type, value, onChange, children, required, autoComplete }) {
  return(
    <div className="input-group">
      <label htmlFor={id}>{children}</label>
      <input 
        type={type} 
        id={id} 
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete} />
    </div>
  );
}