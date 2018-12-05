import React from 'react';
import { Link } from 'react-router-dom';

function BagBox ({ bag }){
  console.log('this is bag._id', bag._id);
  return (
    <div className="column is-4 pic">
      <Link to={`/bags/${bag._id}`}>
        <figure className="image index-img">
          <img  src={ bag.image} />
        </figure>
        <p>{ bag.name }</p>
        <p>£ { bag.price }</p>
      </Link>
    </div>
  );
}



export default BagBox;
