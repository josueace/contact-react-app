// components/Card.js

import React from 'react';

const card = (props) => {
  return (
    <tr>
          <td><img src={props.imgUrl} width={100}/></td>
        <td><h1>{props.name}</h1></td>
            <td> <h1>{props.popularity}</h1></td>
            <button onClick={props.clickToDelete}>Delete</button>
     </tr>
  )
};

export default card;