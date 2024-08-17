import React from 'react';

const PersonList = ({ personas }) => {
  return (
    <ul>
      {personas.map((person) => (
        <li key={person.nombre}>
          {person.nombre} - {person.edad} - {person.puesto}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;