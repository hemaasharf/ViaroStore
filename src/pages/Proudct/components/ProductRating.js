import { FaStar } from 'react-icons/fa';
import React from 'react';

export const ProductRating = ({ rating }) => {
  // const items = Array.from({ length: rating }, (_, index) => index + 1);
  const items = Array(5).fill(false)

  const renderItem = items.map((item, index) => {

    if (index <= rating) {
      return <i key={index} className="text-lg  text-yellow-500 mr-1"><FaStar /></i>
    } else {
      return <i key={index} className="text-lg  text-gray-400 mr-1"><FaStar /></i>
    }
  })
  return (
    <>{renderItem}</>
  );
};


