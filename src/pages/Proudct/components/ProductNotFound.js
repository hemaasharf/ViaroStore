import React from 'react';

export const ProductNotFound = ({term, err}) => {
  return (
    <div className='py-8 text-5xl text-left'>
      {term?`Product "${term}" Not Found`:err}
    </div>
  );
};

