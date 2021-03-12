import React from 'react'
import './Content.css'

export default function Content({ className, ...props }) {

  // ??? how to read this one ? 
  return (
    <div className={['Content', className].join(' ')} {...props} />
  );
}
