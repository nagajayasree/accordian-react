import React, { useState } from 'react';

export default function Question(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onHandlePlus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 key={props.id}>{props.title}</h2>
        <button onClick={() => onHandlePlus()}>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen ? props.info : ''}
    </div>
  );
}
