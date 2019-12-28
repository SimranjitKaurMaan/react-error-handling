import React from 'react';

 const Hello = ({ name }) =>
 {
    <h1>Hello {name}!</h1>;
    throw new Error('not an error');
 }


export default Hello;
